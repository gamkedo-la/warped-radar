const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const PIXELS_PER_SCALE = 2.0;

let scaledCanvas, scaledContext;
let canvas, canvasContext;

let framesFromGameStart = 0;
let interval;
let debug = false;
let paused = false;
window.onload = function () {
    window.addEventListener('focus', windowOnFocus);
    window.addEventListener('blur', windowOnBlur);

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

function windowOnFocus() {
    paused = true;
    pauseRadar();
}

function windowOnBlur() {
    paused = false;
    pauseRadar();
}

function startGame() {
    worldGrid = Array.from(locationList[locationNow].layout);
    gameLoop();
    setupInput();
    player.reset();
    timer.setupTimer();
    initializeDefaultItems();
    console.log(note);
    initializeObtainableItems();
    console.log(arrayOfObtainableItems);
    //stebs_warped_radar_song.resumeSound();
}

function gameLoop() {
interval = setInterval(updateAll, 1000/framesPerSecond);

}   

function nextLevel() {
    locationNow++;
    if (locationNow >= locationList.length) {
        locationNow = 0;
    }

    loadLevel(locationList[locationNow]);
}

function loadLevel(whichLevel) {
    worldGrid = whichLevel.layout.slice();
    // these need to be updated to reflect the new location
    worldCols = whichLevel.columns;
    worldRows = whichLevel.rows;
    camPanX = 0;
    camPanY = 0;
    player.reset();
}


function updateAll() {
    updateSceneTick();
    moveAll();
    drawAll();
}

function moveAll() {
    player.move();
    checkForObtainableItems(); //in obtainableItems.js
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
    drawWeatherEffects();
    drawGameBorder();
    drawDebugText();
    createDialogueEvents();
    inventory.draw();
    inventory.interactWithItems();
    endPan();
    showCutsceneDialogue();
    //triggerTestScene();
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
    
    colorText(locationList[locationNow].name, canvas.width/2, 80, "white", "20px Arial", "center", 1);
    
    let editorInstructionsTextYStart = 420;
    if (levelEditor.isOn) colorText("[A] and [D] to change tile", 20, editorInstructionsTextYStart, "yellow", "14px Arial", "left", 1);
    if (levelEditor.isOn) colorText("[SPACE] New Grid", 20, editorInstructionsTextYStart + 20, "yellow", "14px Arial", "left", 1);
    if (levelEditor.isOn) colorText("[1] Sidewalk Tiles", 20, editorInstructionsTextYStart + 40, "yellow", "14px Arial", "left", 1);
    if (levelEditor.isOn) colorText("[2] Building Tiles", 20, editorInstructionsTextYStart + 60, "yellow", "14px Arial", "left", 1);
    if (levelEditor.isOn) colorText("[0] Default Tiles", 20, editorInstructionsTextYStart + 80, "yellow", "14px Arial", "left", 1);

    if (levelEditor.isOn) colorText("Note: replacing the tile under the player will change his start point ", 20, 530, "yellow", "12px Arial", "left", 1);
}

function fastRadar() { 
    gameLoop(interval);
  }

function pauseRadar(){
    if (!paused){
        colorText("PAUSE", 400, 300, "red", "30px Arial", "center", 10);
        clearInterval(interval);
        paused = true;
    }else {
        gameLoop();    
        paused = false;
    }
  }