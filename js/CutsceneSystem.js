let sceneStep = 0;
let sceneStepWaitingToBeFinished = false;
let playingScene = null;
let cutscenePause = false;
let nextCutsceneText = false;

function cutscene() {
    this.isPlaying = true;

    let dialogueBoxImage = dialogueBoxPic;
    let dialogueBoxX = 0;
    let dialogueBoxY = 470;
    let textXBuffer = 30;
    let textYBuffer = 40;
    let textX = dialogueBoxX + textXBuffer;
    let textY = dialogueBoxY + textYBuffer;
    let textColour = "white";
    let textFontFace = "25px consolas";
    let textAlign = "left";
    let maxWidth = 210;
    let lineHeight = 30;

    var page = 0;
    let letterCounter = 0;
    let letterSpeed = 1;

    this.wait = function (num) {
        timer.secondsRemaining = num;
        cutscenePause = true;
        console.log("Pause scene for " + num + " seconds")
    }

    this.showDialogue = function (dialogueList) {
        let dialogue = [],
            speakerNames = [],
            voices = [],
            nameCols = [],
            typewriterText,
            textPad = 60,
            measureText,
            nameWidth,
            chatTime = 0;

        for (let i = 0; i < dialogueList.length; i++) {
            let chatEvent = dialogueList[i];
            if ("text" in chatEvent) dialogue.push(chatEvent.text);
            if ("who" in chatEvent) speakerNames.push(chatEvent.who);
            if ("voice" in chatEvent) voices.push(chatEvent.voice);
            if ("nameCol" in chatEvent) nameCols.push(chatEvent.nameCol);
        }

        measureText = canvasContext.measureText(speakerNames[page]),
        nameWidth = measureText.width + textPad;

        if (letterCounter < dialogue[page].length) {
            letterCounter += letterSpeed;
        }
        
        //current workaround for dialogue scenes - reliant on a second based timer
        
        //to avoid ending the scene, set timer to 1 (without counting down) while text is spelling out
        if (letterCounter < dialogue[page].length && page < dialogue.length) timer.secondsRemaining = 1;
        
        if (!nextCutsceneText) {
            //once text is all spelt out, set timer to 3, and prepare for the next page by switching nextCutsceneText to true
            if (page < dialogue.length && letterCounter >= dialogue[page].length) {
                timer.secondsRemaining = 2;
                nextCutsceneText = true;
            } 
        }
        if (nextCutsceneText) {
            //once timer hits 0, reset letters/show next set of text, then make sure the timer isn't reset immediately by flipping the bool back to false
            if (timer.secondsRemaining == 0 && page < dialogue.length - 1) {
                letterCounter = 0;
                page++;
                nextCutsceneText = false;
            } 
        }
        
        typewriterText = dialogue[page].substr(0, letterCounter);
        canvasContext.drawImage(dialogueBoxPic, dialogueBoxX, dialogueBoxY);
        colorText(speakerNames[page] + ":", textX, textY, nameCols[page], textFontFace, textAlign, 1);
        colorText(typewriterText, textX + nameWidth, textY, textColour, textFontFace, textAlign, 1);
    }

    this.moveChar = function (charX, charY, xDist, yDist, speed) {
        console.log("called moveChar with args: ", xDist, yDist, speed);
        sceneStepWaitingToBeFinished = false;
    }

}

function updateSceneTick() {
    if (playingScene != null) {
        if (sceneStep < playingScene.scenes.length) {
            if (!sceneStepWaitingToBeFinished) {
                console.log("next scene");
                nextSceneCall(playingScene);
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
