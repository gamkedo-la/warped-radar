const CAM_SPEED = 10;
const EDITOR_SPEED = 5;

let camPanX = 0.0;
let camPanY = 0.0;
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X = 200;
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y = 100;

function instantCamFollow() {
    camPanX = player.x - scaledCanvas.width / 2;
    camPanY = player.y - scaledCanvas.height / 2;
}

function findEdgesOfScreen() {
    // this next code blocks the game from showing out of bounds
    if (camPanX < 0) {
        camPanX = 0;
    }
    if (camPanY < 0) {
        camPanY = 0;
    }
    let maxPanRight = worldCols * WORLD_W - scaledCanvas.width;
    let maxPanTop = worldRows * WORLD_H - scaledCanvas.height;
    if (camPanX > maxPanRight) {
        camPanX = maxPanRight;
    }
    if (camPanY > maxPanTop) {
        camPanY = maxPanTop;
    }
}

function cameraFollow() {
    let cameraFocusCenterX = camPanX + scaledCanvas.width / 2;
    let cameraFocusCenterY = camPanY + scaledCanvas.height / 2;
    if (levelEditor.isOn) {
        let canvasRightBoundary = scaledCanvas.width + camPanX;
        let canvasBottomBoundary = scaledCanvas.height + camPanY;
        if ((mouseX / PIXELS_PER_SCALE) > scaledCanvas.width - WORLD_W) {
            camPanX += EDITOR_SPEED;
        }
        if ((mouseX / PIXELS_PER_SCALE) < WORLD_W) {
            camPanX -= EDITOR_SPEED;
        }
        if ((mouseY / PIXELS_PER_SCALE) > scaledCanvas.height - WORLD_H) {
            camPanY += EDITOR_SPEED;
        }
        if ((mouseY / PIXELS_PER_SCALE) < WORLD_H) {
            camPanY -= EDITOR_SPEED;
        }
        findEdgesOfScreen();
    } else {
        let cameraFocusCenterX = camPanX + scaledCanvas.width / 2;
        let cameraFocusCenterY = camPanY + scaledCanvas.height / 2;

        let playerDistFromCameraFocusX = Math.abs(player.x - cameraFocusCenterX);
        let playerDistFromCameraFocusY = Math.abs(player.y - cameraFocusCenterY);

        if (playerDistFromCameraFocusX > PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X) {
            if (cameraFocusCenterX < player.x) {
                camPanX += CAM_SPEED;
            } else {
                camPanX -= CAM_SPEED;
            }
        }
        if (playerDistFromCameraFocusY > PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y) {
            if (cameraFocusCenterY < player.y) {
                camPanY += CAM_SPEED;
            } else {
                camPanY -= CAM_SPEED;
            }
        }
        instantCamFollow();
        findEdgesOfScreen();
    }
}

function beginPan() {
    scaledContext.save();
    scaledContext.translate(-camPanX, -camPanY);
}

function endPan() {
    scaledContext.restore();
}
