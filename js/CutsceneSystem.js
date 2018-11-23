let sceneStep = 0;
let sceneStepWaitingToBeFinished = false;
let playingScene = null;
let cutscenePause = false;

function cutscene() {
    this.isPlaying = true;

    this.wait = function (num) {
        timer.secondsRemaining = num;
        cutscenePause = true;
        console.log("Pause scene for " + num + " seconds")
    }

    this.playSound = function (sound) {
        sound.play();
    }

    this.showDialogue = function (number, dialogueList) {
        console.log("called showDialogue with args: ", number, dialogueList);
        sceneStepWaitingToBeFinished = false;
        
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
