
let currentlyPlayingCutscene = null;

let cutscenePause = false;
let showNextSceneText = false;
let atDestination = false;

let whoMoving = null;
let movingToX, movingToY, movingSpeed;

function Cutscene() {
    this.sceneStep = 0;
    this.sceneStepWaitingToBeFinished = false;
    this.sceneTextPage = 0;
    this.sceneLetterCount = 0;

    this.dialogueBoxX = 0;
    this.dialogueBoxY = 470;
    this.textX = this.dialogueBoxX + 30;
    this.textY = this.dialogueBoxY + 40;
    this.textColour = "white";
    this.textFontFace = "25px consolas";
    this.textAlign = "left";
    this.letterSpeed = 0.5;
    this.pauseBetweenPages = 2; //in seconds

    this.wait = function (num) {
        timer.secondsRemaining = num;
        cutscenePause = true;
        console.log("Pause scene for " + num + " seconds");
    };

    this.moveChar = function (object, xDist, yDist, facingDir, speed) {
        atDestination = false;
        timer.secondsRemaining = this.pauseBetweenPages;
        showNextSceneText = false;

        console.log("called moveChar with args: ", xDist, yDist, speed);
        whoMoving = object;
        movingToX = whoMoving.x + xDist;
        movingToY = whoMoving.y + yDist;
        movingSpeed = speed;

        if (!atDestination) {
            switch (facingDir) {
                case "north":
                    whoMoving.facing.north = true;
                    break;
                case "south":
                    whoMoving.facing.south = true;
                    break;
                case "east":
                    whoMoving.facing.east = true;
                    break;
                case "west":
                    whoMoving.facing.west = true;
                    break;
                case "northeast":
                    whoMoving.facing.northEast = true;
                    break;
                case "northwest":
                    whoMoving.facing.northWest = true;
                    break;
                case "southeast":
                    whoMoving.facing.southEast = true;
                    break;
                case "southwest":
                    whoMoving.facing.southWest = true;
                    break;
            }
        }
    };

    this.playDialogue = function (dialogueList) {
        this.dialogue = [];
        this.speakerNames = [];
        this.voices = [];
        this.nameCols = [];
        this.typewriterText;
        this.textPad = 60;
        this.measureText;
        this.nameWidth;

        if (currentlyPlayingCutscene != null) {
            if (whoMoving == null) {
                for (let i = 0; i < dialogueList.length; i++) {
                    let chatEvent = dialogueList[i];
                    if ("text" in chatEvent) this.dialogue.push(chatEvent.text);
                    if ("who" in chatEvent) this.speakerNames.push(chatEvent.who);
                    if ("voice" in chatEvent) this.voices.push(chatEvent.voice);
                    if ("nameCol" in chatEvent) this.nameCols.push(chatEvent.nameCol);                     
                }
                this.measureText = canvasContext.measureText(this.speakerNames[this.sceneTextPage]),
                    this.nameWidth = this.measureText.width + this.textPad;
                if (this.sceneLetterCount < this.dialogue[this.sceneTextPage].length) {                
                    this.sceneLetterCount += this.letterSpeed;
                    if ((Math.floor(this.sceneLetterCount) % 2) == 0) {
                        //voices[sceneTextPage].play();
                    }
                    if (this.sceneTextPage < this.dialogue.length - 1) timer.secondsRemaining = this.pauseBetweenPages + 1;
                }
                if (!showNextSceneText) {
                    if (this.sceneTextPage < this.dialogue.length && this.sceneLetterCount >= this.dialogue[this.sceneTextPage].length) {
                        timer.secondsRemaining = this.pauseBetweenPages;
                        showNextSceneText = true;
                    }
                } else {
                    if (timer.secondsRemaining == 0 && this.sceneTextPage < this.dialogue.length - 1) {
                        this.sceneLetterCount = 0;
                        this.sceneTextPage++;
                        showNextSceneText = false;
                    }
                }                
                this.typewriterText = this.dialogue[this.sceneTextPage].substr(0, this.sceneLetterCount);
                canvasContext.drawImage(dialogueBoxPic, this.dialogueBoxX, this.dialogueBoxY);
                colorText(this.speakerNames[this.sceneTextPage] + ":", this.textX, this.textY, this.nameCols[this.sceneTextPage], this.textFontFace, this.textAlign, 1);
                colorText(this.typewriterText, this.textX + this.nameWidth, this.textY, this.textColour, this.textFontFace, this.textAlign, 1);
            }
        }
    };

    let step, convo;
    this.updateSceneTick = function (forScene = currentlyPlayingCutscene) {
        if (currentlyPlayingCutscene != null) {          
            if (this.sceneStep < forScene.sequence.length) {
                if (typeof forScene.sequence[this.sceneStep][0] == "number") { // if first element is a number                                  
                    step = forScene.sequence[this.sceneStep][0];                
                }
                if (step) {
                    let currentSequence = forScene.sequence[this.sceneStep];
                    for (let i = currentSequence.length - 1; i >= 0; i--) {
                        if (Array.isArray(currentSequence[i])) {
                            convo = currentSequence[i];                            
                        }
                    }
                }
            }
                    
            if (step == this.sceneStep) {
                this.playDialogue(convo);
            }

            if (whoMoving != null) {
                let xDiff = movingToX - whoMoving.x;
                let yDiff = movingToY - whoMoving.y;
                let pointDirection = Math.atan2(yDiff, xDiff);
                let pointDistance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
                whoMoving.x += movingSpeed * Math.cos(pointDirection);
                whoMoving.y += movingSpeed * Math.sin(pointDirection);
                if (pointDistance < speed) {
                    //reset directions here - to avoid more than one sheet drawing on screen
                    whoMoving.facing.north = false;
                    whoMoving.facing.south = false;
                    whoMoving.facing.west = false;
                    whoMoving.facing.east = false;
                    whoMoving.facing.northWest = false;
                    whoMoving.facing.northWest = false;
                    whoMoving.facing.southEast = false;
                    whoMoving.facing.southWest = false;
    
                    whoMoving.x = movingToX;
                    whoMoving.y = movingToY;
                    atDestination = true;
                    whoMoving = null;
                    this.sceneStepWaitingToBeFinished = false;
                } else {
                    whoMoving.states.walking = true;
                }
            }
    
            if (this.sceneStep < currentlyPlayingCutscene.sequence.length) {
                if (!this.sceneStepWaitingToBeFinished) {
                    console.log("next scene");
                    this.sceneTextPage = 0;
                    this.sceneLetterCount = 0;
                    this.playNextScene(currentlyPlayingCutscene);
                    this.sceneStep++;
                }
            } else if (timer.secondsRemaining == 0) {
                console.log("finished; all cutscene functions were called in order");
                currentlyPlayingCutscene = null;
                this.sceneStep = 0;
            }
        }
    };

    this.playNextScene = function (forScene) {
        let argsAfterFunction, functionIsAtThisIndex = 0;        
        if (typeof forScene.sequence[this.sceneStep][0] != "function") { // if first element is not a function  
            functionIsAtThisIndex++;
        }
        // list with elements after first function call
        argsAfterFunction = forScene.sequence[this.sceneStep].slice(functionIsAtThisIndex + 1);
        
        this.sceneStepWaitingToBeFinished = true;
        forScene.sequence[this.sceneStep][functionIsAtThisIndex].apply(this, argsAfterFunction);        
    };

    this.endScenePause = function () {
        timer.secondsRemaining = 0;
        cutscenePause = false;
        this.sceneStepWaitingToBeFinished = false;
    };
}