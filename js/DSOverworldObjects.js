function OverworldObject() {
    this.x = 380;
    this.y = 225;
    this.w = 32;
    this.h = 32;
    this.colour = "#6B6570";
    this.messageCounter = 0;

    this.draw = function () {
        drawRectToContext(scaledContext, this.x, this.y, this.w, this.h, this.colour, 1);
    }

    this.collidingWithPlayer = function () {
        return (this.x > player.x && this.x < player.x + player.w) && (this.y > player.y && this.y < player.y + player.h);
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
