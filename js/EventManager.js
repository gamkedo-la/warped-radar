//Game Events
const GameEvent = {
    FoundSkateBoard:false,
    FoundBurnerPhone:false,
    FoundCrowbar:false,
    FoundHoodie:false,
    FoundNoteBook:false,
    FoundSealedTube:false,
    FoundThumbDrive:false,
    FoundTrainTicket:false,
    FoundDave:false,
    Talk_Rose_0:false,
    Talk_Rose_1:false,
    Talk_Julie_0:false,
}

function EventManager() {
    this.canShowObtainableItem = function(item) {
        let result = false;

        switch(item.name) {
            case "crowbar":
                if(GameEvent.FoundDave) {
                    result = true;
                }
                break;
            case "trainTicket":
                if(GameEvent.FoundDave) {
                    result = true;
                }
                break;
        };

        return result;
    };

    this.obtainedItem = function(item) {
        switch(item.name) {
            case "brokenSkateBoard":
                GameEvent.FoundSkateBoard = true;
                break;
            case "burnerPhone":
                GameEvent.FoundBurnerPhone = true;
                break;
            case "crowbar":
                GameEvent.FoundCrowbar = true;
                break;
            case "hoodie":
                GameEvent.FoundHoodie = true;
                break;
            case "medicalNotebook":
                GameEvent.FoundNoteBook = true;
                break;
            case "sealedTube":
                GameEvent.FoundSealedTube = true;
                break;
            case "thumbDrive":
                GameEvent.FoundThumbDrive = true;
                break;
            case "trainTicket":
                GameEvent.FoundTrainTicket = true;
                break;
        };
   }

    this.canShowNPC = function(npc) {
        let result = false;

        switch(npc.name) {
            case "Rose":
                if((locationNow == Place.TheCity) && (!GameEvent.FoundDave)) {
                    result = true;
                }
                break;
            case "Uncle Dave":
                result = true;
                break;
            case "Julie":
                result = true;
                break;
        }

        return result;
    };

    this.nextDialogWithNPC = function(npc) {
        let result = null;

        switch(npc.name) {
            case "Rose":
                if((locationNow == Place.TheCity) && (!GameEvent.FoundDave)) {
                    result = 0;
                }
                break;
            case "Uncle Dave":
                if(!GameEvent.FoundDave) {
                    result = 0;
                }
                break;
            case "Julie":
                if(GameEvent.Talk_Julie_0) {
                    if(!GameEvent.FoundDave) {
                        result = 0;
                    } else if(GameEvent.FoundCrowbar) {
                        result = 1;
                    }
                } else {
                    result = 0;
                }
                break;
        }

        return result;
    };

    this.spokeToNPC = function(npc) {
        switch(npc.name) {
            case "Rose":
                if(npc.messageCounter == 0) {
                    GameEvent.Talk_Rose_0 = true;
                } else if(npc.messageCounter == 1) {
                    GameEvent.Talk_Rose_1 = true;
                }
                break;
            case "Uncle Dave":
                GameEvent.FoundDave = true;
                break;
            case "Julie":
                if(npc.messageCounter == 0) {
                    GameEvent.Talk_Julie_0 = true;
                }
                break;
        }
    };
}