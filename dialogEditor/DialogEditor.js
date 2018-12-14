//DialogEditor
function DialogEditor() {
	const children = [];
	let childWithFocus = null;
	
	let newLineButton;
	const newLineSize = {width: 125, height: 30};
	
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
			const newDialogLine = new DialogLine({x:110, y:110});
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
		if((childWithFocus != null) && (childWithFocus.type === ChildType.DialogLine)) {
			childWithFocus.textBoxGrew(deltaY);
		}
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