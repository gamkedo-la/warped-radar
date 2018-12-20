//Dialog Text Box
function DialogTextBox(frame, font) {
	this.type = ChildType.DialogTextBox;
	this.frame = frame;
	this.inFocus = false;
	let state = ChildState.Normal;
	let currentIndex = 0;
	const BORDER_THICKNESS = 2;
	const PADDING = 2;
	let titleSize = sizeOfString(canvasContext, font, "W");
	this.frame.height = titleSize.height;
	this.bkgd = 'white';
	this.color = 'black';
	let counts = 0;
	this.dialogOrigin = null;
	this.cursor = new DialogCursor({x: this.frame.x, y: this.frame.y}, font, this.frame.width);

	this.setState = function(newState) {
		state = newState;
	};
	
	this.getState = function() {
		return state;
	};
		
	this.update = function(deltaX, deltaY) {
		this.frame.x += deltaX;
		this.frame.y += deltaY;
		
		this.cursor.update(deltaX, deltaY);
	};
	
	this.getText = function() {
		return this.cursor.text;
	};
	
	this.draw = function() {
		if((this.dialogOrigin != null) && (this.dialogOrigin.shouldBeRemoved)) {
			if(!this.dialogOrigin.isOnRight) {
				this.frame.x -= (this.dialogOrigin.frame.width);
			}
			this.dialogOrigin = null;
		}
		
		let totalThickness = BORDER_THICKNESS;
		if(this.inFocus) {
			counts++;
			if((counts % 20) === 0) {
				this.cursor.shouldDrawCursor = !this.cursor.shouldDrawCursor;
			}
		}
		
		this.frame.height = this.cursor.frame.height;
		
		fillRectangle(canvasContext, this.frame.x, this.frame.y, this.frame.width, this.frame.height, this.bkgd);
		strokeRectangle(canvasContext, this.frame.x, this.frame.y, this.frame.width, this.frame.height, this.color, totalThickness);
		
		this.cursor.frame.x = this.frame.x;
		this.cursor.frame.y = this.frame.y;
		this.cursor.draw();
	};
	
	this.drawAt = function(x, y) {
		fillRectangle(canvasContext, x, y, this.frame.width, this.frame.height, this.bkgd);
		strokeRectangle(canvasContext, x, y, this.frame.width, this.frame.height, this.color, BORDER_THICKNESS);

		colorText(canvasContext, this.title, x, y, this.color, font, 'left');
	};
	
	this.setFocus = function(x, y) {
		this.inFocus = true;
		this.cursor.shouldDrawCursor = true;
	};
	
	this.lostFocus = function() {
		this.inFocus = false;
		this.cursor.shouldDrawCursor = false;
	};
	
	this.deleteTransition = function() {
		if((this.dialogOrigin != null) && (this.dialogOrigin.mate === null)) {
			this.dialogOrigin.remove()
		}
	};
	
	this.setColors = function(bkgd, line) {
		this.bkgd = bkgd;
		this.color = line;
	};
	
	this.updateHover = function(x, y) {
		if(mouseInside(this.frame)) {
			this.setState(ChildState.Hover);
		} else {
			this.setState(ChildState.Normal);
		}
	};
	
	this.keyboardEvent = function(newKey, oldKeys) {
		if(this.inFocus) {
			this.cursor.keyboardEvent(newKey, oldKeys);
		}
	};
	
	this.textBoxGrew = function(deltaY) {
		this.frame.y += deltaY;
	};
}