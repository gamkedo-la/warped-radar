let sceneStep = 0;
let sceneStepWaitingToBeFinished = false;
let playingScene = null;
let cutscenePause = false;

function cutscene() {
    this.isPlaying = true;
    this.timespan = 4000; // bubble disappears after this many MS
    this.animLength = 1500; // how long it animates in MS

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

    this.showDialogue = function (dialogueList, num) {
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

        console.log(dialogue[page]);
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

function createScene(sceneList) {
    this.playing = true;
    playingScene = sceneList;
}

function nextSceneCall(forScene) {
    let argsAfterFirst = forScene.scenes[sceneStep].slice(1); // list without first function call in it
    sceneStepWaitingToBeFinished = true;
    forScene.scenes[sceneStep][0].apply(this, argsAfterFirst);
    sceneStep++;
}