const MAX_SECONDS = 1000;
let timer = new(function () {
    this.secondsRemaining = MAX_SECONDS;
    this.timeTick = function () {
        if (cutscenePause && this.secondsRemaining > 0 || showNextSceneText && this.secondsRemaining > 0 || atDestination && this.secondsRemaining > 0) {
            this.secondsRemaining--;
        } else if (this.secondsRemaining == 0) {
            endScenePause();
        }
    }
    
    this.setupTimer = function () {
        let t = this;
        setInterval(function () {
            t.timeTick();
        }, 1000);
    }

    this.drawTimer = function () {
        colorText('Time remaining: ' + this.secondsRemaining + ' seconds', canvas.width / 2, 80, 'white', "20px Arial", "center", 1);
    }
})();
