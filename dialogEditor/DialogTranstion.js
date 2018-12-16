//Dialog Transition Origin
function DialogTransitionOrigin(position, owner) {
	this.type = ChildType.DialogTransitionOrigin;
	this.frame = new DialogFrame(position.x - 8, position.y - 8, 16, 16);
	this.position = position;
	this.owner = owner;
	owner.dialogOrigin = this;
	this.mate = null;
	this.destinationOwner = null;
	this.destinationName = null;
	this.wasDeleted = false;
	this.THICKNESS = 2;
	this.isOnRight = true;
	
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
	
	this.snapToPosition = function() {
		this.frame.y = owner.frame.getMidY() - this.frame.height / 2;
		
		if(this.frame.x < owner.frame.getMidX()) {//should be on the left
			if(this.isOnRight) {//on the right, so we need to move
				owner.frame.x += 16;
			}
			this.isOnRight = false;
			this.frame.x = owner.frame.x - this.frame.width - 2;
		} else {//should be on the right
			if(!this.isOnRight) {
				owner.frame.x -= 16;
			}
			this.isOnRight = true;
			this.frame.x = owner.frame.x + owner.frame.width + 2;
		}
	};
	
	this.addDestination = function(mate, destinationOwner) {
		this.mate = mate;
		this.destinationOwner = destinationOwner;
		this.destinationName = destinationOwner.sceneName.getText();
	};
	
	this.delete = function() {
		this.wasDeleted = true;
		if(!this.mate.wasDeleted) {
			this.mate.delete();
		}
		
		this.owner.deleteTransition(this);
	};
	
	this.setFocus = function(x, y) {
		this.inFocus = true;
	};
	
	this.lostFocus = function() {
		this.inFocus = false;
	};
	
	this.setColors = function(bkgd, line) {
		this.color = line;
	};
	
	this.draw = function() {
		if(!mouseButtonHeld) {
			this.snapToPosition();
		}
		
		fillRectangle(canvasContext, this.frame.x, this.frame.y, this.frame.width, this.frame.height, JohnColor.Fill);
		strokeRectangle(canvasContext, this.frame.x, this.frame.y, this.frame.width, this.frame.height, JohnColor.Line, this.THICKNESS);
		if(this.mate != null) {
			strokeLine(canvasContext, this.frame.getMidX(), this.frame.getMidY(), this.mate.frame.getMidX(), this.mate.frame.getMidY(), JohnColor.Fill, this.THICKNESS);
		}
	};
	
	this.updateHover = function(x, y) {
		if(mouseInside(this.frame)) {
			this.setState(ChildState.Hover);
		} else {
			this.setState(ChildState.Normal);
		}
	};
	
	this.textBoxGrew = function(deltaY) {
		this.frame.y += deltaY;
	};
}

//Dialog Transition Destination
function DialogTransitionDestination(position, owner, origin) {
	this.type = ChildType.DialogTransitionDestination;
	this.position = position;
	this.frame = new DialogFrame(position.x - 8, position.y - 8, 16, 16);

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
	
	origin.addDestination(this, owner);
	
	this.delete = function() {
		this.wasDeleted = true;
		if(!origin.wasDeleted) {
			origin.delete();
		}
		
		owner.deleteTransition(this);
	};
	
	this.draw = function() {
		canvasContext.save();
		
		canvasContext.strokeStyle = JohnColor.Line;
		canvasContext.fillStyle = JohnColor.Fill;
		canvasContext.lineWidth = origin.THICKNESS;
		
		canvasContext.translate(this.frame.getMidX(),this.frame.getMidY());
		canvasContext.rotate(Math.atan2(this.frame.getMidY() - origin.frame.getMidY(), this.frame.getMidX() - origin.frame.getMidX()));
		
		canvasContext.beginPath();
		canvasContext.moveTo(-this.frame.width/2, -this.frame.height/2);
		canvasContext.lineTo(this.frame.width/2, 0);
		canvasContext.lineTo(-this.frame.width/2, this.frame.height/2);
		canvasContext.closePath();
		canvasContext.fill();
		canvasContext.stroke();
		
		canvasContext.restore();
		
		canvasContext.save();
		
		strokeLine(canvasContext, origin.frame.getMidX(), origin.frame.getMidY(), this.frame.getMidX(), this.frame.getMidY(), JohnColor.Fill, origin.THICKNESS);
		
		canvasContext.restore();
		
	};
	
	this.setFocus = function(x, y) {
		this.inFocus = true;
	};
	
	this.lostFocus = function() {
		this.inFocus = false;
	};
	
	this.setColors = function(bkgd, line) {
		this.color = line;
	};
	
	this.updateHover = function(x, y) {
		if(mouseInside(this.frame)) {
			this.setState(ChildState.Hover);
		} else {
			this.setState(ChildState.Normal);
		}
	};
	
	this.textBoxGrew = function(deltaY) {
//		this.frame.y += deltaY;
		//do nothing?
	};
}