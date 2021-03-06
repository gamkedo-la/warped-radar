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
    FoundWallOutlet:false,
    FoundPhoto:false,
    FoundDave:false,
    EnteredDavesHouse:false,
    Talk_Rose_0:false,
    Talk_Rose_1:false,
    Talk_Rose_2:false,
    Talk_Julie_0:false,
    Talk_Julie_1:false,
    Talk_Cat_1:false,
    Talk_Agent_1:false,
    Talk_Agent_2:false,
    Talk_Fusion_1:false,
    Talk_Fusion_2:false,
    Talk_DavesCop_1:false,
    Talk_Dan_1:false,
    Talk_Alex_1:false,
    SnubbedAlex:false
}

function EventManager() {
    this.canShowObtainableItem = function(item) {
        let result = false;

        switch(item.name) {
            case "brokenSkateBoard":
                if(GameEvent.Talk_DavesCop_1) {
                    result = true;
                }
            break;
            case "crowbar":
                if((locationNow == Place.DavesHouse) && (GameEvent.FoundDave)) {
                    result = true;
                }
            break;
            case "medicalNotebook":
                if((locationNow == Place.TheCity) && (GameEvent.Talk_Rose_0)) {
                    result = true;
                }
            break;
            case "hoodie":
                if((locationNow == Place.TheCity) && (GameEvent.Talk_Julie_0)) {
                    result = true;
                }
            break;
            case "thumbDrive":
                if((locationNow == Place.JuliesStore) && (GameEvent.FoundDave)) {
                    result = true;
                }
            break;
            case "trainTicket":
                if((locationNow == Place.DavesHouse) && (GameEvent.FoundDave)) {
                    result = true;
                }
            break;
            case "burnerPhone":
                if((locationNow == Place.TheCity) && (GameEvent.Talk_Fusion_2)) {
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
        }

        initializeInteractableItems();//obtaining an item can change what objects are interactable
    };

    this.canShowNPC = function(npc) {
        let result = false;

        switch(npc.name) {
            case "Rose":
                    result = true;
            break;
            case "Uncle Dave":
                result = true;
            break;
            case "Julie":
                result = true;
            break;
            case "Cat":
                if(locationNow == Place.JuliesStore) {
                    result = true;
                }
            break;
            case "Jen":
                if(!GameEvent.EnteredDavesHouse) {
                    result = true;
                } else if(!GameEvent.Talk_Agent_2) {
                    result = true;
                }
            break;
            case "Dan":
                if(locationNow == Place.TheCity) {
                    result = true;
                }
            break;
            case "Cop":
                if(locationNow == Place.TheCity) {
                    result = true;
                } else if(locationNow == Place.DavesHouse) {
                    result = true;
                }
            break;
            case "Fusion":
                if(locationNow == Place.TheCity) {
                    result = true;
                }
            break;
            case "Alex":
                if(locationNow == Place.TheCity) {
                    result = true;
                }
            break;
        }

        return result;
    };

    this.nextDialogWithNPC = function(npc) {
        let result = null;

        switch(npc.name) {
            case "Rose":
                if((locationNow == Place.TheCity) && (!GameEvent.FoundDave)) {
                    if(GameEvent.Talk_Rose_0) {
                        if(!GameEvent.Talk_Rose_1) {//she won't talk to you a third time until you find Uncle Dave
                            result = 1;
                        }
                    } else {
                        result = 0;
                    }
                } else if((locationNow == Place.TheCity) && (GameEvent.FoundDave)) {
                    result = 2;
                }
            break;
            case "Uncle Dave":
                if(!GameEvent.FoundDave) {
                    result = 0;
                }
            break;
            case "Julie":
                if(GameEvent.Talk_Julie_0) {
                    if(GameEvent.Talk_Julie_1) {
                        result = 2;
                    } else {
                        result = 1;
                    }
                } else {
                    result = 0;
                }
            break;
            case "Cat":
                result = 0;
            break;
            case "Jen":
                if(GameEvent.Talk_Fusion_1) {
                    if(GameEvent.Talk_Agent_1) {
                        result = 2;
                    } else {
                        result = 1;
                    }
                } else {
                    result = 0;
                }
            break;
            case "Dan":
                if((GameEvent.Talk_Dan_1) && (GameEvent.FoundDave)) {
                    result = 1;
                } else {
                    result = 0;
                }
            break;
            case "Cop":
                if(locationNow == Place.DavesHouse) {
                    if(GameEvent.FoundDave) {
                        result = 2;
                    } else {
                        result = 1;
                    }
                } else {
                    result = 0;
                }
            break;
            case "Fusion":
                if(GameEvent.Talk_Fusion_2) {
                    result = 2;
                } else if((GameEvent.Talk_Fusion_1) && (GameEvent.Talk_Agent_2)) {
                    result = 1;
                } else {
                    result = 0;
                }
            break;
            case "Alex":
                if(GameEvent.SnubbedAlex) {
                    result = 3;
                } else {
                    if(GameEvent.Talk_Fusion_1) {
                        if(GameEvent.Talk_Alex_1) {
                            result = 2;
                        } else {
                            result = 1;
                        }
                    } else {
                        result = 0;
                    }
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
                city_song = new Audio("audio/Serendipity.mp3");
                city_song.loop = "true";
                city_song.targetFadeInVolume = 0.8;
                city_song.fadingIn = false;
                city_song.fadingOut = false;
                city_song.volume = 0;
                array_of_fadable_songs[1] = city_song;
            break;
            case "Julie":
                if(!GameEvent.Talk_Julie_0) {
                    GameEvent.Talk_Julie_0 = true;
                } else {
                    GameEvent.Talk_Julie_1 = true;
                }
            break;
            case "Cat":
                GameEvent.Talk_Cat_1 = true;
            break;
            case "Jen":
                if(GameEvent.Talk_Fusion_1) {
                    GameEvent.Talk_Agent_2 = true;
                    if((locationNow == Place.TheCity) && (!GameEvent.FoundDave)) {
                        activateDoorToDavesHouse();
                    }
                } else if(!GameEvent.Talk_Agent_1) {
                    GameEvent.Talk_Agent_1 = true;
                }
            break;
            case "Dan":
                if(!GameEvent.Talk_Dan_1) {
                    GameEvent.Talk_Dan_1 = true;
                }
            break;
            case "Cop":
                if((GameEvent.FoundDave) && (locationNow == Place.DavesHouse)) {
                    GameEvent.Talk_DavesCop_1 = true;
                }
            break;
            case "Fusion":
                if(!GameEvent.Talk_Fusion_1) {
                    GameEvent.Talk_Fusion_1 = true;
                } else if(GameEvent.Talk_Agent_2) {
                    GameEvent.Talk_Fusion_2 = true;
                }
            break;
            case "Alex":
                GameEvent.Talk_Alex_1 = true;
            break;
        }

        initializeInteractableItems();//speaking to an NPC can change what objects are interactable
    };

    this.canShowObj = function(obj) {
        let result = false;

        switch(obj.name) {
            case "familyPhoto":
                if((!GameEvent.FoundDave) && (locationNow == Place.JohnsRoom)) {
                    result = true;
                } else if((locationNow == Place.DavesHouse) && (GameEvent.FoundDave)) {
                    result = true;
                }
            break;
            case "wallOutlet":
            if(locationNow == Place.JohnsRoom) {
                result = true;
            }
            break;
        }

        return result;
    };

    this.nextDialogWithObj = function(obj) {
        let result = null;

        switch(obj.name) {
            case "familyPhoto":
                if((!GameEvent.FoundDave) && (locationNow == Place.JohnsRoom)) {
                    result = 0;
                } else if((GameEvent.FoundDave) && (locationNow == Place.DavesHouse)) {
                    result = 1;
                }
            break;
            case"wallOutlet":
                result = 0;
            break;
        }

        return result;
    };

    this.interactedWithObj = function(obj) {
        switch(obj.name) {
            case "familyPhoto":
                GameEvent.FoundPhoto = true;
            break;
            case "wallOutlet":
                GameEvent.FoundWallOutlet = true;
            break;
        }

        //This next line wipes out the object as you're interacting with it, so it is a problem,
        //need to find a work around.
//        initializeInteractableItems();//interacting with an object can change what objects are interactable
    };

    const activateDoorToDavesHouse = function() {
        locationList[Place.TheCity].layers[Layer.Interaction][Switch.TheCityToDavesHouse] = TILE.SWITCH_LOCATION;
    };
}
