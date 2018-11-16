const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const PIXELS_PER_SCALE = 2.5;

var scaledCanvas, scaledContext;
var canvas, canvasContext;

var framesFromGameStart = 0;

window.onload = function () {
    canvas = document.createElement("canvas");
    canvas.setAttribute("id", "gameCanvas");
    canvasContext = canvas.getContext("2d");
    document.body.appendChild(canvas);
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    scaledCanvas = document.createElement("canvas");
    scaledContext = scaledCanvas.getContext("2d");
    scaledCanvas.width = CANVAS_WIDTH / PIXELS_PER_SCALE;
    scaledCanvas.height = CANVAS_HEIGHT / PIXELS_PER_SCALE;
    //document.body.appendChild(scaledCanvas);

    canvasContext.mozImageSmoothingEnabled = false;
    canvasContext.imageSmoothingEnabled = false;
    canvasContext.msImageSmoothingEnabled = false;
    canvasContext.imageSmoothingEnabled = false;
    scaledContext.mozImageSmoothingEnabled = false;
    scaledContext.imageSmoothingEnabled = false;
    scaledContext.msImageSmoothingEnabled = false;
    scaledContext.imageSmoothingEnabled = false;

    loadImages();

    makeAnimatedSprites();
}

function startGame() {
    var framesPerSecond = 30;
    setInterval(updateAll, 1000 / framesPerSecond);
    player.reset();
    setupInput();
}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
    player.move();
    triggerNPCDialogue();
    cameraFollow();
}

function drawAll() {
    beginPan();
    clearScreen();
    drawWorld();
    player.draw();
    drawAndInitNPCs();
    drawGameBorder();
    drawDebugText();
    createDialogueEvents();
    inventory.draw();
    endPan();
    levelEditor.roomTileCoordinate();
}

function clearScreen() {
    canvasContext.drawImage(scaledCanvas, 0, 0, scaledCanvas.width, scaledCanvas.height,
        0, 0, canvas.width, canvas.height);
}

function drawGameBorder() {
    canvasContext.drawImage(gameBorderPic, 0, 0);
}

function drawDebugText() {
    colorText("Pressed Space: " + pressed_space, 20, 30, "white", "20px Arial", "left", 1);
    colorText("Colliding with Rose: " + rose.collidingWithPlayer(), 20, 50, "white", "20px Arial", "left", 1);
}
