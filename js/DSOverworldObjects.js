function OverworldObject() {
    this.x = 400;
    this.y = 200;
    this.w = 60;
    this.h = 60;
    this.colour = "#6B6570";
    this.messageCounter = 0;

    this.draw = function () {
        drawRect(this.x, this.y, this.w, this.h, this.colour, 1);
    }

    this.collidingWithPlayer = function () {
        return (this.x > player.x && this.x < player.x + player.w) && (this.y > player.y && this.y < player.y + player.h);
    }

    this.onTrigger = function (dialogue) {
        if (this.collidingWithPlayer() && !dialogue.isShowing) {
            if (pressed_space || pressed_mbLeft) {
                if (dialogue.page <= 0) {
                    dialogue.isShowing = true;
                    dialogue.letterCounter = 0;
                    this.messageCounter++;
                }
                /* for speaker tween in
                if ((dialogue.speakerX <= dialogue.speakerStartX) && (dialogue.speaker2X >= dialogue.speaker2StartX)) {
                    dialogue.page = 0;
                }
                */
                if (dialogue.speakerAlpha <= 0.0) { //for speaker fade in
                    dialogue.page = 0;
                }
            }
        } else if (!this.collidingWithPlayer()) {
            dialogue.isShowing = false;
            dialogue.page = 0;
        }
    }
    
    this.eventText = function (createElseIncrement, dialogue) {
        if (createElseIncrement) {
            this.dialogue.create(dialogue);
        } else {
            this.dialogue.incrementPage(dialogue);
        }
    }

    this.text = function (createElseIncrement, dialogueList) {
        var chat = null;
        var chatLine = this.messageCounter - 1; //already 1 when dialogue starts
        if (chatLine >= dialogueList.length) {
            chatLine = dialogueList.length - 1;
        } else if (chatLine < 0) {
            return;
        }
        chat = dialogueList[chatLine]; 
        this.eventText(createElseIncrement, chat);
    }

    this.chatEvents = function (createElseIncrement) {
        return;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////

var john = new OverworldObject();
john.dialogue = new Dialogue();
john.pressedX = false;

john.colour = "#8789C0";

john.chatEvents = function (createElseIncrement) {
    if (this.pressedX) {
        john.eventText(createElseIncrement, omigoshJohn);
    } else { //regular text
        john.text(createElseIncrement,[ johnAndRoseConvo, johnAndRoseConvo2]);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////

var bob = new OverworldObject();
bob.dialogue = new Dialogue();
bob.pressedZ = false;

bob.colour = "#3D5467";
bob.x = 200;
bob.y = 100;

bob.chatEvents = function (createElseIncrement) {
    if (this.pressedZ) {
        bob.eventText(createElseIncrement, omigoshBob);
    } else { //regular text
        bob.text(createElseIncrement, [bobConvo]);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////
var allNPCs = [john, bob];

function createDialogueEvents() {
    john.chatEvents(true);
    bob.chatEvents(true);
}

function incrementTextPages() {
    john.chatEvents(false);
    bob.chatEvents(false);
}

function dialogueNotShowing() { 
    return !bob.dialogue.isShowing && !john.dialogue.isShowing;
}

function triggerNPCDialogue() {
    for (var i = 0; i < allNPCs.length; i++) {
        allNPCs[i].onTrigger(allNPCs[i].dialogue);
    }
}

function drawAndInitNPCs() { //here for prototype purposes
    for (var i = 0; i < allNPCs.length; i++) {
        allNPCs[i].draw();
        allNPCs[i].collidingWithPlayer();
    }
}
