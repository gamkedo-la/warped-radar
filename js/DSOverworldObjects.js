function OverworldObject(name, leftEdge, topEdge, width, height, animations = null) {
    this.name = name;
    this.x = leftEdge;
    this.y = topEdge;
    this.w = width;
    this.h = height;
    this.colour = "#6B6570";
    this.messageCounter = 0;

    this.states = {
        walking: false
    }

    this.facing = {
        north: false,
        south: true,
        east: false,
        west: false,
        northEast: false,
        northWest: false,
        southEast: false,
        southWest: false
    }

    this.draw = function () {
        if (locationList[locationNow] == theCity) {
            if(animations != null) {
                if(this.states.walking) {
                    if(this.facing.north) {
                        animations.north.draw(scaledContext, this.x, this.y);
                    } else if(this.facing.south) {
                        animations.south.draw(scaledContext, this.x, this.y);                        
                    } else if(this.facing.east) {
                        animations.east.draw(scaledContext, this.x, this.y);
                    } else if(this.facing.west) {
                        animations.west.draw(scaledContext, this.x, this.y);
                    } else if(this.facing.northEast) {
                        animations.northEast.draw(scaledContext, this.x, this.y);
                    } else if(this.facing.northWest) {
                        animations.northWest.draw(scaledContext, this.x, this.y);
                    } else if(this.facing.southEast) {
                        animations.southEast.draw(scaledContext, this.x, this.y);
                    } else if(this.facing.southWest) {
                        animations.southWest.draw(scaledContext, this.x, this.y);
                    }
                } else {
                    animations.idle.draw(scaledContext, this.x, this.y);
                }
            } else {
                drawRectToContext(scaledContext, this.x, this.y, this.w, this.h, this.colour, 1);
            }//end if-else animations != null
        }//end if locationList
    }//end this.draw()

    this.collidingWithPlayer = function () {
        // Find middle point on the bottom - feet
        let playerX = player.x + johnSprite.width / 2;
        let playerY = player.y + johnSprite.height / 2;
        let objX = this.x + this.w / 2;
        let objY = this.y + this.h;
        // Calculate the distance between player and NPC from that point
        let x = Math.abs(playerX - objX);
        let y = Math.abs(playerY - objY);
        let distance = Math.sqrt(x * x + y * y);

        let radius = 60;
        if (distance <= radius) {
            player.nearObjOrNPC = this;
            return true;
        }
        return false;
    }

    this.onTrigger = function (dialogue) {
        if (this.collidingWithPlayer() && !dialogue.isShowing && !inventory.isShowing) {
            if (keysPressed(KEY_SPACE) || keysPressed(KEY_ENTER)) {
                if (dialogue.page <= 0) {
                    dialogue.isShowing = true;
                    dialogue.letterCounter = 0;
                    this.messageCounter++;
                }
                if ((dialogue.speakerX <= dialogue.speakerStartX) && (dialogue.speaker2X >= dialogue.speaker2StartX)) {
                    dialogue.page = 0;
                }
            }
        } else if (!this.collidingWithPlayer()) {
            dialogue.isShowing = false;
            dialogue.page = 0;
        }
    }

    this.initText = function (createElseIncrement, dialogue) {
        if (createElseIncrement) {
            this.dialogue.create(dialogue);
        } else {
            this.dialogue.incrementPage(dialogue);
        }
    }

    this.eventText = function (createElseIncrement, dialogue) { //use if it's an "unlocked" dialogue
        try {
            this.initText(createElseIncrement, dialogue);
        } catch {
            console.log("Error Fix! You triggered a special event without un-colliding/re-colliding with NPC");
        }
    }

    this.text = function (createElseIncrement, dialogueList) {
        let chat = null;
        let chatLine = this.messageCounter - 1; //already 1 when dialogue starts
        if (chatLine >= dialogueList.length) {
            chatLine = dialogueList.length - 1;
        } else if (chatLine < 0) {
            return;
        }
        chat = dialogueList[chatLine];
        this.initText(createElseIncrement, chat);
    }

    this.chatEvents = function (createElseIncrement) {
        return;
    }
}

function initializeOverworldObjects() {
    const roseAnimations = {
        idle:roseIdle,
        north:null,
        south:null,
        east:null,
        west:null,
        northEast:null,
        northWest:null,
        southEast:null,
        southWest:null
    }

    let rose = new OverworldObject("Rose", 280, 520, 32, 32, roseAnimations); //put her next to store
    rose.dialogue = new Dialogue();
    rose.colour = "#8789C0";
    
    rose.chatEvents = function (createElseIncrement) {
        this.text(createElseIncrement, [johnAndRoseConvo, johnAndRoseConvo2, johnAndRoseConvo3]);
    
    }

    allNPCs.push(rose);
}

let allNPCs = [];

function createDialogueEvents() {
    for(let i = 0; i < allNPCs.length; i++) {
        allNPCs[i].chatEvents(true);
    }
}

function incrementTextPages() {
    for(let i = 0; i < allNPCs.length; i++) {
        allNPCs[i].chatEvents(false);        
    }
}

function dialogueNotShowing() {
    let isShowing = false;
    for(let i = 0; i < allNPCs.length; i++) {
        if(allNPCs[i].dialogue.isShowing) {
            isShowing = true;
            break;
        }
    }
    return !isShowing;
}

function triggerNPCDialogue() {
    for (let i = 0; i < allNPCs.length; i++) {
        allNPCs[i].onTrigger(allNPCs[i].dialogue);
    }
}

function drawAndInitNPCs() { //here for prototype purposes
    for (let i = 0; i < allNPCs.length; i++) {
        allNPCs[i].draw();
        allNPCs[i].collidingWithPlayer();
    }
}
