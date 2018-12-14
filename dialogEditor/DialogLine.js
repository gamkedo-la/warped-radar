//Dialog Line
function DialogLine(position) {
	this.type = ChildType.DialogLine;
	this.frame = new DialogFrame(position.x, position.y, 350, 250);
	this.inFocus = false;
	let children = [];
	let childWithFocus = null;
	const CORNER_RADIUS = 15;
	const LINE_SPACING = 12;
	const CHILD_PADDING = 6;
	const INWARD = true;
	let state = ChildState.Normal;
	let lineWidth = LineWidth.Normal;
	
	let speaker = null;
	let bkgdColor = NeutralColor.Fill;
	let lineColor = NeutralColor.Line;
	
	const choices = [];
	
	let speakerDropDown;
	
	this.initialize = function() {
		const speakerLabel = new DialogLabel({x:this.frame.x + LINE_SPACING + CHILD_PADDING, 
											  y:this.frame.y + LINE_SPACING + CHILD_PADDING}, 
											 LabelFont.Medium, 
											 "Speaker: ");
		children.push(speakerLabel);
		
		const textLabel = new DialogLabel({x:this.frame.x + LINE_SPACING + CHILD_PADDING, 
										   y:this.frame.getMidY() + LINE_SPACING + CHILD_PADDING}, 
										   LabelFont.Medium, 
										   "Text: ");
		children.push(textLabel);
		
		const textBox = new DialogTextBox(new DialogFrame(this.frame.x + LINE_SPACING + 1.5 * CHILD_PADDING, 
										   				  textLabel.frame.y + textLabel.frame.height + CHILD_PADDING,
										   				  this.frame.width - (2 * (LINE_SPACING + (1.5 * CHILD_PADDING))),
										   				  25), LabelFont.Medium);//25 is height
		children.push(textBox);
		choices.push(textBox);
		
		const choicesButtonFrame = new DialogFrame(textLabel.frame.x + textLabel.frame.width,
												   textLabel.frame.y + CHILD_PADDING / 2,
												   textLabel.frame.width / 2,
												   textLabel.frame.height);
		const choicesButtonAction = function() {
			const lastFrame = choices[choices.length - 1].frame;
			const thisFrame = new DialogFrame(choices[0].frame.x, 
										   	  lastFrame.y + lastFrame.height + CHILD_PADDING,
										   	  choices[0].frame.width,
										   	  25);//25 is height
										   	  
			const anotherTextBox = new DialogTextBox(thisFrame, LabelFont.Medium);
			children.push(anotherTextBox);
			choices.push(anotherTextBox);
			
			if(speaker != null) {
				anotherTextBox.setColors(bkgdColor, lineColor);
			}
			
			dialogEditor.textBoxGrew(anotherTextBox.frame.height + CHILD_PADDING);
		};
		
		const moreChoicesButton = new DialogButton(choicesButtonFrame, "+", choicesButtonAction, ButtonStyle.Rounded);
		children.push(moreChoicesButton);
		
		const speakerDropDownFrame = new DialogFrame(speakerLabel.frame.x + speakerLabel.frame.width,
													 this.frame.y + LINE_SPACING + CHILD_PADDING + 4, //+4 fudge to center on Label 
													 speakerLabel.frame.width, 
													 speakerLabel.frame.height);
		
		const johnLabel = new DialogLabel({x:speakerLabel.frame.x + speakerLabel.frame.width + CHILD_PADDING, 
										   y:this.frame.y + LINE_SPACING + CHILD_PADDING}, 
										   LabelFont.Medium, 
										   Speaker.John);
		const roseLabel = new DialogLabel({x:speakerLabel.frame.x + speakerLabel.frame.width + CHILD_PADDING, 
										   y:johnLabel.frame.y + johnLabel.frame.height}, 
										   LabelFont.Medium, 
										   Speaker.Rose);
		speakerDropDown = new DialogDropDown(speakerDropDownFrame,[johnLabel, roseLabel]);
		children.push(speakerDropDown);
	};
	
	this.setState = function(newState) {
		if(this.inFocus) {
			if(newState != ChildState.Active) {return;}
		}
			
		state = newState;
		
		switch(newState) {
			case ChildState.Normal:
				lineWidth = LineWidth.Normal;
			break;
			case ChildState.Hover:
				lineWidth = LineWidth.Hover;
			break;
			case ChildState.Active:
				lineWidth = LineWidth.Active;
			break;
		}
	};
	
	this.getState = function() {
		return state;
	};
		
	this.update = function(deltaX, deltaY) {
		this.frame.x += deltaX;
		this.frame.y += deltaY;
		for(let i = 0; i < children.length; i++) {
			children[i].update(deltaX, deltaY);
		}
	};
	
	this.draw = function() {
		if(speaker != null) {
			fillRoundedRectangle(canvasContext, this.frame.x, this.frame.y, this.frame.width, this.frame.height, bkgdColor, CORNER_RADIUS);
		}
		
		doubleStrokeRoundedRectangle(canvasContext, this.frame.x, this.frame.y, this.frame.width, this.frame.height, lineColor, lineWidth, CORNER_RADIUS, LINE_SPACING, INWARD);
		
		let child;
		for(let i = 0; i < children.length; i++) {
			child = children[i];
			child.draw();
		}
				
		if((childWithFocus === speakerDropDown) && (childWithFocus.childToDraw != null)) {
			if(childWithFocus.childToDraw.title != speaker) {
				switch(childWithFocus.childToDraw.title) {
					case Speaker.John:
						this.setSpeaker(Speaker.John);
					break;
					case Speaker.Rose:
						this.setSpeaker(Speaker.Rose);
					break;
				}
			}
		}
	};
	
	this.setSpeaker = function(newSpeaker) {
		speaker = newSpeaker;
		switch(newSpeaker) {
			case Speaker.John:
				bkgdColor = JohnColor.Fill;
				lineColor = JohnColor.Line;
			break;
			case Speaker.Rose:
				bkgdColor = RoseColor.Fill;
				lineColor = RoseColor.Line;
			break;
		}
		
		console.log("Speaker: " + newSpeaker);
		
		for(let i = 0; i < children.length; i++) {
			children[i].setColors(bkgdColor, lineColor);
		}
	};
	
	this.setFocus = function(x, y) {
		if(childWithFocus != null) {
			childWithFocus.lostFocus();
			childWithFocus = null;
		}
		
		this.inFocus = true;
		if(children.length > 0) {
			for(let i = 0; i < children.length; i++) {
				child = children[i];
				if(mouseInside(child.frame)) {
					childWithFocus = child;
					child.setFocus(x, y);
				}
			}
		}
		
		if(mouseInside(this.frame)) {
			this.setState(ChildState.Active);
		}
	};
	
	this.lostFocus = function() {
		if(childWithFocus != null) {
			childWithFocus.lostFocus();
			childWithFocus = null;
		}
		
		this.inFocus = false;
		this.setState(ChildState.Normal);
	};
	
	this.updateHover = function(x, y) {
		if(mouseInside(this.frame)) {
			this.setState(ChildState.Hover);
		} else {
			this.setState(ChildState.Normal);
		}
		
		for(let i = 0; i < children.length; i++) {
			children[i].updateHover(x, y);
		}
	};
	
	this.keyboardEvent = function(newKey, oldKeys) {
		if(childWithFocus != null) {
			childWithFocus.keyboardEvent(newKey, oldKeys);
		}
	};
	
	this.textBoxGrew = function(deltaY) {
		console.log("DeltaY: " + deltaY);
		if(childWithFocus != null) {
			if((childWithFocus.type === ChildType.DialogTextBox) || (childWithFocus.type === ChildType.DialogButton)) {
				this.frame.height += deltaY;
			}
		}
	};
}