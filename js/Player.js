let player = new(function () {
    this.x = 100;
    this.y = 100;
    //this.w = 64;
    //this.h = 64;
    this.walkSpeed = 4;

    this.keyHeld_walkUp = false;
    this.keyHeld_walkDown = false;
    this.keyHeld_walkLeft = false;
    this.keyHeld_walkRight = false;

    // ARROWS
    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;

    // WASD
    this.controlKeyUp2;
    this.controlKeyRight2;
    this.controlKeyDown2;
    this.controlKeyLeft2;

    this.collider = new colliderClass(this.x, this.y, this.w, this.h, 0, 0);

    this.states = {
        walking: false
    }

    this.facing = {
        north: false,
        south: false,
        east: false,
        west: false,
        northEast: false,
        northWest: false,
        southEast: false,
        southWest: false
    }

    this.setupInput = function (upKey, rightKey, downKey, leftKey, upKey2, rightKey2, downKey2, leftKey2) {
        // ARROWS
        this.controlKeyUp = upKey;
        this.controlKeyRight = rightKey;
        this.controlKeyDown = downKey;
        this.controlKeyLeft = leftKey;
        // WASD
        this.controlKeyUp2 = upKey2;
        this.controlKeyRight2 = rightKey2;
        this.controlKeyDown2 = downKey2;
        this.controlKeyLeft2 = leftKey2;
    }

    this.reset = function () {
        for (let eachRow = 0; eachRow < worldCols; eachRow++) {
            for (let eachCol = 0; eachCol < worldRows; eachCol++) {
                let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if (worldGrid[arrayIndex] == TILE_PLAYER_START || worldGrid[arrayIndex] == TILE_PLAYERS_TILE) {
                    worldGrid[arrayIndex] = TILE_PLAYERS_TILE; //workaround for level editor? currently set to ground
                    this.x = eachCol * WORLD_W + WORLD_W / 2;
                    this.y = eachRow * WORLD_H - WORLD_H / 2;
                    this.collider.setCollider(this.x, this.y);
                    return;
                }
            }
        }
    }

    this.move = function () {

        if (dialogueNotShowing() && !inventory.isShowing && !levelEditor.isOn) {
            var nextX = this.x;
            var nextY = this.y;
            var facing = this.facing;

            if (playingScene == null) {
                if (this.keyHeld_walkUp) {
                    nextY -= this.walkSpeed;
                }
                if (this.keyHeld_walkDown) {
                    nextY += this.walkSpeed;
                }
                if (this.keyHeld_walkLeft) {
                    nextX -= this.walkSpeed;
                }
                if (this.keyHeld_walkRight) {
                    nextX += this.walkSpeed;
                }
            }

            if (whoMoving == null) {
                if (this.keyHeld_walkLeft || this.keyHeld_walkRight || this.keyHeld_walkUp || this.keyHeld_walkDown) {
                    this.states.walking = true;
                } else if (!this.keyHeld_walkLeft && !this.keyHeld_walkRight && !this.keyHeld_walkUp && !this.keyHeld_walkDown) {
                    this.states.walking = false;
                }
            }

            var nextTileType = getTileTypeAtPixelCoord(nextX, nextY);
            // console.log(nextTileType);
            //if tile type is not solid this.x and this.y are equal to nextX and nextY
            if (moveCharIfAble(nextTileType)) {
                this.x = nextX;
                this.y = nextY;
            }

            this.collider.setCollider(this.x, this.y);
            
            playerWorldHandling(this);
        }
    }

    this.draw = function () {
        var facing = this.facing;
        if (this.states.walking && whoMoving != null) {
            if (facing.west) {
                johnWalkSide.draw(scaledContext, this.x, this.y);
            }
            if (facing.southWest || facing.northWest) {
                johnWalkSide45Deg.draw(scaledContext, this.x, this.y);
            }
            if (facing.east) {
                johnWalkSide.draw(scaledContext, this.x, this.y, 1, true);
            }
            if (facing.southEast || facing.northEast) {
                johnWalkSide45Deg.draw(scaledContext, this.x, this.y, 1, true);
            }
            if (facing.north || facing.south) {
                johnWalk.draw(scaledContext, this.x, this.y);
            }
            
        } else if (this.states.walking && playingScene == null) {
            if (this.keyHeld_walkLeft) {
                if ((this.keyHeld_walkUp || this.keyHeld_walkDown)) {
                    johnWalkSide45Deg.draw(scaledContext, this.x, this.y);
                } else { 
                    johnWalkSide.draw(scaledContext, this.x, this.y);
                }
            } else if (this.keyHeld_walkRight) {
                if ((this.keyHeld_walkRight && this.keyHeld_walkUp) || (this.keyHeld_walkRight && this.keyHeld_walkDown)) {
                    johnWalkSide45Deg.draw(scaledContext, this.x, this.y, 1, true);
                } else { 
                    johnWalkSide.draw(scaledContext, this.x, this.y, 1, true);
                }
            } else if (this.keyHeld_walkUp || this.keyHeld_walkDown) {
                johnWalk.draw(scaledContext, this.x, this.y);
            }
        } else {
            johnIdle.draw(scaledContext, this.x, this.y);
            if (playingScene == null) {
                this.states.walking = false;
                facing.north = false;
                facing.south = false;
                facing.west = false;
                facing.east = false;
                facing.northWest = false;
                facing.northWest = false;
                facing.southEast = false;
                facing.southWest = false;
            }
        }
        outlineCircle(scaledContext, this.x, this.y, 2, "green", lineWidth = 1)
    }
})();
