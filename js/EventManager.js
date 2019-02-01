//Game Events
const GameEvent = {
    FoundDave:false,
    FoundCrowbar:false,
    Talk_Rose_1:false,
    Talk_Rose_2:false,
    Talk_Julie_1:false,
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
        };

        return result;
    };

    this.obtainedItem = function(item) {
        switch(item.name) {
            case "crowbar":
                GameEvent.FoundCrowbar = true;
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
                console.log("Can talk to uncle Dave? " + GameEvent.FoundDave);
                if(!GameEvent.FoundDave) {
                    result = 0;
                }
                break;
            case "Julie":
                if(!GameEvent.FoundDave) {
                    result = 0;
                } else if(GameEvent.FoundCrowbar) {
                    result = 1;
                }
                break;
        }

        return result;
    };
}