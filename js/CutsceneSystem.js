let sceneStep = 0;
let sceneStepWaitingToBeFinished = false;
let playingScene = null;

let cutscenePause = false;
let showNextSceneText = false;
let atDestination = false;
var sceneTextPage = 0;
let sceneLetterCount = 0;

let whoMoving = null;
let movingToX, movingToY, facingAnim, movingSpeed;

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
        timer.secondsRemaining = 2; //timer won't count down until atDestination is true
        showNextSceneText = false;

        console.log("called moveChar with args: ", xDist, yDist, speed);
        whoMoving = object;
        movingToX = whoMoving.x + xDist;
        movingToY = whoMoving.y + yDist;
        movingSpeed = speed;

        switch (facingDir) {
            case "north":
                facingAnim = whoMoving.facing.north = true;
                break;
            case "south":
                facingAnim = whoMoving.facing.south = true;
                break;
            case "east":
                facingAnim = whoMoving.facing.east = true;
                break;
            case "west":
                facingAnim = whoMoving.facing.west = true;
                break;
            case "northeast":
                facingAnim = whoMoving.facing.northEast = true;
                break;
            case "northwest":
                facingAnim = whoMoving.facing.northWest = true;
                break;
            case "southeast":
                facingAnim = whoMoving.facing.southEast = true;
                break;
            case "southwest":
                facingAnim = whoMoving.facing.southWest = true;
                break;
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
            //voices[sceneTextPage].play();
            timer.secondsRemaining = pauseBetweenPages + 1;
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

function updateSceneTick() {
    if (playingScene != null) {
        if (whoMoving != null) {
            var xDiff = movingToX - whoMoving.x;
            var yDiff = movingToY - whoMoving.y;
            var pointDirection = Math.atan2(yDiff, xDiff);
            whoMoving.x += movingSpeed * Math.cos(pointDirection);
            whoMoving.y += movingSpeed * Math.sin(pointDirection);
            var pointDistance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
            if (pointDistance < speed) {
                whoMoving.x = movingToX;
                whoMoving.y = movingToY;
                whoMoving = null;
                atDestination = true;
                sceneStepWaitingToBeFinished = false;
            }
             if (!atDestination) {
                whoMoving.states.walking = true;
                facingAnim = true;
            } 
        }

        if (sceneStep < playingScene.scenes.length) {
            if (!sceneStepWaitingToBeFinished) {
                console.log("next scene");
                nextSceneCall(playingScene);
                sceneTextPage = 0;
                sceneLetterCount = 0;
                //atDestination = false;
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
