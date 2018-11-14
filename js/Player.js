var player = new (function () {
    this.x = 100;
    this.y = 100;
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
    
    this.states = {
        walking: false
    }
    
    var facing = {
        down: true,
        left: false,
        right: false
    }

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
                
                this.states.walking = true;
            }
             if (this.keyHeld_walkDown) {
                this.y += this.walkSpeed;
                
                this.states.walking = true;
            }
             if (this.keyHeld_walkLeft) {
                this.x -= this.walkSpeed;
                
                this.states.walking = true;
            }
             if (this.keyHeld_walkRight) {
                this.x += this.walkSpeed;
                
                this.states.walking = true;
            }
            if (!this.keyHeld_walkUp && !this.keyHeld_walkDown && !this.keyHeld_walkLeft && !this.keyHeld_walkRight) {
                this.states.walking = false;
                facing.down = true;
            }
        }
    }

    this.draw = function () {
        //drawRectToContext(scaledContext, this.x, this.y, this.w, this.h, "#6B6570", 1);
        //scaledContext.drawImage(bobSprite, this.x, this.y);
        if (this.states.walking) {
            if (this.keyHeld_walkLeft || (this.keyHeld_walkLeft && this.keyHeld_walkUp) || (this.keyHeld_walkLeft && this.keyHeld_walkDown)) {
                bobWalkSide.draw(scaledContext, this.x, this.y);
            } else if (this.keyHeld_walkRight || (this.keyHeld_walkRight && this.keyHeld_walkUp) || (this.keyHeld_walkRight && this.keyHeld_walkDown)) {
                bobWalkSide.draw(scaledContext, this.x, this.y, 1, true);
            } else if (this.keyHeld_walkDown || this.keyHeld_walkUp) {
                 bobWalk.draw(scaledContext, this.x, this.y);
            }
        } else {
            bobIdle.draw(scaledContext, this.x, this.y);
        }
    }
})();
