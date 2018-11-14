var player = new (function () {
    this.x = 80;
    this.y = 80;
    this.w = 32;
    this.h = 32;
    this.walkSpeed = 4;

    this.keyHeld_walkUp = false;
    this.keyHeld_walkDown = false;
    this.keyHeld_walkLeft = false;
    this.keyHeld_walkRight = false;

    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;

    this.setupInput = function (upKey, rightKey, downKey, leftKey) {
        this.controlKeyUp = upKey;
        this.controlKeyRight = rightKey;
        this.controlKeyDown = downKey;
        this.controlKeyLeft = leftKey;
    }

    this.move = function () {
        if (dialogueNotShowing() && !inventory.isShowing) {
            if (this.keyHeld_walkUp) {
                this.y -= this.walkSpeed;
            }
            if (this.keyHeld_walkDown) {
                this.y += this.walkSpeed;
            }
            if (this.keyHeld_walkLeft) {
                this.x -= this.walkSpeed;
            }
            if (this.keyHeld_walkRight) {
                this.x += this.walkSpeed;
            }
        }
    }

    this.draw = function () {
        //drawRectToContext(scaledContext, this.x, this.y, this.w, this.h, "#6B6570", 1);
        //scaledContext.drawImage(bobSprite, this.x, this.y);
        bobWalk.draw(scaledContext, this.x, this.y);
    }
})();
