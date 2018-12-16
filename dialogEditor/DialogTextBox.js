//Dialog Text Box
function DialogTextBox(frame, font) {
	this.type = ChildType.DialogTextBox;
	this.frame = frame;
	this.inFocus = false;
	let state = ChildState.Normal;
	let text = [""];
	let currentIndex = 0;
	const BORDER_THICKNESS = 2;
	const PADDING = 2;
	let titleSize = sizeOfString(canvasContext, font, "W");
	this.frame.height = titleSize.height;
	this.bkgd = 'white';
	this.color = 'black';
	let counts = 0;
	let shouldDrawCursor = false;
	this.dialogOrigin = null;

	this.setState = function(newState) {
		state = newState;
	};
	
	this.getState = function() {
		return state;
	};
		
	this.update = function(deltaX, deltaY) {
		this.frame.x += deltaX;
		this.frame.y += deltaY;
	};
	
	this.getText = function() {
		return text;
	};
	
	this.draw = function() {
		let totalThickness = BORDER_THICKNESS;
		if(this.inFocus) {
			counts++;
			if((counts % 20) === 0) {
				shouldDrawCursor = !shouldDrawCursor;
			}
		}
		fillRectangle(canvasContext, this.frame.x, this.frame.y, this.frame.width, this.frame.height, this.bkgd);
		strokeRectangle(canvasContext, this.frame.x, this.frame.y, this.frame.width, this.frame.height, this.color, totalThickness);
		
		const currentSize = sizeOfString(canvasContext, font, text[currentIndex]);
		let currentYPos = this.frame.y + titleSize.height - PADDING;
		
		if(currentSize.width >= this.frame.width) {
			this.frame.height += titleSize.height;
			
			//Need to notify DialogLine that I grew
			dialogEditor.textBoxGrew(titleSize.height);
			
			const lastIndex = text[currentIndex].lastIndexOf(" ");
			text[currentIndex + 1] = text[currentIndex].substring(lastIndex, text[currentIndex].length);
			text[currentIndex] = text[currentIndex].substring(0, lastIndex);
			currentIndex++;
		}
		
		for(let i = 0; i < text.length; i++) {
			colorText(canvasContext, text[i], this.frame.x + PADDING, currentYPos, this.color, font, 'left');
			currentYPos += titleSize.height;
		}
		
		if(shouldDrawCursor) {
			colorText(canvasContext, "|", this.frame.x + PADDING + currentSize.width, 
										  currentYPos - titleSize.height - (2 * PADDING),
										  this.color, font, 'left');
		}
	};
	
	this.drawAt = function(x, y) {
		fillRectangle(canvasContext, x, y, this.frame.width, this.frame.height, this.bkgd);
		strokeRectangle(canvasContext, x, y, this.frame.width, this.frame.height, this.color, BORDER_THICKNESS);

		colorText(canvasContext, this.title, x, y, this.color, font, 'left');
	};
	
	this.setFocus = function(x, y) {
		this.inFocus = true;
		shouldDrawCursor = true;
	};
	
	this.lostFocus = function() {
		this.inFocus = false;
		shouldDrawCursor = false;
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
			if(isPrintableKey(newKey)) {
				if(oldKeys.has(KEY_SHIFT)) {
					text[currentIndex] += (upperStringForKeyCode(newKey));			
				} else {
					text[currentIndex] += (lowerStringForKeyCode(newKey));
				}
			} else {
				if(newKey === KEY_BACKSPACE) {
					text[currentIndex] = text[currentIndex].substring(0, text[currentIndex].length - 1);
					if(text[currentIndex].length === 0) {
						if(text.length > 1) {
							text.pop();
							currentIndex--;
							this.frame.height -= titleSize.height;
							dialogEditor.textBoxGrew(-titleSize.height);
						}
					}
				}
			}
		}
	};
	
	this.textBoxGrew = function(deltaY) {
		this.frame.y += deltaY;
	};
}