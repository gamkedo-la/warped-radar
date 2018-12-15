//DialogEditor
function DialogEditor() {
	const children = [];
	let childWithFocus = null;
	
	let newLineButton;
	const newLineSize = {width: 125, height: 30};
	const newLinePadding = 50;
	let transitionInProgress = null;
	
	this.initialize = function() {
		addNewLineButton();
	};
	
	this.update = function() {
		
	};
	
	this.draw = function() {
		//Wipe the whole editor clean using CLEAR_COLOR
		fillRectangle(canvasContext, 0, 0, canvas.width, canvas.height, CLEAR_COLOR);
		
		let child;
		for(let i = 0; i < children.length; i++) {
			child = children[i];
			child.draw();
		}
	};
	
	this.setFocus = function(x, y) {
		let foundNewFocus = false;
		for(let i = 0; i < children.length; i++) {
			child = children[i];
			if(mouseInside(child.frame)) {
				if(childWithFocus != null) {
					childWithFocus.lostFocus();
					childWithFocus = null;
				}

				childWithFocus = child;
				child.setFocus(x, y);
				foundNewFocus = true;
				break;
			}
		}
		
		if(!foundNewFocus) {
			if(childWithFocus != null) {
				childWithFocus.lostFocus();
				childWithFocus = null;
			}
		}
	};
	
	this.updateDrag = function(deltaX, deltaY) {
		if(childWithFocus != null) {
			if(childWithFocus === newLineButton) {return;}
			childWithFocus.update(deltaX, deltaY);
		} else {
			for(let i = 0; i < children.length; i++) {
				if(children[i] === newLineButton) {continue;}
				children[i].update(deltaX, deltaY);
			}
		}
	};
	
	this.updateHover = function(x, y) {
		for(let i = 0; i < children.length; i++) {
			children[i].updateHover(x, y);
		}
	};
	
	const addNewLineButton = function() {
		const newLineFrame = new DialogFrame((canvas.width - newLineSize.width)/2, 150, newLineSize.width, newLineSize.height);
	
		//Temp for testing
		const newLineAction = function() {
			let newLineX = 110;
			let newLineY = 110;
			
			for(let i = children.length - 1; i >= 0; i--) {
				if(children[i].type != ChildType.DialogLine) {continue;}
				
				newLineX = children[i].frame.x;
				newLineY = children[i].frame.y + children[i].frame.height + newLinePadding;
				break;
			}
			
			const newDialogLine = new DialogLine({x:newLineX, y:newLineY});
			newDialogLine.initialize();
			children.push(newDialogLine);
		}
		
		newLineButton = new DialogButton(newLineFrame, 'New Line', newLineAction, ButtonStyle.Rounded);
		children.push(newLineButton);
	};
	
	this.keyboardEvent = function(newKey, oldKeys) {
		if(childWithFocus != null) {
			childWithFocus.keyboardEvent(newKey, oldKeys);
		}
	};
	
	this.textBoxGrew = function(deltaY) {
		if(childWithFocus != null) {
			if((childWithFocus.type === ChildType.DialogLine) || 
			   (childWithFocus.type === ChildType.DialogDropDown)) {
				childWithFocus.textBoxGrew(deltaY);
			}
		}
	};
	
	this.createTransition = function(child, position) {
		if((transitionInProgress != null) && (child.type === ChildType.DialogLine)) {
			const destPosition = this.findDestPosWithPos(child.frame, position);
			let newDestination = new DialogTransitionDestination(destPosition, childWithFocus, transitionInProgress);
			childWithFocus.addDestinationChild(newDestination);
			
			transitionInProgress = null;
		} else if(child.type === ChildType.DialogTextBox) {
			const originPosition = this.findOriginPosWithPos(child.frame, position);
			let newOrigin = new DialogTransitionOrigin(originPosition, child);
			
			childWithFocus.addOriginChild(newOrigin);
			
			transitionInProgress = newOrigin;
		}
	};
	
	this.findDestPosWithPos = function(frame, position) {
		let result = {x:0, y:0};
		
		const deltaX1 = Math.abs(position.x - frame.x);
		const deltaX2 = Math.abs(position.x - (frame.x + (frame.width / 2)));
		const deltaX3 = Math.abs(position.x - (frame.x + frame.width));

		const minX = Math.min(deltaX1, deltaX2, deltaX3);

		const deltaY1 = Math.abs(position.y - frame.y);
		const deltaY2 = Math.abs(position.y - (frame.y + (frame.height/2)));
		const deltaY3 = Math.abs(position.y - (frame.y + frame.height));
		
		const minY = Math.min(deltaY1, deltaY2, deltaY3);
		
		if((minX === deltaX2) && (minY === deltaY2)) {
			result.x = frame.x + frame.width/2;
			result.y = frame.y;
		} else {
			if(minX === deltaX1) {
				result.x = frame.x;
			} else if(minX === deltaX2) {
				result.x = frame.x + frame.width/2;
			} else {
				result.x = frame.x + frame.width;
			}
			
			if(minY === deltaY1) {
				result.y = frame.y;
			} else if(minY === deltaY2) {
				result.y = frame.y + frame.height/2;
			} else {
				result.y = frame.y + frame.height;
			}
		}
		
		return result;
	};
	
	this.findOriginPosWithPos = function(frame, position) {
		let result = {x:0, y:frame.getMidY()};
		
		const deltaX1 = Math.abs(position.x - frame.x);
		const deltaX2 = Math.abs(position.x - (frame.x + frame.width));
		
		if(deltaX1 <= deltaX2) {
			result.x = frame.x + 12;
		} else {
			result.x = frame.x + frame.width - 12;
		}
		
		return result;
	};
}

//DialogFrame
function DialogFrame(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.getMidX = function() {
		return (this.x + (width / 2));
	}
	this.getMidY = function() {
		return (this.y + (height / 2));
	}
}