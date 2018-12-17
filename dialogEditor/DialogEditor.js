//DialogEditor
function DialogEditor() {
	const children = [];
	let childWithFocus = null;
	
	let newLineButton;
	let saveButton;
	let conversationNameLabel;
	let conversationNameTextBox;
	const PADDING = 20;
	const newLineSize = {width: 125, height: 30};
	const newLinePadding = 50;
	let transitionInProgress = null;
	
	this.initialize = function() {
		addNewLineButton();
		addSaveButton();
		addConversationNameLabel();
		addConversationNameTextBox();
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
			if(childWithFocus === saveButton) {return;}
			if(childWithFocus === conversationNameLabel) {return;}
			if(childWithFocus === conversationNameTextBox) {return;}
			childWithFocus.update(deltaX, deltaY);
		} else {
			for(let i = 0; i < children.length; i++) {
				if(children[i] === newLineButton) {continue;}
				if(children[i] === saveButton) {continue;}
				if(children[i] === conversationNameLabel) {continue;}
				if(children[i] === conversationNameTextBox) {continue;}
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
		const newLineFrame = new DialogFrame((canvas.width - newLineSize.width)/2, 50, newLineSize.width, newLineSize.height);
	
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
		
		newLineButton = new DialogButton(newLineFrame, 'New Card', newLineAction, ButtonStyle.Rounded);
		children.push(newLineButton);
	};
	
	const addSaveButton = function() {
		const saveButtonFrame = new DialogFrame(newLineButton.frame.x + newLineButton.frame.width + PADDING, newLineButton.frame.y, newLineSize.width, newLineSize.height);
		
		const saveAction = function() {
			let variableText;
			if(conversationNameTextBox.getText()[0] === "") {
				console.error("Need to name this conversation before saving!");
				return;
			} 
			
			variableText = variablizeText(conversationNameTextBox.getText()[0]);
			let saveString = "let " + variableText + " = [\n    {\n        ";
			
			for(let i = 0; i < children.length; i++) {
				if(children[i] === newLineButton) {continue;}
				if(children[i] === saveButton) {continue;}
				if(children[i] === conversationNameLabel) {continue;}
				if(children[i] === conversationNameTextBox) {continue;}
				saveString += children[i].getSaveData();
			}
			
			console.log(saveString);
		}
		
		saveButton = new DialogButton(saveButtonFrame, "Save", saveAction, ButtonStyle.Rounded);
		children.push(saveButton);
	};
	
	const variablizeText = function(text) {
		let outputString = "";
		if(isLetter(text.charAt(0))) {
			outputString += text.charAt(0);
		} else {
			if(text.charAt(0) != "_") {
				outputString += "_";
			}
		}
		
		for(let i = 1; i < text.length; i++) {
			if((isLetter(text.charAt(i))) || (isNumberString(text.charAt(i)))) {
				outputString += text.charAt(i);
			} else {
				outputString += "_";
			}
		}
		
		return outputString;
	};
	
	const addConversationNameLabel = function() {
		const labelString = "Conversation Name:"
		const labelSize = sizeOfString(canvasContext, LabelFont.Large, labelString);
		conversationNameLabel = new DialogLabel({x:newLineButton.frame.x - labelSize.width - PADDING, 
											     y:newLineButton.frame.y + newLineButton.frame.height}, 
											     LabelFont.Large, 
												 labelString);
		children.push(conversationNameLabel);
	};
	
	const addConversationNameTextBox = function() {
		conversationNameTextBox = new DialogTextBox(new DialogFrame(newLineButton.frame.x, 
										   				  conversationNameLabel.frame.y + 2, //+2 fudge to align it with label 
										   				  newLineButton.frame.width + saveButton.frame.width + (PADDING),
										   				  conversationNameLabel.frame.height), LabelFont.Large);
		children.push(conversationNameTextBox);
	};
	
	this.keyboardEvent = function(newKey, oldKeys) {
		if(childWithFocus != null) {
			if(newKey === KEY_ESCAPE) {
				childWithFocus.lostFocus();
				childWithFocus = null;
			} else {
				if(newKey === KEY_BACKSPACE) {
					if(childWithFocus.type === ChildType.DialogLine) {
						const didRemoveChild = childWithFocus.remove();
						if(!didRemoveChild) {
							const childRef = childWithFocus;
							childWithFocus.lostFocus();
							childWithFocus = null;
							children.splice(children.indexOf(childRef), 1);
							
							if((transitionInProgress != null) && (transitionInProgress.shouldBeRemoved)) {
								transitionInProgress = null;
							}
							
							return;
						}					
					}
				}
				
				childWithFocus.keyboardEvent(newKey, oldKeys);
			}		
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
	
	this.removingTextBox = function(textBox) {
		if(textBox.dialogOrigin === transitionInProgress) {
			transitionInProgress = null;
		}
	};
	
	this.createTransition = function(child, position) {
		if((transitionInProgress != null) && (child.type === ChildType.DialogLine)) {
			const destPosition = this.findDestPosWithPos(child.frame, position);
			let newDestination = new DialogTransitionDestination(destPosition, child, transitionInProgress);
			
			childWithFocus.addDestinationChild(newDestination);
			
			transitionInProgress = null;
		} else if((transitionInProgress === null) && (child.type === ChildType.DialogTextBox)) {
			transitionInProgress = childWithFocus.addOriginChild(child, position);
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
		
		if((minX === deltaX2) && (minY === deltaY2)) {// +/- 8 = half frame height or width adjustment
			result.x = frame.x + frame.width/2;
			result.y = frame.y + 8;
		} else {
			if(minX === deltaX1) {
				result.x = frame.x + 8;
			} else if(minX === deltaX2) {
				result.x = frame.x + frame.width/2;
			} else {
				result.x = frame.x + frame.width - 8;
			}
			
			if(minY === deltaY1) {
				result.y = frame.y + 8;
			} else if(minY === deltaY2) {
				result.y = frame.y + frame.height/2;
			} else {
				result.y = frame.y + frame.height - 8;
			}
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