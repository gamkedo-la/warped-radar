function OverworldObject() {
    this.x = 380;
    this.y = 225;
    this.w = 32;
    this.h = 32;
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
        drawRectToContext(scaledContext, this.x, this.y, this.w, this.h, this.colour, 1);
    }

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
            return true;
        }
        return false;
    }

    this.onTrigger = function (dialogue) {
        if (this.collidingWithPlayer() && !dialogue.isShowing) {
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
////////////////////////////////////////////////////////////////////////////////////////////////

let rose = new OverworldObject();
rose.dialogue = new Dialogue();
rose.colour = "#8789C0";

rose.chatEvents = function (createElseIncrement) {
    this.text(createElseIncrement, [johnAndRoseConvo, johnAndRoseConvo2, johnAndRoseConvo3]);

}

////////////////////////////////////////////////////////////////////////////////////////////////
let allNPCs = [rose];

function createDialogueEvents() {
    rose.chatEvents(true);
}

function incrementTextPages() {
    rose.chatEvents(false);
}

function dialogueNotShowing() {
    return !rose.dialogue.isShowing;
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
