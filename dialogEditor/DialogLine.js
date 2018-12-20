//Dialog Line
function DialogLine(position) {
	this.type = ChildType.DialogLine;
	this.frame = new DialogFrame(position.x, position.y, 380, 250);
	this.inFocus = false;
	this.sceneName = null;
	const children = [];
	const transitions = [];
	let childWithFocus = null;
	const CORNER_RADIUS = 15;
	const LINE_SPACING = 12;
	const CHILD_PADDING = 6;
	const TEXTBOX_HEIGHT = 25;
	const INWARD = true;
	let state = ChildState.Normal;
	let lineWidth = LineWidth.Normal;
	
	this.leftImageDropDown;
	this.rightImageDropDown;
	this.leftLeaveDropDown;
	this.rightLeaveDropDown;
	this.choicesButton;
	this.unChoicesButton;
	
	let speaker = null;
	let bkgdColor = NeutralColor.Fill;
	let lineColor = NeutralColor.Line;
	
	const choices = [];
	
	let speakerDropDown;
	
	this.initialize = function() {
		const sceneNameLabel = this.buildSceneNameLabel();
		this.sceneName = this.buildSceneNameTextBox(sceneNameLabel);
		
		this.leftImageDropDown = this.buildLeftImageDropDown(sceneNameLabel);
		this.rightImageDropDown = this.buildRightImageDropDown(sceneNameLabel);

		const speakerLabel = this.buildSpeakerLabel(this.leftImageDropDown);
		speakerDropDown = this.buildSpeakerDropDown(speakerLabel);
		
		const leaveLabel = this.buildLeaveLabel(speakerDropDown);
		this.leftLeaveDropDown = this.buildLeftLeaveDropDown(leaveLabel, this.leftImageDropDown);
		this.rightLeaveDropDown = this.buildRightLeaveDropDown(leaveLabel, this.rightImageDropDown);

		const textLabel = this.buildTextLabel(this.leftImageDropDown);		
		const textBox = this.buildDialogTextBox(textLabel);
		this.choicesButton = this.buildChoicesButton(textLabel, textBox);
		this.unChoicesButton = this.buildUnchoicesButton(this.choicesButton);
		
		this.setSpeaker(speaker);
	};
	
	this.initializeWithData = function(data) {
		this.initialize();
		let newData = data.replace(/ /g, '');
		newData = newData.replace(/\n/g, '');
		
		newData = newData.substring(1, newData.length);
		newData = newData.substring(0, newData.length - 2);
		
		const dataArray = newData.split(",");
		
		for(let i = 0; i < dataArray.length; i++) {
			let newString = dataArray[i];
			const colonPos = newString.indexOf(":");
			newString = newString.substring(colonPos + 1, newString.length);
			dataArray[i] = newString.replace(/"/g, '');
			if(dataArray[i] === "null") {dataArray[i] = null;}
			console.log(dataArray[i]);
		}
		
//		this.sceneName.setText(dataArray[0]);
		
		this.setSpeaker(dataArray[1]);
		speakerDropDown.setChildToDraw(dataArray[1]);
		
		this.leftImageDropDown.setChildToDraw(imageForString(dataArray[5]));
		this.rightImageDropDown.setChildToDraw(imageForString(dataArray[6]));
		
		this.leftLeaveDropDown.setChildToDraw(dataArray[7]);
		this.rightLeaveDropDown.setChildToDraw(dataArray[8]);
		
		//Working here...Need to iterate over the text boxes to add them
		
//		console.log(dataArray.length);
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
										   				  TEXTBOX_HEIGHT), LabelFont.Medium);//25 is height
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
	
	this.buildLeaveLabel = function(previousChild) {
		const leaveString = "Leave:";
		const labelSize = sizeOfString(canvasContext, LabelFont.Medium, leaveString);
		const leaveLabel = new DialogLabel({x:this.frame.getMidX() - (labelSize.width/2), 
											y:previousChild.frame.y + previousChild.frame.height + CHILD_PADDING}, 
											LabelFont.Medium, 
											leaveString);
		children.push(leaveLabel);
		return leaveLabel
	};
	
	this.buildLeftLeaveDropDown = function(previousChild, leftChild) {
		const labelSize = sizeOfString(canvasContext, LabelFont.Medium, "Yes ");
		const leftLeaveDropDownFrame = new DialogFrame(leftChild.frame.x + leftChild.frame.width + CHILD_PADDING,
													 previousChild.frame.y,
													 labelSize.width, 
													 previousChild.frame.height);
		
		const noLabel = new DialogLabel({x:leftLeaveDropDownFrame.x, 
										   y:leftLeaveDropDownFrame.y}, 
										   LabelFont.Medium, 
										   "No");
		const yesLabel = new DialogLabel({x:leftLeaveDropDownFrame.x, 
										   y:noLabel.frame.y + noLabel.frame.height}, 
										   LabelFont.Medium, 
										   "Yes");
		const leftLeaveDropDown = new DialogDropDown(leftLeaveDropDownFrame,[noLabel, yesLabel]);
		children.push(leftLeaveDropDown);
		
		return leftLeaveDropDown;
	};
	
	this.buildRightLeaveDropDown = function(previousChild, rightChild) {
		const labelSize = sizeOfString(canvasContext, LabelFont.Medium, "Yes ");
		const rightLeaveDropDownFrame = new DialogFrame(rightChild.frame.x - labelSize.width - CHILD_PADDING,
													 previousChild.frame.y,
													 labelSize.width, 
													 previousChild.frame.height);
		
		const noLabel = new DialogLabel({x:rightLeaveDropDownFrame.x, 
										   y:rightLeaveDropDownFrame.y}, 
										   LabelFont.Medium, 
										   "No");
		const yesLabel = new DialogLabel({x:rightLeaveDropDownFrame.x, 
										   y:noLabel.frame.y + noLabel.frame.height}, 
										   LabelFont.Medium, 
										   "Yes");
		const rightLeaveDropDown = new DialogDropDown(rightLeaveDropDownFrame,[noLabel, yesLabel]);
		children.push(rightLeaveDropDown);
		
		return rightLeaveDropDown;
	};
	
	this.buildLeftImageDropDown = function(previousChild) {
		const leftImageDropDownFrame = new DialogFrame(this.frame.x + LINE_SPACING + (1.5 * CHILD_PADDING),
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
		const rightImageDropDownFrame = new DialogFrame(this.frame.x + this.frame.width - LINE_SPACING - (1.5 * CHILD_PADDING) - (this.frame.width/4),
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
										   				  this.frame.width - (2 * (LINE_SPACING + (1.5 * CHILD_PADDING))) - 18, //18 makes room for transitions
										   				  TEXTBOX_HEIGHT), LabelFont.Medium);
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
			let originOffset = 0;
			if(firstTextBox.dialogOrigin != null) {
				originOffset = -16;
			}
			
			const lastFrame = choices[choices.length - 1].frame;
			const thisFrame = new DialogFrame(firstTextBox.frame.x + originOffset, 
											  lastFrame.y + lastFrame.height + CHILD_PADDING,
										   	  firstTextBox.frame.width,
										   	  TEXTBOX_HEIGHT);
										   	  
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
	
	this.buildUnchoicesButton = function(previousChild) {
		const choicesButtonFrame = new DialogFrame(previousChild.frame.x + previousChild.frame.width,
												   previousChild.frame.y,
												   previousChild.frame.width,
												   previousChild.frame.height);
		const choicesButtonAction = function() {
			if(choices.length < 2) {return;}
			const textBoxToRemove = choices[choices.length - 1];
			dialogEditor.removingTextBox(textBoxToRemove);
			dialogEditor.textBoxGrew(-textBoxToRemove.frame.height - CHILD_PADDING);
			
			if(textBoxToRemove.dialogOrigin != null) {
				textBoxToRemove.dialogOrigin.remove();
			}
			
			choices.splice(choices.length - 1, 1);
			children.splice(children.indexOf(textBoxToRemove), 1);
		};
		
		const fewerChoicesButton = new DialogButton(choicesButtonFrame, "-", choicesButtonAction, ButtonStyle.Rounded);
		children.push(fewerChoicesButton);
		
		return fewerChoicesButton;
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
		if((childWithFocus != null) && (childWithFocus.type === ChildType.DialogTransitionOrigin)) {
			childWithFocus.update(deltaX, deltaY);
			return;
		} else if((childWithFocus != null) && (childWithFocus.type === ChildType.DialogTransitionDestination)) {
			childWithFocus.update(deltaX, deltaY);
			return;
		}
		
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

		for(let i = transitions.length - 1; i >= 0 ; i--) {
			if(transitions[i].shouldBeRemoved) {
				transitions.splice(i, 1);
			}
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
		console.log(newSpeaker);
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
				if(child.type === ChildType.DialogLabel) {continue;}
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
	
	this.remove = function() {
		if(childWithFocus != null) {
			//do stuff
			return true;
		}
		
		for(let i = 0; i < transitions.length; i++) {
			transitions[i].remove();
		}
		
		return false;
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
		} else {
			dialogEditor.hasNoChildWithFocus(this, newKey, oldKeys);
		}
	};
	
	this.textBoxGrew = function(deltaY) {
		this.frame.height += deltaY;
		if((childWithFocus === this.choicesButton) || (childWithFocus === this.unChoicesButton)) {return;}
		
		for(let i = 0; i < children.length; i++) {
			if(children[i].frame.y > childWithFocus.frame.y) {
				children[i].textBoxGrew(deltaY);
			}
		}
	};
	
	this.addDestinationChild = function(newDestination) {
		transitions.push(newDestination);
		children.push(newDestination);
	};
	
	this.addOriginChild = function(child, position) {
		let newOrigin = null;
		
		if(child.dialogOrigin === null) {
			const originPosition = this.findOriginPosWithPos(child.frame, position);
			newOrigin = new DialogTransitionOrigin(originPosition, child);
			
			if(newOrigin.frame.x < child.frame.x) {
				newOrigin.isOnRight = false;
			}
			
			transitions.push(newOrigin);
			children.push(newOrigin);
		}
		
		return newOrigin;
	};
	
	this.findOriginPosWithPos = function(frame, position) {
		let result = {x:0, y:frame.getMidY()};
		
		const deltaX1 = Math.abs(position.x - frame.x);
		const deltaX2 = Math.abs(position.x - (frame.x + frame.width));
		
		if(deltaX1 <= deltaX2) {
			frame.x += 16;
			result.x = frame.x - 10;
			
		} else {
			result.x = frame.x + frame.width + 10;
		}
		
		return result;
	};
	
	this.getSaveData = function() {
		let saveString = "scene: \"";
		if(this.sceneName != null) {
			const sceneText = this.sceneName.getText();
			for(let i = 0; i < sceneText.length; i++) {
				saveString += this.sceneName.getText()[i];
			}
		} else {
			saveString += "null"
		}
		
		saveString += "\",\n        ";
		
		saveString += "who: ";
		if(speaker != null) {
			saveString += "\"" + speaker + "\"";
		} else {
			saveString += "null";
		}
		
		saveString += ",\n        ";
		
		saveString += "nameCol: ";
		if(speaker != null) {
			saveString += "\"" + bkgdColor + "\""
		} else {
			saveString += "null";
		}

		saveString += ",\n        ";
		
		saveString += "voice: ";
		if(speaker != null) {
			saveString += this.voiceForSpeaker(speaker);
		} else {
			saveString += "null";
		}
		
		saveString += ",\n        ";
		
		saveString += "text: ";
		if(choices.length === 1) {
			const choice0TextArray = choices[0].getText();
			saveString += "\"";
			for(let i = 0; i < choice0TextArray.length; i++) {
				saveString += choice0TextArray[i];
			}
			saveString += "\"";
		} else {
			saveString += "null";
		}
		
		saveString += ",\n        ";		
		
		saveString += "leftPic: ";
		if(this.leftImageDropDown.childToDraw != null) {
			const imageName = this.imageNameStringForImage(this.leftImageDropDown.childToDraw.image);
			saveString += imageName;
		} else {
			saveString += "null";
		}
		
		saveString += ",\n        ";
		
		saveString += "rightPic: ";
		if(this.rightImageDropDown.childToDraw != null) {
			const imageName = this.imageNameStringForImage(this.rightImageDropDown.childToDraw.image);
			saveString += imageName;
		} else {
			saveString += "null";
		}
		
		saveString += ",\n\n        ";
		
		saveString += "leftPicLeave: ";
		if(this.leftLeaveDropDown.childToDraw != null) {
			const willLeave = this.leftLeaveDropDown.childToDraw.title;
			if(willLeave === "Yes") {
				saveString += "true";
			} else {
				saveString += "false";
			}
		} else {
			saveString += "null";
		}
		
		saveString += ",\n        ";

		saveString += "rightPicLeave: ";
		if(this.rightLeaveDropDown.childToDraw != null) {
			const willLeave = this.rightLeaveDropDown.childToDraw.title;
			if(willLeave === "Yes") {
				saveString += "true";
			} else {
				saveString += "false";
			}
		} else {
			saveString += "null";
		}
		
		saveString += ",\n\n        ";

		saveString += "choices: ";
		if(choices.length > 1) {
			saveString += "[[\"";
			for(let i = 0; i < choices.length; i++) {
				const thisChoice = choices[i];
				const choiceText = thisChoice.getText();
				for(let j = 0; j < choiceText.length; j++) {
					saveString += choiceText[j];
				}
				saveString += "\", ";
				
				//add a destination here
				for(let k = 0; k < transitions.length; k++) {
					if(transitions[k].type === ChildType.DialogTransitionOrigin) {
						if(transitions[k].owner === thisChoice) {
							if(transitions[k].destinationName != null) {
								saveString += "\"" + transitions[k].destinationName + "\"";
							} else {
								saveString += null;
							}
						}
					}
				}
				
				if(i < choices.length - 1) {
					saveString += "], [\"";
				} else {
					saveString += "]]\n    },";
				}
			}
		} else {
			saveString += "null\n    },";
		}
		
		saveString += "\n        ";

		return saveString;
	};
	
	this.voiceForSpeaker = function(speaker) {
		switch(speaker) {
			case Speaker.John:
				return "voiceLow1";
			case Speaker.Rose:
				return "voiceHigh2";
		}
	}
	
	this.imageNameStringForImage = function(image) {
		switch(image) {
			case johnHappyPic:
				return "johnHappyPic";
			case johnMadPic:
				return "johnMadPic";
			case roseHappyPic:
				return "roseHappyPic";
			case roseAnnoyedPic:
				return "roseAnnoyedPic";
		}
	};
}