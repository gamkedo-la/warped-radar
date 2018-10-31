function PlayerClass() {
    this.x = 400;
    this.y = 300;
    this.w = 60;
    this.h = 60;
    this.walkSpeed = 5.5;

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
        if (dialogueNotShowing()) {
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
        drawRect(this.x, this.y, this.w, this.h, "#6B6570", 1);
    }

}
var player = new PlayerClass();
