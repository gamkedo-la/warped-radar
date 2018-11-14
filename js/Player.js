var player = new(function () {
    this.x = 100;
    this.y = 100;
    this.w = 64;
    this.h = 64;
    this.walkSpeed = 4;

    this.keyHeld_walkUp = false;
    this.keyHeld_walkDown = false;
    this.keyHeld_walkLeft = false;
    this.keyHeld_walkRight = false;

    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;

    var states = {
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

    this.reset = function () {
        for (var eachRow = 0; eachRow < WORLD_COLS; eachRow++) {
            for (var eachCol = 0; eachCol < WORLD_ROWS; eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if (worldGrid[arrayIndex] == TILE_PLAYER_START) {
                    worldGrid[arrayIndex] = TILE_SIDEWLAK; //for prototype only
                    this.x = eachCol * WORLD_W + WORLD_W / 2;
                    this.y = eachRow * WORLD_H - WORLD_H / 2;
                    return;
                } 
            } 
        } 
    }

    this.move = function () {
        if (dialogueNotShowing() && !inventory.isShowing) {
            if (this.keyHeld_walkUp) {
                this.y -= this.walkSpeed;

                states.walking = true;
            }
            if (this.keyHeld_walkDown) {
                this.y += this.walkSpeed;

                states.walking = true;
            }
            if (this.keyHeld_walkLeft) {
                this.x -= this.walkSpeed;

                states.walking = true;
            }
            if (this.keyHeld_walkRight) {
                this.x += this.walkSpeed;

                states.walking = true;
            }
            if (!this.keyHeld_walkUp && !this.keyHeld_walkDown && !this.keyHeld_walkLeft && !this.keyHeld_walkRight) {
                states.walking = false;
            }
        }
    }

    this.draw = function () {
        if (states.walking) {
            if (this.keyHeld_walkLeft) {

                if (this.keyHeld_walkUp || this.keyHeld_walkDown) { //45 degree turn
                    johnWalkSide45Deg.draw(scaledContext, this.x, this.y);
                } else { //90 degree turn
                    johnWalkSide.draw(scaledContext, this.x, this.y);
                }

            } else if (this.keyHeld_walkRight) {

                if ((this.keyHeld_walkRight && this.keyHeld_walkUp) || (this.keyHeld_walkRight && this.keyHeld_walkDown)) { //45 degree turn
                    johnWalkSide45Deg.draw(scaledContext, this.x, this.y, 1, true);
                } else { //90 degree turn
                    johnWalkSide.draw(scaledContext, this.x, this.y, 1, true);
                }

            } else if (this.keyHeld_walkDown || this.keyHeld_walkUp) {
                johnWalk.draw(scaledContext, this.x, this.y);
            }
        } else {
            johnIdle.draw(scaledContext, this.x, this.y);
        }
    }
})();
