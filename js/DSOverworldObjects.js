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
            if (pressed_space) {
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
    
    this.eventText = function(createElseIncrement, dialogue) {
         try {
           this.initText(createElseIncrement, dialogue); 
        }
        catch {
            console.log("Error Fix! You triggered a special event without un-colliding/re-colliding with NPC");    
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
        this.initText(createElseIncrement, chat);
    }

    this.chatEvents = function (createElseIncrement) {
        return;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////

var john = new OverworldObject();
john.dialogue = new Dialogue();
john.colour = "#8789C0";

john.chatEvents = function (createElseIncrement) {
    this.text(createElseIncrement, [johnAndRoseConvo/*, johnAndRoseConvo2*/]);

}

////////////////////////////////////////////////////////////////////////////////////////////////

var bob = new OverworldObject();
bob.dialogue = new Dialogue();
bob.pressedX = false;

bob.colour = "green";
bob.x = 300;
bob.y = 400;

bob.chatEvents = function (createElseIncrement) {
    if (this.pressedX) {
       this.eventText(createElseIncrement, omigoshBob);
    } else { //regular text
        this.text(createElseIncrement, [bobConvo]);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////
var allNPCs = [john];

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
