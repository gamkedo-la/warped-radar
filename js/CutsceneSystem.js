let sceneStep = 0;
let sceneStepWaitingToBeFinished = false;
let playingScene = null;

let cutscenePause = false;
let showNextSceneText = false;
let atDestination = false;
var sceneTextPage = 0;
let sceneLetterCount = 0;

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

    this.moveChar = function (object, xDist, yDist, speed) {
        timer.secondsRemaining = 2;
        showNextSceneText = false;
        var xDest = object.x + xDist;
        var yDest = object.y + yDist;

        var point_direction = Math.atan2(yDest - object.y, xDest - object.x);
        var lengthDirx = speed * Math.cos(point_direction);
        var lengthDiry = speed * Math.sin(point_direction);
        object.x += Math.floor(lengthDirx);
        object.y += Math.floor(lengthDiry);
        
        var point_distance = Math.sqrt(Math.pow(xDest, 2) + Math.pow(yDest, 2));
        if (point_distance >= speed) {
            object.x = xDest;
            object.y = yDest;
            atDestination = true;
            sceneStepWaitingToBeFinished = false;
            console.log("called moveChar with args: ", xDist, yDist, speed);
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
