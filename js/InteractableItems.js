//Interactable Items
let arrayOfInteractableItems = [];

function initializeInteractableItems() {
    let tileX = 0;
    let tileY = 0;
    arrayOfInteractableItems = [];

    const thisLocation = locationList[locationNow];
    const rows = thisLocation.rows;
    const cols = thisLocation.columns;

    for (let eachRow = 0; eachRow < rows; eachRow++) {
        for (let eachCol = 0; eachCol < cols; eachCol++) {
            let arrayIndex = rowColToArrayIndex(eachCol, eachRow, cols);
            let tileKindHere = thisLocation.layers[Layer.Interaction][arrayIndex];
  
            switch(tileKindHere) {
                case TILE.FAMILY_PHOTO:
                    const anInteractable = initializeInteractable(tileX, tileY, WORLD_W, WORLD_H, 
                                           "familyPhoto", "Photo of John and Uncle Dave", 
                                           TILE.FAMILY_PHOTO, [familyPhotoInJohnsRoom, familyPhotoInDavesHouse], locationNow);//TODO: replace UncleDaveDiscovery
                    if(eventManager.canShowObj(anInteractable)) {
                        arrayOfInteractableItems.push(anInteractable);
                    }
                break;
            }
  
            tileX += WORLD_W;
        }

        tileY += WORLD_H;
        tileX = 0;
    }
}

function initializeInteractable(drawTileX, drawTileY, tileWidth, tileHeight, name, description, tileType, convos, location) {
    const anInteractable = new InteractableItem(
        drawTileX, drawTileY, tileWidth, tileHeight,
        name, description, tileType, convos, location
    );
    
    anInteractable.dialogue = new Dialogue();

    anInteractable.chatEvents = function(createElseIncrement) {
        this.text(createElseIncrement, convos);
    }

    return anInteractable;
}

function InteractableItem(drawTileX, drawTileY, tileWidth, tileHeight, name, description, tileType, convos, location) {
    this.drawTileX = drawTileX;
    this.drawTileY = drawTileY;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.leftEdge = drawTileX;
    this.rightEdge = drawTileX + WORLD_W;
    this.topEdge = drawTileY;
    this.bottomEdge = drawTileY + WORLD_H;
    this.h = WORLD_H;
    this.x = drawTileX;
    this.y = drawTileY;

    this.name = name;
    this.description = description;
    this.tileType = tileType;
    this.messageCounter = 0;
    this.location = location;

    this.draw = function() {
        tileSet.drawTileAt(scaledContext, this.tileType, this.drawTileX, this.drawTileY);
    }

    this.nearPlayer = function () {
        //can't be colliding unless we're in the view port
        if(!isInViewPort(scaledCanvas, this.x, this.y)) {return false;}

        // Find middle point on the bottom - feet
        let playerX = player.x + johnSprite.width / 2;
        let playerY = player.y + johnSprite.height / 2;
        let objX = this.x + WORLD_W / 2;
        let objY = this.y + this.h;
        // Calculate the distance between player and NPC from that point
        // will be using the square of these values so don't need Math.abs()
        let x = playerX - objX;
        let y = playerY - objY;

        //avoid 'expensive' Math.sqrt() function, just compare squared distances
        let distance = (x * x + y * y);

        //get radius squared to compare to distance
        let radius = 60 * 60;
        if (distance <= radius) {
            player.nearObjOrNPC = this;
            return true;
        }
        return false;
    }

    this.onTrigger = function (dialogue) {
        if (this.nearPlayer() && !dialogue.isShowing && !inventory.isShowing) {
            const nextMessageCounter = eventManager.nextDialogWithObj(this);
            if(nextMessageCounter == null) {
                return;
            }

            if (keysPressed(KEY_SPACE) || keysPressed(KEY_ENTER)) {
                if (dialogue.page <= 0) {
                    dialogue.isShowing = true;
                    dialogue.letterCounter = 0;
                    this.messageCounter = nextMessageCounter;
                }
                if ((dialogue.speakerX <= dialogue.speakerStartX) && (dialogue.speaker2X >= dialogue.speaker2StartX)) {
                    dialogue.setPage(0);
                }
            }
        } else if (!this.nearPlayer()) {
            dialogue.isShowing = false;
            dialogue.setPage(0);
            eventManager.interactedWithObj(this);
        }
    }

    this.initText = function (createElseIncrement, dialogue) {
        if (createElseIncrement) {
            this.dialogue.create(dialogue);
        } else {
            this.dialogue.incrementPage(dialogue);
        }
    }

    this.text = function (createElseIncrement, dialogueList) {
        let chat = null;
        let chatLine = this.messageCounter;
        if (chatLine >= dialogueList.length) {
            chatLine = dialogueList.length - 1;
        } else if (chatLine < 0) {
            return;
        }

        chat = dialogueList[chatLine];
        this.initText(createElseIncrement, chat);
    }

    this.chatEvents = function(createElseIncrement) {
        //over-ride when building a specific interactable
        return;
    }
}

function createOBJDialogueEvents() {
    for(let i = 0; i < arrayOfInteractableItems.length; i++) {
        arrayOfInteractableItems[i].chatEvents(true);
    }
}

function incrementOBJTextPages() {
    for(let i = 0; i < arrayOfInteractableItems.length; i++) {
        if(arrayOfInteractableItems[i].dialogue.page < 0) {
            arrayOfInteractableItems[i].chatEvents(true);
        } else {
            arrayOfInteractableItems[i].chatEvents(false);        
        }
    }
}

function dialogueOBJNotShowing() {
    let isShowing = false;
    for(let i = 0; i < arrayOfInteractableItems.length; i++) {
        if(arrayOfInteractableItems[i].dialogue.isShowing) {
            isShowing = true;
            break;
        }
    }
    return !isShowing;
}

function triggerOBJDialogue() {
    for (let i = 0; i < arrayOfInteractableItems.length; i++) {
        arrayOfInteractableItems[i].onTrigger(arrayOfInteractableItems[i].dialogue);
    }
}

function checkForNearbyOBJs() {
    for (let i = 0; i < arrayOfInteractableItems.length; i++) {
        arrayOfInteractableItems[i].nearPlayer();
    }
}