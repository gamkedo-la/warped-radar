const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const PIXELS_PER_SCALE = 2.0;

let scaledCanvas, scaledContext;
let canvas, canvasContext;

let framesFromGameStart = 0;

let debug = false;
let paused = false;

let mainCamera;
let levelEditor;
let player;

let warpedRadarBackgroundMusic = new backgroundMusicClass();

let testScene = new Cutscene();
let playTheScene = false;
let gameIsStarted = true;

// Things that are set once for the entire run of the game here
function start () {
    gameIsStarted = false;
    window.addEventListener('focus', () => {
        paused = true;
        pauseRadar();
    });
    window.addEventListener('blur', () => {
        paused = false;
        pauseRadar();
    });

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

    makeAnimatedSprites();
    mainCamera = new Camera();
    levelEditor = new LevelEditor();
    player = new Player();

//    worldGrid = locationList[locationNow].layers[Layer.Ground];

    if (useRequestAnimationFrame) {
        gameLoop();
    } else {
        interval = setInterval(gameLoop, 1000/framesPerSecond);
    }

    setupInput();
    tileSet = new Tileset(worldTiles, 40, 40);
    player.reset();
    timer.setupTimer();
    initializeDefaultItems();
    console.log(note);
    initializeObtainableItems();
    console.log(arrayOfObtainableItems);
    notificationWindow.initialize();
    initializeOverworldObjects();

    //Start background music
    warpedRadarBackgroundMusic.loopSong("audio/MainMenu");
    warpedRadarBackgroundMusic.setVolume(0.35);//trying to balance background music with dialogue volume
};

//This is the call that gets the game started.
//Once loadImages results in picsToLoad == 0,
//the start() function above is called.
loadImages();

// Called from start(), keeps the game loop and delta in check
function gameLoop () {
    let now = Date.now();
    delta = (now - then) * deltaMultiplier;

    if (!paused) {
        update(delta / 1000);
        framesFromGameStart++;
        render();
    }

    then = now;

    if (useRequestAnimationFrame) {
        requestAnimationFrame(gameLoop);
    }
}

// All game logic to update every frame here
function update (delta) {
    //Reset it every frame
    if (gameIsStarted === false) {
        Menu.update();
    }
    else {
        player.nearObjOrNPC = null;
        checkForNearbyNPCs();
        player.move(delta);
        checkForObtainableItems(); //in obtainableItems.js
        triggerNPCDialogue();
        mainCamera.follow(player);
        levelEditor.showNewGrid();
    }
}
// All things drawn to screen every frame here
function render () {
    
    if(gameIsStarted === false){
        Menu.draw();
        return; // skip game logic below
    }
    clearScreen();
    mainCamera.beginPan();
    
    
    //scaledContext.clearRect(0,0,scaledCanvas.width,scaledCanvas.height)

    let nonTileObjects = [];
    nonTileObjects.push(player);
    nonTileObjects = nonTileObjects.concat(allNPCs);
    nonTileObjects = nonTileObjects.concat(arrayOfObtainableItems);
    drawWorld(nonTileObjects);

    drawWeatherEffects();
    drawGameBorder();
    drawDebugText();
    drawTextNearObjOrNPC();
    createDialogueEvents();
    inventory.draw();
    inventory.interactWithItems();
    mainCamera.endPan();
    levelEditor.roomTileCoordinate();

    notificationWindow.draw();

    // TO-DO START: reorganize cutscene system/manager
    //
    /* Notes:
    - scene step starts at 1
    fix:
    - end dialogue scene with wait:
        - if another dialogue event follows it
        - it is the last in the scene

    - Pass in the scene's step/dialogue here to show it on screen..
    */
    testScene.updateSceneTick();
    if (playTheScene) {
        currentlyPlayingCutscene = testScene;
    }
    // TO-DO END: reorganize cutscene system/manager

    drawScaledCanvas(); //draw everthing on the pixel-scale canvas to the larger game canvas
}

function goToNextLevel () {
    locationNow++;
    if (locationNow >= locationList.length) {
        locationNow = 0;
    }

    loadLevel(locationList[locationNow]);


}

function loadLevel (whichLevel) {
//    worldGrid = whichLevel.layers[Layer.Ground].slice();
    // these need to be updated to reflect the new location
    worldCols = whichLevel.columns;
    worldRows = whichLevel.rows;
    mainCamera.camPanX = 0;
    mainCamera.camPanY = 0;

    if (locationNow === 0) { //only render fog in the city
    	isFoggy = true;
    } else {
    	isFoggy = false;
    }

    player.reset();
}

function clearScreen () {
    scaledContext.clearRect(0,0,scaledCanvas.width,scaledCanvas.height);
    drawRectToContext(scaledContext, 0,0,scaledCanvas.width, scaledCanvas.height, "#223344");
    //canvasContext.drawImage(scaledCanvas, 0, 0, scaledCanvas.width, scaledCanvas.height, 0, 0, canvas.width, canvas.height);
}

function drawScaledCanvas () {
    //canvasContext.clearRect(0,0,canvas.width,canvas.height);
    canvasContext.drawImage(scaledCanvas, 0, 0, scaledCanvas.width, scaledCanvas.height, 0, 0, canvas.width, canvas.height);
}

function drawGameBorder () {
    canvasContext.drawImage(gameBorderPic, 0, 0);
}

function drawDebugText () {
    colorText("Pressed Space: " + interact_key, 20, 30, "white", "20px Arial", "left", 1);
    colorText("Near Rose: " + allNPCs[0].nearPlayer(), 20, 50, "white", "20px Arial", "left", 1);//assumes Rose is the first NPC added to the allNPCs array
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

function drawTextNearObjOrNPC() {
    if(player.nearObjOrNPC != null) {
        // Draw text for NPC
        colorText(player.nearObjOrNPC.name, (player.nearObjOrNPC.x*2 - mainCamera.camPanX*2) - 15, (player.nearObjOrNPC.y*2 - mainCamera.camPanY*2) + 15, "white", "14px Arial", "left", 1);

        // Draw text for obtainable items
        colorText(player.nearObjOrNPC.description, (player.nearObjOrNPC.drawTileX*2 - mainCamera.camPanX*2) -15, (player.nearObjOrNPC.drawTileY*2 - mainCamera.camPanY*2) + 15, "white", "14px Arial", "left", 1);
    }
}

function fastRadar() {
    if (useRequestAnimationFrame) {
        if (!isFastInterval) {
            deltaMultiplier = 2;
            isFastInterval = true;
            console.log("fastRadar(): Sped up!");
        } else {
            deltaMultiplier = 1;
            isFastInterval = false;
            console.log("fastRadar(): Normal speed!");
        }
    } else {
        if (!isFastInterval) {
            interval = setInterval(gameLoop, 1000/framesPerSecond);
            isFastInterval = true;
            console.log("fastRadar(): Sped up!");
        } else {
            clearInterval(interval);
            console.log(interval);
            isFastInterval = false;
            console.log("fastRadar(): Normal speed!");
        }
        console.log(isFastInterval);
    }
}

function pauseRadar(){
    if (!paused){
        colorText("PAUSE", 400, 300, "red", "30px Arial", "center", 10);
        if (!useRequestAnimationFrame) {
            clearInterval(interval);
        }
        paused = true;
    } else {
        if (!useRequestAnimationFrame) {
            interval = setInterval(gameLoop, 1000/framesPerSecond);
        }
        paused = false;
    }
  }
