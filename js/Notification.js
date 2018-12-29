const notificationWindow = new (function () {

    this.initialize = function() {
        this.x = 10;
        this.y = CANVAS_HEIGHT - 140;
        this.width = CANVAS_WIDTH - 20;
        this.height = 65;
        this.outlineColor = '#990000';
        this.outlineThickness = 3;
    
        this.message = '';
        this.messageX = 25;
        this.messageY = CANVAS_HEIGHT - 100;
        this.messageColor = 'white';
        this.messageFont = '30px consolas';
    
        this.timeToLive = 3000;
        this.displayWindow = false;
    }

    this.draw = function() {
        if (this.displayWindow) {
            drawRect(this.x, this.y, this.width, this.height);
            drawStrokeRect(canvasContext, this.x, this.y, this.width, this.height, this.outlineColor, this.outlineThickness);
            colorText(this.message, this.messageX, this.messageY, this.messageColor, this.messageFont);
        }
    }

    this.setMessage = function(message) {
        this.message = message;
        this.displayWindow = true;
        let self = this;
        setTimeout(function() {
            self.displayWindow = false;
        }, this.timeToLive);
    }
})();