let sceneStep = 0;
let sceneStepWaitingToBeFinished = false;
let playingScene = null;

let cutscenePause = false;
let showNextSceneText = false;
let atDestination = false;
var sceneTextPage = 0;
let sceneLetterCount = 0;

let whoMoving = null;
let movingToX, movingToY, movingSpeed;

function cutscene() {
    let dialogueBoxX = 0,
        dialogueBoxY = 470,
        textX = dialogueBoxX + 30,
        textY = dialogueBoxY + 40,
        textColour = "white",
        textFontFace = "25px consolas",
        textAlign = "left",
        letterSpeed = 1,
        pauseBetweenPages = 2; //in seconds

    this.wait = function (num) {
        timer.secondsRemaining = num;
        cutscenePause = true;
        console.log("Pause scene for " + num + " seconds");
    }

    this.moveChar = function (object, xDist, yDist, facingDir, speed) {
        atDestination = false;
        timer.secondsRemaining = pauseBetweenPages;
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
    }

    this.showDialogue = function (dialogueList) {
        let dialogue = [],
            speakerNames = [],
            voices = [],
            nameCols = [],
            typewriterText,
            textPad = 60,
            measureText,
            nameWidth;
        if (whoMoving == null) {
            for (let i = 0; i < dialogueList.length; i++) {
                let chatEvent = dialogueList[i];
                if ("text" in chatEvent) dialogue.push(chatEvent.text);
                if ("who" in chatEvent) speakerNames.push(chatEvent.who);
                if ("voice" in chatEvent) voices.push(chatEvent.voice);
                if ("nameCol" in chatEvent) nameCols.push(chatEvent.nameCol);
            }
            measureText = canvasContext.measureText(speakerNames[sceneTextPage]),
                nameWidth = measureText.width + textPad;
            if (sceneLetterCount < dialogue[sceneTextPage].length) {
                sceneLetterCount += letterSpeed;
                if ((Math.floor(sceneLetterCount) % 2) == 0) {
                    //voices[sceneTextPage].play();
                }
                if (sceneTextPage < dialogue.length - 1) timer.secondsRemaining = pauseBetweenPages + 1;
            }
            if (!showNextSceneText) {
                if (sceneTextPage < dialogue.length && sceneLetterCount >= dialogue[sceneTextPage].length) {
                    timer.secondsRemaining = pauseBetweenPages;
                    showNextSceneText = true;
                }
            } else {
                if (timer.secondsRemaining == 0 && sceneTextPage < dialogue.length - 1) {
                    sceneLetterCount = 0;
                    sceneTextPage++;
                    showNextSceneText = false;
                }
            }
            typewriterText = dialogue[sceneTextPage].substr(0, sceneLetterCount);
            canvasContext.drawImage(dialogueBoxPic, dialogueBoxX, dialogueBoxY);
            colorText(speakerNames[sceneTextPage] + ":", textX, textY, nameCols[sceneTextPage], textFontFace, textAlign, 1);
            colorText(typewriterText, textX + nameWidth, textY, textColour, textFontFace, textAlign, 1);
        }
    }
}

function updateSceneTick() {
    if (playingScene != null) {
        if (whoMoving != null) {
            var xDiff = movingToX - whoMoving.x;
            var yDiff = movingToY - whoMoving.y;
            var pointDirection = Math.atan2(yDiff, xDiff);
            var pointDistance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
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
                sceneStepWaitingToBeFinished = false;
            } else {
                whoMoving.states.walking = true;
            }
        }

        if (sceneStep < playingScene.scenes.length) {
            if (!sceneStepWaitingToBeFinished) {
                console.log("next scene");
                sceneTextPage = 0;
                sceneLetterCount = 0;
                nextSceneCall(playingScene);
            }
        } else if (timer.secondsRemaining == 0) {
            console.log("finished; all cutscene functions were called in order");
            playingScene = null;
        }
    }
}

function endScenePause() {
    timer.secondsRemaining = 0;
    cutscenePause = false;
    sceneStepWaitingToBeFinished = false;
}

function createCutscene(sceneList) {
    playingScene = sceneList;
}

function nextSceneCall(forScene) {
    let argsAfterFirst = forScene.scenes[sceneStep].slice(1); // list without first function call in it
    sceneStepWaitingToBeFinished = true;
    forScene.scenes[sceneStep][0].apply(this, argsAfterFirst);
    sceneStep++;
}
