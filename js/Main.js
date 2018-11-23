const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const PIXELS_PER_SCALE = 2.0;

let scaledCanvas, scaledContext;
let canvas, canvasContext;

let framesFromGameStart = 0;

let debug = true;

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

    canvasContext.imageSmoothingEnabled = false;
    canvasContext.msImageSmoothingEnabled = false;
    canvasContext.imageSmoothingEnabled = false;
    scaledContext.imageSmoothingEnabled = false;
    scaledContext.msImageSmoothingEnabled = false;
    scaledContext.imageSmoothingEnabled = false;

    if (loadImages()) {
        startGame();
    }

    makeAnimatedSprites();
}

function startGame() {
    let framesPerSecond = 30;
    setInterval(updateAll, 1000 / framesPerSecond);
    player.reset();
    setupInput();
    timer.setupTimer();
    //assignXAndYCoordinatesOfItems();
    //console.log(arrayOfObtainableItems);
    setInterval(updateSceneTick,1000/30);
    //createCutscene(testScene);
}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
    player.move();
    //for (let obtainableItemsIndex = 0; obtainableItemsIndex < arrayOfObtainableItems.length; obtainableItemsIndex++) {
    /*if (player.collider.isCollidingWith(arrayOfObtainableItems[3])) {
      console.log("item obtained!");
    }*/
    
    triggerNPCDialogue();
    cameraFollow();
    levelEditor.showNewGrid();
}



function drawAll() {
    beginPan();
    clearScreen();
    drawWorld();
    player.draw();
    if (debug) {
    	player.collider.draw("red");
    }
    drawAndInitNPCs();
    drawGameBorder();
    drawDebugText();
    createDialogueEvents();
    inventory.draw();
    //timer.drawTimer();
    endPan();
    showCutsceneDialogue();
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
    colorText("Pressed Space: " + interact_key, 20, 30, "white", "20px Arial", "left", 1);
    colorText("Colliding with Rose: " + rose.collidingWithPlayer(), 20, 50, "white", "20px Arial", "left", 1);
    colorText("[CTRL+E] Level Editor: " + (levelEditor.isOn ? "ON" : "OFF"), 800, 30, "white", "20px Arial", "right", 1);

    let editorInstructionsTextYStart = 420;
    if (levelEditor.isOn) colorText("[A] and [D] to change tile", 20, editorInstructionsTextYStart, "yellow", "14px Arial", "left", 1);
    if (levelEditor.isOn) colorText("[SPACE] New Grid", 20, editorInstructionsTextYStart + 20, "yellow", "14px Arial", "left", 1);
    if (levelEditor.isOn) colorText("[1] Sidewalk Tiles", 20, editorInstructionsTextYStart + 40, "yellow", "14px Arial", "left", 1);
    if (levelEditor.isOn) colorText("[2] Building Tiles", 20, editorInstructionsTextYStart + 60, "yellow", "14px Arial", "left", 1);
    if (levelEditor.isOn) colorText("[0] Default Tiles", 20, editorInstructionsTextYStart + 80, "yellow", "14px Arial", "left", 1);

    if (levelEditor.isOn) colorText("Note: replacing the tile under the player will change his start point ", 20, 530, "yellow", "12px Arial", "left", 1);
}
