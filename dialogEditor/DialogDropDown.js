//Dialog Drop Down
function DialogDropDown(frame, items, initialDisplay = null) {
	this.type = ChildType.DialogDropDown;
	this.frame = frame;
	this.inFocus = false;
	let children = items;
	let childWithFocus = null;
	this.childToDraw = null;
	let state = ChildState.Normal;
	const LINE_THICKNESS = 2;
	let isShowingChildren = false;
	
	this.color = {
		normal:'white',
		hover:'gray',
		active:'purple'
	};
	
	this.titleColor = {
		normal:'black',
		hover:'black',
		active:'white'
	};

	let bkgdColor = this.color.normal;
	let lineColor = this.titleColor.normal;
	
	this.setState = function(newState) {
		state = newState;
		
		switch(newState) {
			case ChildState.Normal:
				bkgdColor = this.color.normal;
				lineColor = this.titleColor.normal;
			break;
			case ChildState.Hover:
				bkgdColor = this.color.hover;
				lineColor = this.titleColor.hover;
			break;
			case ChildState.Active:
				bkgdColor = this.color.active;
				lineColor = this.titleColor.active;
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
		fillRectangle(canvasContext, this.frame.x, this.frame.y, this.frame.width, this.frame.height, bkgdColor);
		strokeRectangle(canvasContext, this.frame.x, this.frame.y, this.frame.width, this.frame.height, lineColor, LINE_THICKNESS);
		
		if(isShowingChildren) {
			let child;
			for(let i = 0; i < children.length; i++) {
				child = children[i];
				child.draw();
			}
		} else {
			if(this.childToDraw != null) {
				if(this.childToDraw.type === ChildType.DialogLabel) {
					this.childToDraw.drawAt(this.childToDraw.frame.x, 
											this.frame.y + this.childToDraw.frame.height - (0.1 * this.frame.height));//0.1*height is fudge to center
				} else if(this.childToDraw.type === ChildType.DialogImage)
					this.childToDraw.drawAt(this.childToDraw.frame.x, this.frame.y);
			}
		}
	};
	
	this.action = function() {
		const oldFrameHeight = this.frame.height;
		if(isShowingChildren) {
			for(let i = 0; i < children.length - 1; i++) {
				this.frame.height -= children[i].frame.height;
			}
		} else {
			for(let i = 0; i < children.length - 1; i++) {
				this.frame.height += children[i].frame.height;
			}
		}
		
		dialogEditor.textBoxGrew(this.frame.height - oldFrameHeight);
		
		isShowingChildren = !isShowingChildren;
	};
	
	this.setFocus = function(x, y) {
		if(childWithFocus != null) {
			childWithFocus.lostFocus();
			childWithFocus = null;
			this.childToDraw = null;
		}
		
		this.inFocus = true;
		if(isShowingChildren) {
			if(children.length > 0) {
				for(let i = 0; i < children.length; i++) {
					child = children[i];
					if(mouseInside(child.frame)) {
						childWithFocus = child;
						this.childToDraw = child;
						child.setFocus(x, y);
					}
				}
			}
		}
		
		if(mouseInside(this.frame)) {
			this.setState(ChildState.Active);
			this.action();
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
	
	this.setColors = function(bkgd, line) {
		this.color.normal = bkgd;
		this.color.hover = line;
		
		this.titleColor.normal = line;
		this.titleColor.hover = bkgd;
		
		
		bkgdColor = this.color.normal;
		textColor = this.titleColor.normal;
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
}