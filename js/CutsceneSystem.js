let sceneStep = 0;
let sceneStepWaitingToBeFinished = false;
let playingScene = null;
let cutscenePause = false;
let showNextSceneText = false;
var sceneTextPage = 0;
let sceneLetterCount = 0;

function cutscene() {
    this.isPlaying = true;
    
    let dialogueBoxX = 0,
    dialogueBoxY = 470,
    textX = dialogueBoxX + 30,
    textY = dialogueBoxY + 40,
    textColour = "white",
    textFontFace = "25px consolas",
    textAlign = "left",
    letterSpeed = 1,
    pauseBetweenPages = 3;

    this.wait = function (num) {
        timer.secondsRemaining = num;
        cutscenePause = true;
        console.log("Pause scene for " + num + " seconds")
    }

    this.moveChar = function (charX, charY, xDist, yDist, speed) {
        console.log("called moveChar with args: ", xDist, yDist, speed);
        sceneStepWaitingToBeFinished = false;
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
            if (sceneTextPage < dialogue.length) {
                timer.secondsRemaining = pauseBetweenPages + 1;
            }
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
        
        if (sceneTextPage >= dialogue.length - 1 && sceneLetterCount >= dialogue[sceneTextPage].length) {
            sceneLetterCount >= dialogue[sceneTextPage].length
        }
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
            }
        } else if (timer.secondsRemaining == 0) {
            console.log("finished; all cutscene functions were called in order");
            this.playing = false;
        }
    }
}

function endScenePause() {
    timer.secondsRemaining = 0;
    cutscenePause = false;
    sceneStepWaitingToBeFinished = false;
}

function createCutscene(sceneList) {
    this.playing = true;
    playingScene = sceneList;
}

function nextSceneCall(forScene) {
    let argsAfterFirst = forScene.scenes[sceneStep].slice(1); // list without first function call in it
    sceneStepWaitingToBeFinished = true;
    forScene.scenes[sceneStep][0].apply(this, argsAfterFirst);
    sceneStep++;
}
