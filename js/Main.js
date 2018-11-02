const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

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
    loadImages();

    makeAnimatedSprites();
}

function startGame() {
    var framesPerSecond = 30;
    setInterval(updateAll, 1000 / framesPerSecond);
    setupInput();
}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
    player.move();
    triggerNPCDialogue();
}

function drawAll() {
    clearScreen();
    player.draw();
    drawAndInitNPCs();
    drawDebugText();
   
    createDialogueEvents(); //make sure this is last
}

function drawDebugText() {
    colorText("Pressed Space: " + pressed_space, 20, 30, "white", "20px Arial", "left", 1);
    colorText("Colliding with John: " + john.collidingWithPlayer(), 20, 50, "white", "20px Arial", "left", 1);
    colorText("Colliding with Bob: " + bob.collidingWithPlayer(), 20, 70, "white", "20px Arial", "left", 1);
}

function clearScreen() {
    colorRect(0, 0, canvas.width, canvas.height, "#92B6B1");
}
