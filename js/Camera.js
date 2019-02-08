function Camera () {
    this.speed = 10;
    this.editorSpeed = 5;
    
    this.targetDistFromCenterBeforePan = { x: 200, y: 200 };

    this.camPanX = 0.0;
    this.camPanY = 0.0;

    this.instantFollow = function (target) {
        this.camPanX = target.x - scaledCanvas.width / 2;
        this.camPanY = target.y - scaledCanvas.height / 2;
     };

    this.follow = function (target, targetDistBeforePan = this.targetDistFromCenterBeforePan, speed = this.speed, editorSpeed = this.editorSpeed) {
        let cameraFocusCenterX = this.camPanX + scaledCanvas.width / 2;
        let cameraFocusCenterY = this.camPanY + scaledCanvas.height / 2;
        if (levelEditor.isOn) {
            let canvasRightBoundary = scaledCanvas.width + this.camPanX;
            let canvasBottomBoundary = scaledCanvas.height + this.camPanY;
            if ((mouseX / PIXELS_PER_SCALE) > scaledCanvas.width - WORLD_W) {
                this.camPanX += editorSpeed;
            }
            if ((mouseX / PIXELS_PER_SCALE) < WORLD_W) {
                this.camPanX -= editorSpeed;
            }
            if ((mouseY / PIXELS_PER_SCALE) > scaledCanvas.height - WORLD_H) {
                this.camPanY += editorSpeed;
            }
            if ((mouseY / PIXELS_PER_SCALE) < WORLD_H) {
                this.camPanY -= editorSpeed;
            }
            this.findEdgesOfScreen();
        } else {
            let cameraFocusCenterX = this.camPanX + scaledCanvas.width / 2;
            let cameraFocusCenterY = this.camPanY + scaledCanvas.height / 2;
    
            let targetDistFromCameraFocusX = Math.abs(target.x - cameraFocusCenterX);
            let targetDistFromCameraFocusY = Math.abs(target.y - cameraFocusCenterY);
    
            if (targetDistFromCameraFocusX > targetDistBeforePan.x) {
                if (cameraFocusCenterX < target.x) {
                    this.camPanX += speed;
                } else {
                    this.camPanX -= speed;
                }
            }
            if (targetDistFromCameraFocusY > targetDistBeforePan.y) {
                if (cameraFocusCenterY < target.y) {
                    this.camPanY += speed;
                } else {
                    this.camPanY -= speed;
                }
            }
            this.instantFollow(target);
            this.findEdgesOfScreen();
        }
    };

    this.findEdgesOfScreen = function () {
        // this next code blocks the game from showing out of bounds
        if (this.camPanX < 0) {
            this.camPanX = 0;
        }
        if (this.camPanY < 0) {
            this.camPanY = 0;
        }
        let maxPanRight = worldCols * WORLD_W - scaledCanvas.width;
        let maxPanTop = worldRows * WORLD_H - scaledCanvas.height;
        if (this.camPanX > maxPanRight) {
            this.camPanX = maxPanRight;
        }
        if (this.camPanY > maxPanTop) {
            this.camPanY = maxPanTop;
        }
    };

    this.beginPan = function() {
        scaledContext.save();
        scaledContext.translate(-this.camPanX, -this.camPanY);
    };

    this.endPan = function () {
        scaledContext.restore();
    }
}
