function colliderClass(x, y, width, height, offsetX, offsetY) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    this.width = width;
    this.height = height;
    this.x = x + this.offsetX;
    this.y = y + this.offsetY;
    this.box = {};

    this.setCollider = function(posX, posY) {
  		this.box.left = posX - this.width/2 + this.offsetX;
  		this.box.right = posX + this.width/2 + this.offsetX;
  		this.box.bottom = posY + this.height/2 + this.offsetY;
  		this.box.top = posY - this.height/2 + this.offsetY;
      this.x = posX + this.offsetX;
      this.y = posY + this.offsetY;
	  }
    this.setCollider(x, y);

	this.isCollidingWith = function(otherCollider) {
	    let myLeft = this.box.left;
	    let myRight = this.box.right;
	    let myBottom = this.box.bottom;
	    let myTop = this.box.top;
	    let theirLeft = otherCollider.box.left;
	    let theirRight = otherCollider.box.right;
	    let theirBottom = otherCollider.box.bottom;
	    let theirTop = otherCollider.box.top;
	    return ((myLeft > theirRight || // I'm right of them
	            myRight < theirLeft  || // I'm left of them
	            myTop > theirBottom  || // I'm below them
	            myBottom < theirTop) // I'm above them
	            == false); // if all of the above are true, boxes don't overlap
	}

	this.update = function(posX, posY) {
		this.setCollider(posX, posY);
	}

	this.draw = function(color) {
        scaledContext.strokeStyle = color;
        scaledContext.lineWidth = 1;
        let x = Math.floor(this.box.left) + .5;
        let y = Math.floor(this.box.top) + .5;
        scaledContext.strokeRect(x, y, this.width, this.height);
    }
};
