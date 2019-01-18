function Player () {
    this.x = 100;
    this.y = 100;
    this.w = 64;
    this.h = johnIdle.spriteSheet.height;
    this.walkSpeed = useRequestAnimationFrame ? 140 : 4;

    this.keyHeld_walkUp = false;
    this.keyHeld_walkDown = false;
    this.keyHeld_walkLeft = false;
    this.keyHeld_walkRight = false;

    // ARROWS
    this.controlKeyUp;
    this.controlKeyDown;
    this.controlKeyLeft;
    this.controlKeyRight;

    // WASD
    this.controlKeyUp2;
    this.controlKeyDown2;
    this.controlKeyLeft2;
	this.controlKeyRight2;

    this.collider = new Collider(this.x, this.y, this.w, this.h, 0, 0);
    const idleWidth = 0.80 * johnIdle.spriteSheet.width/(4 * johnIdle.animationColFrames);
    this.tileCollider = {x:this.x - idleWidth / 2, y:this.y + (0.38 * this.h), 
                         width: idleWidth, height:0.05 * this.h};
    this.setTileCollider = function(newX, newY) {
        this.tileCollider.x = newX - idleWidth / 2;
        this.tileCollider.y = newY + 0.38 * this.h;
    }

    this.states = {
        walking: false
    };

    this.facing = {
        north: false,
        south: false,
    	west: false,
        east: false,
        northWest: false,
        northEast: false,
        southWest: false,
        southEast: false,
    };

    this.nearObjOrNPC = null;

	this.setupInput = function (upKey, downKey, leftKey, rightKey, upKey2, downKey2, leftKey2, rightKey2) {
        // ARROWS
        this.controlKeyUp = upKey;
        this.controlKeyDown = downKey;
        this.controlKeyLeft = leftKey;
        this.controlKeyRight = rightKey;
        // WASD
        this.controlKeyUp2 = upKey2;
        this.controlKeyDown2 = downKey2;
        this.controlKeyLeft2 = leftKey2;
        this.controlKeyRight2 = rightKey2;
    };

    this.reset = function () {
        for (let eachRow = 0; eachRow < worldCols; eachRow++) {
            for (let eachCol = 0; eachCol < worldRows; eachCol++) {
                let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if (worldGrid[arrayIndex] == TILE.PLAYER_START) {
                    this.x = eachCol * WORLD_W + WORLD_W / 2;
                    this.y = eachRow * WORLD_H + ((WORLD_H / 2) - 20);
                    this.collider.setCollider(this.x, this.y);
                    this.setTileCollider(this.x, this.y);
                    return;
                }
            }
        }
    };

    this.move = function (delta, moveSpeed = this.walkSpeed) {
        if (dialogueNotShowing() && !inventory.isShowing && !levelEditor.isOn) {
            let nextX = this.x;
            let nextY = this.y;

            if (currentlyPlayingCutscene == null) {
                moveSpeed *= useRequestAnimationFrame ? delta : 1;

                if (this.keyHeld_walkUp) {
                    nextY -= moveSpeed;
                }
                if (this.keyHeld_walkDown) {
                    nextY += moveSpeed;
                }
                if (this.keyHeld_walkLeft) {
                    nextX -= moveSpeed;
                }
                if (this.keyHeld_walkRight) {
                    nextX += moveSpeed;
                }

                this.states.walking = false;
                this.facing.north = false;
                this.facing.south = false;
                this.facing.west = false;
                this.facing.east = false;
                this.facing.northWest = false;
                this.facing.northEast = false;
            	this.facing.southWest = false;
                this.facing.southEast = false;
            }

            if (whoMoving == null) {
                if (this.keyHeld_walkLeft || this.keyHeld_walkRight || this.keyHeld_walkUp || this.keyHeld_walkDown) {
                    this.states.walking = true;
                } else if (!this.keyHeld_walkLeft && !this.keyHeld_walkRight && !this.keyHeld_walkUp && !this.keyHeld_walkDown) {
                    this.states.walking = false;
                }
            }

            let shouldMoveX = false;
            let shouldMoveY = false;
            let deltaX = nextX - this.x;
            let deltaY = nextY - this.y;

            let objCollisionData;
            if(!((this.nearObjOrNPC == null) || 
               (this.nearObjOrNPC.tileCollider == undefined) || 
               (this.nearObjOrNPC.tileCollider == null))) {
                objCollisionData = doRectsIntersect(this.tileCollider, this.nearObjOrNPC.tileCollider, deltaX, deltaY);
            }
            
            let nextTileTypes = getNextTileTypesAtRect(this.tileCollider, deltaX, deltaY);
            if(nextX > this.x) {//trying to move right
                if((moveOntoTileIfAble(nextTileTypes.upperRight)) && 
                   (moveOntoTileIfAble(nextTileTypes.lowerRight))) {
                    if((this.nearObjOrNPC == null) || 
                       (this.nearObjOrNPC.tileCollider == undefined) || 
                       (this.nearObjOrNPC.tileCollider == null)) {
                           //if there is no object or NPC near, can't collide
                           //if there is an object/NPC near but it has no tile collider, can't collide
                        shouldMoveX = true;
                    } else {
                        if((objCollisionData.topRight == false) && 
                           (objCollisionData.bottomRight == false)) {
                            shouldMoveX = true;
                        }//end if objCollisionData check
                    }//end if-else nearObjOrNPC         
                }//end if moveOntoTileIfAble
            } else if(nextX < this.x) {//trying to move left
                if((moveOntoTileIfAble(nextTileTypes.upperLeft)) && 
                   (moveOntoTileIfAble(nextTileTypes.lowerLeft))) {
                    if((this.nearObjOrNPC == null) || 
                       (this.nearObjOrNPC.tileCollider == undefined) || 
                       (this.nearObjOrNPC.tileCollider == null)) {
                           //if there is no object or NPC near, can't collide
                           //if there is an object/NPC near but it has no tile collider, can't collide
                        shouldMoveX = true;
                    } else {
                        if((objCollisionData.topLeft == false) && 
                           (objCollisionData.bottomLeft == false)) {
                            shouldMoveX = true;
                        }//end if objCollisionData check
                    }//end if-else nearObjOrNPC 
                }//end if moveOntoTileIfAble
            }//end if-else nextX > this.x

            if(nextY > this.y) {//trying to walk down
                if((moveOntoTileIfAble(nextTileTypes.lowerRight)) && 
                   (moveOntoTileIfAble(nextTileTypes.lowerLeft))) {
                    if((this.nearObjOrNPC == null) || 
                       (this.nearObjOrNPC.tileCollider == undefined) || 
                       (this.nearObjOrNPC.tileCollider == null)) {
                           //if there is no object or NPC near, can't collide
                           //if there is an object/NPC near but it has no tile collider, can't collide
                        shouldMoveY = true;
                    } else {
                        if((objCollisionData.bottomRight == false) && 
                           (objCollisionData.bottomLeft == false)) {
                            shouldMoveY = true;
                        }//end if objCollisionData check
                    }//end if-else nearObjOrNPC 
                }//end if moveOntoTileIfAble
            } else if(nextY < this.y) {//trying to walk up
                if((moveOntoTileIfAble(nextTileTypes.upperRight)) && 
                   (moveOntoTileIfAble(nextTileTypes.upperLeft))) {
                    if((this.nearObjOrNPC == null) || 
                       (this.nearObjOrNPC.tileCollider == undefined) || 
                       (this.nearObjOrNPC.tileCollider == null)) {
                           //if there is no object or NPC near, can't collide
                           //if there is an object/NPC near but it has no tile collider, can't collide
                        shouldMoveY = true;
                    } else {
                        if((objCollisionData.topRight == false) && 
                           (objCollisionData.topLeft == false)) {
                            shouldMoveY = true;
                        }//end if objCollisionData check
                    }//end if-else nearObjOrNPC 
                }//end if moveOntoTileIfAble
            }//end if-else nextX > this.x

            if(shouldMoveX) {
                this.x = nextX;
            }

            if(shouldMoveY) {
                this.y = nextY;
            }

            this.collider.setCollider(this.x, this.y);
            this.setTileCollider(this.x, this.y);
            
            playerWorldHandling(this);
        }
    };

    this.draw = function () {
        if(debug) {
            scaledContext.strokeRect(this.tileCollider.x, this.tileCollider.y, 
                this.tileCollider.width, this.tileCollider.height);
        }
        if (this.states.walking && whoMoving != null) {
            if (this.facing.north) {
                johnWalkUp.draw(scaledContext, this.x, this.y);
            }
            if (this.facing.south) {
                johnWalkDown.draw(scaledContext, this.x, this.y);
            }
            if (this.facing.west) { 
                johnWalkSide.draw(scaledContext, this.x, this.y); //default Side spritesheet is facing to the left
            }
            if (this.facing.east) {
                johnWalkSide.draw(scaledContext, this.x, this.y, 1, true);  //flip spritesheet to the right
            }
            if (this.facing.northWest) {
                johnWalkUpDiag.draw(scaledContext, this.x, this.y);
            }
            if (this.facing.northEast) {
                johnWalkUpDiag.draw(scaledContext, this.x, this.y, 1, true); //flip spritesheet to the right
            }
            if (this.facing.southWest) { //if (this.facing.southWest || this.facing.northWest) {
                johnWalkDownDiag.draw(scaledContext, this.x, this.y);
            }
            if (this.facing.southEast) { //if (this.facing.southEast || this.facing.northEast) {
                johnWalkDownDiag.draw(scaledContext, this.x, this.y, 1, true); //flip spritesheet to the right
            }
        } else if (this.states.walking && currentlyPlayingCutscene == null) {
            if (this.keyHeld_walkUp) {
            	if ((this.keyHeld_walkUp) && (this.keyHeld_walkLeft)) {
            		johnWalkUpDiag.draw(scaledContext, this.x, this.y);
            	} else if (this.keyHeld_walkUp) {
            		if ((this.keyHeld_walkUp) && (this.keyHeld_walkRight)) {
            			johnWalkUpDiag.draw(scaledContext, this.x, this.y, 1, true);
            		} else {
                		johnWalkUp.draw(scaledContext, this.x, this.y);
                	}
            	}
            } else if (this.keyHeld_walkDown) {
            	if ((this.keyHeld_walkDown) && (this.keyHeld_walkLeft)) {
            		johnWalkDownDiag.draw(scaledContext, this.x, this.y);
            	} else if (this.keyHeld_walkDown) {
            		if ((this.keyHeld_walkDown) && (this.keyHeld_walkRight)) {
            			johnWalkDownDiag.draw(scaledContext, this.x, this.y, 1, true);
            		} else {
                		johnWalkDown.draw(scaledContext, this.x, this.y);
                	}
            	}
            } else if (this.keyHeld_walkLeft) {
                johnWalkSide.draw(scaledContext, this.x, this.y);
            } else if (this.keyHeld_walkRight) {
                johnWalkSide.draw(scaledContext, this.x, this.y, 1, true);
            }
        } else {
            johnIdle.draw(scaledContext, this.x, this.y);            
        }
        //outlineCircle(scaledContext, this.x, this.y, 2, "green", lineWidth = 1) //DEBUG
    };
}
