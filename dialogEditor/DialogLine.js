//Dialog Line
function DialogLine(position) {
	this.type = ChildType.DialogLine;
	this.frame = new DialogFrame(position.x, position.y, 350, 250);
	this.inFocus = false;
	this.sceneName = null;
	const children = [];
	const transitions = [];
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
		const sceneNameLabel = this.buildSceneNameLabel();
		this.sceneName = this.buildSceneNameTextBox(sceneNameLabel);
		
		const leftImageDropDown = this.buildLeftImageDropDown(sceneNameLabel);
		const rightImageDropDown = this.buildRightImageDropDown(sceneNameLabel);

		const speakerLabel = this.buildSpeakerLabel(leftImageDropDown);
		const speakerDropDown = this.buildSpeakerDropDown(speakerLabel);

		const textLabel = this.buildTextLabel(leftImageDropDown);		
		const textBox = this.buildDialogTextBox(textLabel);
		const choicesButton = this.buildChoicesButton(textLabel, textBox);
		
		console.log("Choices Length: " + choices.length);	
	};
	
	this.buildSceneNameLabel = function() {
		const sceneNameLabel = new DialogLabel({x:this.frame.x + LINE_SPACING + CHILD_PADDING, 
											  y:this.frame.y + LINE_SPACING + CHILD_PADDING}, 
											 LabelFont.Medium, 
											 "Scene: ");
		children.push(sceneNameLabel);
		return sceneNameLabel
	};
	
	this.buildSceneNameTextBox = function(previousChild) {
		const sceneNameTextBox = new DialogTextBox(new DialogFrame(previousChild.frame.x + previousChild.frame.width - CHILD_PADDING, 
										   				  previousChild.frame.y + 2, //+2 fudge to center on label
										   				  this.frame.width - (2 * (LINE_SPACING + CHILD_PADDING)) - previousChild.frame.width,
										   				  25), LabelFont.Medium);//25 is height
		children.push(sceneNameTextBox);
		
		return sceneNameTextBox;
	};
	
	this.buildSpeakerLabel = function(previousChild) {
		const speakerString = "Speaker: ";
		const labelSize = sizeOfString(canvasContext, LabelFont.Medium, speakerString);
		const speakerLabel = new DialogLabel({x:this.frame.getMidX() - (labelSize.width/2), 
											  y:previousChild.frame.y}, 
											  LabelFont.Medium, 
											  speakerString);
		children.push(speakerLabel);
		return speakerLabel
	};
	
	this.buildSpeakerDropDown = function(previousChild) {
		const speakerDropDownFrame = new DialogFrame(previousChild.frame.x,
													 previousChild.frame.y + previousChild.frame.height,
													 previousChild.frame.width, 
													 previousChild.frame.height);
		
		const johnLabel = new DialogLabel({x:speakerDropDownFrame.x, 
										   y:speakerDropDownFrame.y}, 
										   LabelFont.Medium, 
										   Speaker.John);
		const roseLabel = new DialogLabel({x:speakerDropDownFrame.x, 
										   y:johnLabel.frame.y + johnLabel.frame.height}, 
										   LabelFont.Medium, 
										   Speaker.Rose);
		speakerDropDown = new DialogDropDown(speakerDropDownFrame,[johnLabel, roseLabel]);
		children.push(speakerDropDown);
		
		return speakerDropDown;
	};
	
	this.buildLeftImageDropDown = function(previousChild) {
		const leftImageDropDownFrame = new DialogFrame(this.frame.x + LINE_SPACING + (2 * CHILD_PADDING),
											   previousChild.frame.y + previousChild.frame.height + (2 * CHILD_PADDING),
											   this.frame.width/4, this.frame.height/2);
		
		const imagesToShow = [];
		for(let i = 0; i < imageList.length; i++) {
			const imgFrame = new DialogFrame(leftImageDropDownFrame.x,
											 leftImageDropDownFrame.y + (i * leftImageDropDownFrame.height),
											 leftImageDropDownFrame.width, 
											 leftImageDropDownFrame.height);
											 
			const leftImage = new DialogImage(imgFrame, imageList[i].imgName, imageList[i].speaker);
			imagesToShow.push(leftImage);
		}
		
		const leftImageDropDown = new DialogDropDown(leftImageDropDownFrame, imagesToShow);
		children.push(leftImageDropDown);
		
		return leftImageDropDown;
	};
	
	this.buildRightImageDropDown = function(previousChild) {
		const rightImageDropDownFrame = new DialogFrame(this.frame.x + this.frame.width - LINE_SPACING - (2 * CHILD_PADDING) - (this.frame.width/4),
											   previousChild.frame.y + previousChild.frame.height + (2 * CHILD_PADDING),
											   this.frame.width/4, this.frame.height/2);
		
		const imagesToShow = [];
		for(let i = 0; i < imageList.length; i++) {
			const imgFrame = new DialogFrame(rightImageDropDownFrame.x,
											 rightImageDropDownFrame.y + (i * rightImageDropDownFrame.height),
											 rightImageDropDownFrame.width, 
											 rightImageDropDownFrame.height);
											 
			const rightImage = new DialogImage(imgFrame, imageList[i].imgName, imageList[i].speaker);
			imagesToShow.push(rightImage);
		}
		
		const rightImageDropDown = new DialogDropDown(rightImageDropDownFrame, imagesToShow);
		children.push(rightImageDropDown);
		
		return rightImageDropDown;
	};
	
	this.buildTextLabel = function(previousChild) {
		const textLabel = new DialogLabel({x:this.frame.x + LINE_SPACING + CHILD_PADDING, 
										   y:previousChild.frame.y + previousChild.frame.height + CHILD_PADDING}, 
										   LabelFont.Medium, 
										   "Text: ");
		children.push(textLabel);
		
		return textLabel;
	};
	
	this.buildDialogTextBox = function(previousChild) {
		const textBox = new DialogTextBox(new DialogFrame(this.frame.x + LINE_SPACING + 1.5 * CHILD_PADDING, 
										   				  previousChild.frame.y + previousChild.frame.height + CHILD_PADDING,
										   				  this.frame.width - (2 * (LINE_SPACING + (1.5 * CHILD_PADDING))),
										   				  25), LabelFont.Medium);//25 is height
		children.push(textBox);
		choices.push(textBox);
		
		return textBox;
	};
	
	this.buildChoicesButton = function(previousChild, firstTextBox) {
		const choicesButtonFrame = new DialogFrame(previousChild.frame.x + previousChild.frame.width,
												   previousChild.frame.y,
												   previousChild.frame.width / 2,
												   previousChild.frame.height);
		const choicesButtonAction = function() {
			const lastFrame = choices[choices.length - 1].frame;
			const thisFrame = new DialogFrame(firstTextBox.frame.x, 
										   	  firstTextBox.frame.y + ((choices.length) * (firstTextBox.frame.height + CHILD_PADDING)),
										   	  firstTextBox.frame.width,
										   	  firstTextBox.frame.height);
										   	  
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
		
		return moreChoicesButton;
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
			if(child === childWithFocus) {continue;}
			if((child.type === ChildType.DialogTransitionOrigin) || (child.type === ChildType.DialogTransitionDestination)) {continue;}
			child.draw();
		}
		
		if(childWithFocus != null) {
			childWithFocus.draw();
		}
		
		for(let i = 0; i < transitions.length; i++) {
			transitions[i].draw();
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
		const colors = colorsForSpeaker(newSpeaker);
		
		bkgdColor = colors.bkgd;
		lineColor = colors.line;
		
		for(let i = 0; i < children.length; i++) {
			children[i].setColors(colors.bkgd, colors.line);
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
					
					if((childWithFocus.type === ChildType.DialogTextBox) && (choices.length > 1)) {
						for(let j = 0; j < choices.length; j++) {
							if(choices[j] === childWithFocus) {
								dialogEditor.createTransition(childWithFocus, {x:x, y:y});
							}
						}
					}
				}
			}
			
			let shouldCreateTransition = true;
			for(let i = 0; i < transitions.length; i++) {
				if((transitions[i].type === ChildType.DialogTransitionOrigin) && (transitions[i].mate === null)) {
					//want to do nothing
					shouldCreateTransition = false;
				}
			}

			if(shouldCreateTransition) {
				dialogEditor.createTransition(this, {x:x, y:y});
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
		if(childWithFocus != null) {
			if((childWithFocus.type === ChildType.DialogTextBox) || 
			   (childWithFocus.type === ChildType.DialogButton) ||
			   (childWithFocus.type === ChildType.DialogDropDown)) {
				this.frame.height += deltaY;
			}
		}
	};
	
	this.addDestinationChild = function(newDestination) {
		transitions.push(newDestination);
		children.push(newDestination);
	};
	
	this.addOriginChild = function(newOrigin) {
		transitions.push(newOrigin);
		children.push(newOrigin);
	};
}