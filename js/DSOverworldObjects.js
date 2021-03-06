function OverworldObject(name, leftEdge, topEdge, width, height, animations = null) {
    this.name = name;
    this.x = leftEdge;
    this.y = topEdge;
    this.w = width;
    this.h = height;
    this.colour = "#6B6570";
    this.messageCounter = 0;
    this.location;

    this.states = {
        idle: true,
        walking: false,
        worrying: false
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

    const xCamAdjust = Math.floor(leftEdge/WORLD_W);
    const idleWidth = 1.5 * roseIdle.spriteSheet.width/(4 * roseIdle.animationColFrames);
    const idleHeight = roseIdle.spriteSheet.height;
    this.tileCollider = {x:this.x - idleWidth / 2, y:this.y + (0.38 * idleHeight), 
                         width: idleWidth, height:6};
    this.setTileCollider = function(newX, newY) {
        this.tileCollider.x = newX - idleWidth / 2;
        this.tileCollider.y = newY + 0.38 * idleHeight;
    }

    this.update = function(delta) {
        return;//override this function for any NPCs who can move around
    }

    this.draw = function () {
        if(debug) {
            scaledContext.strokeRect(this.tileCollider.x, this.tileCollider.y, 
                this.tileCollider.width, this.tileCollider.height);
        }

        const deltaX = Math.floor(mainCamera.camPanX/WORLD_W) - xCamAdjust;

        if(this.location == locationNow) {
            if(!eventManager.canShowNPC(this)) {return;}
            if(animations != null) {
                if(this.states.walking) {
                    if(this.facing.north) {
                        animations.north.draw(scaledContext, this.x + deltaX, this.y);
                    } else if(this.facing.south) {
                        animations.south.draw(scaledContext, this.x + deltaX, this.y);                        
                    } else if(this.facing.east) {
                        animations.east.draw(scaledContext, this.x + deltaX, this.y, 1, true);  //flip spritesheet to the right
                    } else if(this.facing.west) {
                        animations.west.draw(scaledContext, this.x + deltaX, this.y);
                    } else if(this.facing.northEast) {
                        animations.northEast.draw(scaledContext, this.x + deltaX, this.y);
                    } else if(this.facing.northWest) {
                        animations.northWest.draw(scaledContext, this.x + deltaX, this.y);
                    } else if(this.facing.southEast) {
                        animations.southEast.draw(scaledContext, this.x + deltaX, this.y);
                    } else if(this.facing.southWest) {
                        animations.southWest.draw(scaledContext, this.x + deltaX, this.y);
                    }
                } else if(this.states.worrying) {
                    animations.worry.draw(scaledContext, this.x + deltaX, this.y);
                } else if(this.states.idle) {
                    animations.idle.draw(scaledContext, this.x + deltaX, this.y);
                }
            } else {
                drawRectToContext(scaledContext, this.x + deltaX, this.y, this.w, this.h, this.colour, 1);
            }//end if-else animations != null
        }//end if locationList
    }//end this.draw()

    this.nearPlayer = function () {
        //can't be colliding unless we're in the view port
        if(!isInViewPort(scaledCanvas, this.x, this.y)) {return false;}

        // Find middle point on the bottom - feet
        let playerX = player.x + johnSprite.width / 2;
        let playerY = player.y + johnSprite.height / 2;
        let objX = this.x + this.w / 2;
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
            const nextMessageCounter = eventManager.nextDialogWithNPC(this);
            if(nextMessageCounter == null) {
                return;
            }

            if (keysPressed(KEY_SPACE) || keysPressed(KEY_ENTER)) {
                if (dialogue.page <= 0) {
                    dialogue.isShowing = true;
                    dialogue.letterCounter = 0;
                    this.messageCounter = nextMessageCounter;
                    eventManager.spokeToNPC(this);
                }
                if ((dialogue.speakerX <= dialogue.speakerStartX) && (dialogue.speaker2X >= dialogue.speaker2StartX)) {
                    dialogue.setPage(0);
                }
            }
        } else if (!this.nearPlayer()) {
            dialogue.isShowing = false;
            dialogue.setPage(0);
        }
    }

    this.initText = function (createElseIncrement, dialogue) {
        if (createElseIncrement) {
            this.dialogue.create(dialogue);
        } else {
            if(this.dialogue.page < 0) {return;}
            this.dialogue.incrementPage(dialogue);
        }
    }

    this.eventText = function (createElseIncrement, dialogue) { //use if it's an "unlocked" dialogue
        try {
            this.initText(createElseIncrement, dialogue);
        } catch {
            console.error("Error Fix! You triggered a special event without un-colliding/re-colliding with NPC");
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

    this.chatEvents = function (createElseIncrement) {
        return;
    }
}

function initializeOverworldObjects() {
    allNPCs = [];
    const dataArray = locationList[locationNow].layers[Layer.Interaction];
    for(let i = 0; i < dataArray.length; i++) {
        switch(dataArray[i]) {
            case TILE.ROSE:
                const rose = initializeRose(i);
                if(eventManager.canShowNPC(rose)) {
                    allNPCs.push(rose);
                }
            break;
            case TILE.JULIE:
                const julie = initializeJulie(i);
                if(eventManager.canShowNPC(julie)) {
                    allNPCs.push(julie);
                }
            break;
            case TILE.DAVE:
                const dave = initializeDave(i);
                if(eventManager.canShowNPC(dave)) {
                    allNPCs.push(dave);
                }
            break;
            case TILE.NPC:
                const agent = initializeAgent(i);
                if(eventManager.canShowNPC(agent)) {
                    allNPCs.push(agent);
                }
            break;
            case TILE.CAT:
                const cat = initializeCat(i);
                if(eventManager.canShowNPC(cat)) {
                    allNPCs.push(cat);
                }
            case TILE.COP:
                if((locationNow == Place.TheCity) && (i == getTileIndex(theCity, 68, 39))) {
                    const confessor = initializeConfessor(i);
                    if(eventManager.canShowNPC(confessor)) {
                        allNPCs.push(confessor);
                    }
                } else {
                    const cop1 = initializeCop1(i);
                    if(eventManager.canShowNPC(cop1)) {
                        allNPCs.push(cop1);
                    }
                }
            break;
            case TILE.FUSION:
                const fusion = initializeFusion(i);
                if(eventManager.canShowNPC(fusion)) {
                    allNPCs.push(fusion);
                }
            break;
            case TILE.ALEX:
                const alex = initializeAlex(i);
                if(eventManager.canShowNPC(alex)) {
                    allNPCs.push(alex);
                }
            break;
        }
    }
}

function initializeRose(arrayIndex) {
    const roseAnimations = {
        idle:roseIdle,
        worry:roseWorry,
        north:roseWalkUp,
        south:roseWalkDown,
        east:roseWalkSide,
        west:roseWalkSide,
        northEast:null,
        northWest:null,
        southEast:null,
        southWest:null
    }

    const columns = locationList[locationNow].columns;
    const xPos = (1 + arrayIndex % columns) * WORLD_W + Math.floor(mainCamera.camPanX / WORLD_W);
    const yPos = Math.floor(arrayIndex / columns) * WORLD_H;
    let rose = new OverworldObject("Rose", xPos, yPos, 26, 62, roseAnimations);
    rose.dialogue = new Dialogue();
    rose.colour = "#8789C0";
    rose.location = Place.TheCity;
    rose.walkingSpeed = 50;

    rose.states.walking = true;
    rose.states.idle = false;
    rose.states.worrying = false;

    rose.facing.east = true;
    rose.facing.south = false;
    
    if(rose.y < WORLD_H * 26.5) {rose.y = WORLD_H * 26.5;}

    rose.chatEvents = function (createElseIncrement) {
        this.text(createElseIncrement, [JohnAndRose_1, roseReallyNeedToGo, roseInquiry]);
    }

    rose.update = function(delta) {
        if(!isInViewPort(scaledCanvas, this.x, this.y)) {return;} //don't update while off screen
        if(!eventManager.canShowNPC(this)) {return;} //don't update if can't be shown

        if(rose.dialogue.isShowing) {
            rose.states.idle = true;
            rose.states.walking = false;
        } else if(!GameEvent.FoundDave) {
            if(rose.facing.east) {
                if(rose.x < WORLD_W * 45.5) {//this is where the sidewalk turns
                    rose.x += rose.walkingSpeed * delta;
                    rose.setTileCollider(rose.x, rose.y);
        
                    rose.states.walking = true;
                    rose.states.idle = false;

                    rose.states.worrying = false;
                } else {
                    rose.facing.south = true;
                    rose.facing.east = false;
                    rose.facing.west = false;
                    rose.facing.north = false;
        
                    rose.y += rose.walkingSpeed * delta;
                    rose.setTileCollider(rose.x, rose.y);
        
                    rose.states.walking = true;
                    rose.states.idle = false;
                    rose.states.worrying = false;
                }
            } else if(rose.facing.south) {
                if(rose.y < WORLD_H * 55.0) {//this is where the sidewalk turns
                    rose.y += rose.walkingSpeed * delta;
                    rose.setTileCollider(rose.x, rose.y);
        
                    rose.states.walking = true;
                    rose.states.idle = false;

                    rose.states.worrying = false;
                } else {
                    rose.facing.west = true;
                    rose.facing.south = false;
                    rose.facing.east = false;
                    rose.facing.north = false;
        
                    rose.x -= rose.walkingSpeed * delta;
                    rose.setTileCollider(rose.x, rose.y);
        
                    rose.states.walking = true;
                    rose.states.idle = false;
                    rose.states.worrying = false;
                }
            } else if(rose.facing.west) {
                if(rose.x > WORLD_W * 19.5) {//this is where the sidewalk turns
                    rose.x -= rose.walkingSpeed * delta;
                    rose.setTileCollider(rose.x, rose.y);
        
                    rose.states.walking = true;
                    rose.states.idle = false;

                    rose.states.worrying = false;
                } else {
                    rose.facing.north = true;
                    rose.facing.west = false;
                    rose.facing.south = false;
                    rose.facing.east = false;
        
                    rose.y -= rose.walkingSpeed * delta;
                    rose.setTileCollider(rose.x, rose.y);
        
                    rose.states.walking = true;
                    rose.states.idle = false;
                    rose.states.worrying = false;
                }
            } else if(rose.facing.north) {
                if(rose.y > WORLD_H * 26.5) {//this is where the sidewalk turns
                    rose.y -= rose.walkingSpeed * delta;
                    rose.setTileCollider(rose.x, rose.y);
        
                    rose.states.walking = true;
                    rose.states.idle = false;

                    rose.states.worrying = false;
                } else {
                    rose.facing.east = true;
                    rose.facing.north = false;
                    rose.facing.west = false;
                    rose.facing.south = false;
        
                    rose.x += rose.walkingSpeed * delta;
                    rose.setTileCollider(rose.x, rose.y);
        
                    rose.states.walking = true;
                    rose.states.idle = false;
                    rose.states.worrying = false;
                }
            }
        } else {
            rose.facing.south = true;
            rose.facing.east = false;
            rose.facing.west = false;

            rose.states.worrying = true;
            rose.states.walking = false;
            rose.states.idle = false;
        }

        return;
    }

    return rose;
}

function initializeJulie(arrayIndex) {
    const julieAnimations = {
        idle:julieIdle,
        worry:null,
        north:null,
        south:null,
        east:null,
        west:null,
        northEast:null,
        northWest:null,
        southEast:null,
        southWest:null
    }

    const columns = locationList[locationNow].columns;
    const xPos = (1 + arrayIndex % columns) * WORLD_W + Math.floor(mainCamera.camPanX / WORLD_W);
    const yPos = Math.floor(arrayIndex / columns) * WORLD_H;
    let julie = new OverworldObject("Julie", xPos, yPos, 26, 62, julieAnimations);
    julie.dialogue = new Dialogue();
    julie.colour = "#b12f0c";
    julie.location = locationNow;
    
    julie.chatEvents = function (createElseIncrement) {
        this.text(createElseIncrement, [johnAndJulie_1, julieConvo2, julieConvo3]);
    
    }

    return julie;
}

function initializeCat(arrayIndex) {
    const catAnimations = {
        idle:catManIdle,
        worry:null,
        north:null,
        south:null,
        east:null,
        west:null,
        northEast:null,
        northWest:null,
        southEast:null,
        southWest:null
    }

    const columns = locationList[locationNow].columns;
    const xPos = (1 + arrayIndex % columns) * WORLD_W + Math.floor(mainCamera.camPanX / WORLD_W);
    const yPos = Math.floor(arrayIndex / columns) * WORLD_H;
    let catMan = new OverworldObject("Cat", xPos, yPos, 26, 62, catAnimations);
    catMan.dialogue = new Dialogue();
    catMan.colour = "yellow";
    catMan.location = Place.JuliesStore;
    
    catMan.chatEvents = function (createElseIncrement) {
        this.text(createElseIncrement, [julieCatArgument]);//need to replace these conversations
    
    }

    return catMan;
}

function initializeDave(arrayIndex) {
    const daveAnimations = {
        idle:daveIdle,
        worry:null,
        north:null,
        south:null,
        east:null,
        west:null,
        northEast:null,
        northWest:null,
        southEast:null,
        southWest:null
    }

    const columns = locationList[locationNow].columns;
    const xPos = (1 + arrayIndex % columns) * WORLD_W + Math.floor(mainCamera.camPanX / WORLD_W);
    const yPos = Math.floor(arrayIndex / columns) * WORLD_H;
    let dave = new OverworldObject("Uncle Dave", xPos, yPos, 62, 26, daveAnimations);
    dave.dialogue = new Dialogue();
    dave.colour = "blue";
    dave.location = Place.DavesHouse;

    //adjust position since Davy is lying down vice standing/walking
    dave.setTileCollider(dave.tileCollider.x + 15, dave.tileCollider.y - 50);
    
    dave.chatEvents = function (createElseIncrement) {
        this.text(createElseIncrement, [UncleDaveDiscovery]);
    }

    return dave;
}

function initializeAgent(arrayIndex) {
    const agentAnimations = {
        idle:agentIdle,
        worry:null,
        north:null,
        south:null,
        east:null,
        west:null,
        northEast:null,
        northWest:null,
        southEast:null,
        southWest:null
    }

    const columns = locationList[locationNow].columns;
    const xPos = (1 + arrayIndex % columns) * WORLD_W + Math.floor(mainCamera.camPanX / WORLD_W);
    const yPos = Math.floor(arrayIndex / columns) * WORLD_H;
    let agent = new OverworldObject("Jen", xPos, yPos, 26, 62, agentAnimations);
    agent.dialogue = new Dialogue();
    agent.colour = "blue";
    agent.location = Place.TheCity;
    
    agent.chatEvents = function (createElseIncrement) {
        //Add additional conversations in this array if you want the Agent to say different things (or different Agents to say different things)
        this.text(createElseIncrement, [jenConvo1, jenConvo2, jenConvo3]);
    }

    return agent;
}

function initializeFusion(arrayIndex) {
    const fusionAnimations = {
        idle:fusionIdle,
        worry:null,
        north:null,
        south:null,
        east:null,
        west:null,
        northEast:null,
        northWest:null,
        southEast:null,
        southWest:null
    }

    const columns = locationList[locationNow].columns;
    const xPos = (1 + arrayIndex % columns) * WORLD_W + WORLD_W / 2 + Math.floor(mainCamera.camPanX / WORLD_W);
    const yPos = Math.floor(arrayIndex / columns) * WORLD_H;
    let fusion = new OverworldObject("Fusion", xPos, yPos, 26, 62, fusionAnimations);
    fusion.dialogue = new Dialogue();
    fusion.colour = "yellow";
    fusion.location = Place.TheCity;
    
    fusion.chatEvents = function (createElseIncrement) {
        //Add additional conversations in this array if you want the Agent to say different things (or different Agents to say different things)
        this.text(createElseIncrement, [fusionConvo, fusionConvo2, fusionConvo3]);
    }

    return fusion;
}

function initializeAlex(arrayIndex) {
    const alexAnimations = {
        idle:alexIdle,
        worry:null,
        north:null,
        south:null,
        east:null,
        west:null,
        northEast:null,
        northWest:null,
        southEast:null,
        southWest:null
    }

    const columns = locationList[locationNow].columns;
    const xPos = (1 + arrayIndex % columns) * WORLD_W + WORLD_W / 2 + Math.floor(mainCamera.camPanX / WORLD_W);
    const yPos = Math.floor(arrayIndex / columns) * WORLD_H;
    let alex = new OverworldObject("Alex", xPos, yPos, 26, 62, alexAnimations);
    alex.dialogue = new Dialogue();
    alex.colour = "#c26682";
    alex.location = locationNow;
    
    alex.chatEvents = function (createElseIncrement) {
        //Add additional conversations in this array if you want the Agent to say different things (or different Agents to say different things)
        this.text(createElseIncrement, [alexConvo1, alexConvo2, alexConvo3, alexConvo4]);
    }

    return alex;
}

function initializeConfessor(arrayIndex) {
    const danAnimations = {
        idle:danIdle,
        worry:null,
        north:null,
        south:null,
        east:null,
        west:null,
        northEast:null,
        northWest:null,
        southEast:null,
        southWest:null
    }

    const columns = locationList[locationNow].columns;
    const xPos = (1 + arrayIndex % columns) * WORLD_W + Math.floor(mainCamera.camPanX / WORLD_W);
    const yPos = Math.floor(arrayIndex / columns) * WORLD_H;
    let confessor = new OverworldObject("Dan", xPos, yPos, 26, 62, danAnimations);
    confessor.dialogue = new Dialogue();
    confessor.colour = "blue";
    confessor.location = Place.TheCity;
    
    confessor.chatEvents = function (createElseIncrement) {
        //Add additional conversations in this array if you want the Agent to say different things (or different Agents to say different things)
        this.text(createElseIncrement, [confessorConvo1, accusation]);
    }

    return confessor;
}

function initializeCop1(arrayIndex) {
    const copAnimations = {
        idle:copIdle,
        worry:null,
        north:null,
        south:null,
        east:null,
        west:null,
        northEast:null,
        northWest:null,
        southEast:null,
        southWest:null
    }

    const columns = locationList[locationNow].columns;
    const xPos = (1 + arrayIndex % columns) * WORLD_W + Math.floor(mainCamera.camPanX / WORLD_W);
    const yPos = Math.floor(arrayIndex / columns) * WORLD_H;
    let cop1 = new OverworldObject("Cop", xPos, yPos, 26, 62, copAnimations);
    cop1.dialogue = new Dialogue();
    cop1.colour = "blue";
    cop1.location = locationNow;
    
    cop1.chatEvents = function (createElseIncrement) {
        //Add additional conversations in this array if you want the Agent to say different things (or different Agents to say different things)
        this.text(createElseIncrement, [copConvo1, copConvo2, copConvo3]);
    }

    return cop1;
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

function drawNPCs() { //here for prototype purposes
    for (let i = 0; i < allNPCs.length; i++) {
        allNPCs[i].draw();
    }
}

function checkForNearbyNPCs() {
    for (let i = 0; i < allNPCs.length; i++) {
        allNPCs[i].nearPlayer();
    }
}
