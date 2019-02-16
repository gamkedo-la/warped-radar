var stats = new Stats();
stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const PIXELS_PER_SCALE = 2.0;

let scaledCanvas, scaledContext, fxCanvas, fxContext;
let canvas, canvasContext;

let framesFromGameStart = 0;

let debug = false;
let paused = false;
let transitioning = false;

let mainCamera;
let levelEditor;
let player;
let eventManager;
//let daveHasBeenDiscovered = false;

let warpedRadarBackgroundMusic = new backgroundMusicClass();
let warpedRadarAmbientNoise = new backgroundMusicClass();
warpedRadarAmbientNoise.volume = 0.2;

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

    fxCanvas = document.createElement("canvas");
    fxContext = fxCanvas.getContext("2d");
    fxCanvas.width = CANVAS_WIDTH;
    fxCanvas.height = CANVAS_HEIGHT;

    canvasContext.imageSmoothingEnabled = false;
    canvasContext.msImageSmoothingEnabled = false;
    canvasContext.imageSmoothingEnabled = false;
    scaledContext.imageSmoothingEnabled = false;
    scaledContext.msImageSmoothingEnabled = false;
    scaledContext.imageSmoothingEnabled = false;
    fxContext.filter = 'blur(8px)';

    makeAnimatedSprites();
    mainCamera = new Camera();
    levelEditor = new LevelEditor();
    player = new Player();

    setupInput();
    tileSet = new Tileset(worldTiles, 40, 40);
    player.reset();
    timer.setupTimer();
    initializeDefaultItems();
    initializeObtainableItems();
    notificationWindow.initialize();
    eventManager = new EventManager();
    initializeOverworldObjects();
    initializeInteractableItems();

    //Start background music
    warpedRadarBackgroundMusic.loopSong("audio/MainMenu");
    warpedRadarBackgroundMusic.setVolume(0.35);//trying to balance background music with dialogue volume

    // if (useRequestAnimationFrame) {
    gameLoop();
    // } else {
    //     interval = setInterval(gameLoop, 1000/framesPerSecond);
    // }

};

//This is the call that gets the game started.
//Once loadImages results in picsToLoad == 0,
//the start() function above is called.
loadImages();

// Called from start(), keeps the game loop and delta in check

function gameLoop () {
    stats.begin();

    let now = Date.now();
    delta = (now - then); // * deltaMultiplier;


    update(delta / 1000);
    framesFromGameStart++;

    render();
    //postRender();

    then = now;

        stats.end();
        requestAnimationFrame(gameLoop);

}

// All game logic to update every frame here
function update (delta) {
    if (locationNow === 0 || locationNow === 3) {
      street_footsteps.volume = 0.2;
    } else {
      street_footsteps.volume = 0.05;
    }

    //Reset it every frame
    if (gameIsStarted === false || paused) {
        Menu.update();
    }
    else {
        player.nearObjOrNPC = null;
        checkForNearbyNPCs();
        checkForNearbyOBJs();
        player.move(delta);
        updateOverworldObjects(delta);
        checkForObtainableItems(); //in obtainableItems.js
        triggerNPCDialogue();
        triggerOBJDialogue();
        mainCamera.follow(player);
        //mainCamera.camPanX = Math.round(mainCamera.camPanX);
        //mainCamera.camPanY = Math.round(mainCamera.camPanY);
        levelEditor.showNewGrid();
    }
    if (transitioning) {
        PageTransition.update();
    }
    fade_songs();
}

// Update NPCs (really just Rose since she can walk around)
function updateOverworldObjects(delta) {
    for(let i = 0; i < allNPCs.length; i++) {
        allNPCs[i].update(delta);
    }
}

// All things drawn to screen every frame here
function render () {

    if(gameIsStarted === false || paused){
        Menu.draw();
        if (transitioning) {
            PageTransition.draw();
        }
        return; // skip game logic below
    }
    clearScreen();
    mainCamera.beginPan();


    //scaledContext.clearRect(0,0,scaledCanvas.width,scaledCanvas.height)

    let nonTileObjects = [];
    nonTileObjects.push(player);
    nonTileObjects = nonTileObjects.concat(allNPCs);

    //only add obtainable items which are available for pick up (don't draw those which shouldn't be visible)
    let availableObtainableItems = [];
    for(let i = 0; i < arrayOfObtainableItems.length; i++) {
        if(eventManager.canShowObtainableItem(arrayOfObtainableItems[i])) {
            availableObtainableItems.push(arrayOfObtainableItems[i]);
        }
    }
    nonTileObjects = nonTileObjects.concat(availableObtainableItems);
    nonTileObjects = nonTileObjects.concat(arrayOfInteractableItems);

    // if (transitioning) {
    //   scaledContext.globalAlpha = worldAlpha;
    //   worldAlpha += 0.01;
    // }

    drawWorld(nonTileObjects);
    drawScaledCanvas(); //draw everthing on the pixel-scale canvas to the larger game canvas

    drawWeatherEffects();
    drawGameBorder();
    if(debug) {
     drawDebugText();
    }
    drawTextNearObjOrNPC();
    createDialogueEvents();
    createOBJDialogueEvents();
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

    Intros.draw(); // if any

    if (transitioning) {
        PageTransition.draw();
    }

    postRender();

}

let worldAlpha = 0;

function postRender () {
    fxContext.drawImage(canvas, 0,0, canvas.width, canvas.height, 0, 0, fxCanvas.width, fxCanvas.height);
    canvasContext.save();
    canvasContext.globalCompositeOperation = "lighter";
    canvasContext.globalAlpha = 0.55;
    canvasContext.drawImage(fxCanvas, 0,0, fxCanvas.width, fxCanvas.height, 0,0, canvas.width, canvas.height);
    canvasContext.restore();

}
function goToDestinationFor(arrayIndexUnderPlayer) {

    let newSwitchIndex = -1;
    let shouldReloadLevel = false;
    if(locationList[locationNow] === locationList[Place.TheCity]) {
      ambient_street_noise_1.play();
      ambient_street_noise_2.play();
        if(arrayIndexUnderPlayer === Switch.TheCityToJohnsRoom) {
            locationNow = Place.JohnsRoom;
            newSwitchIndex = Switch.JohnsRoomFromTheCity;
            shouldReloadLevel = true;
            //city_song.pause();
            city_song.fadingOut = true;
            johns_house_song.play();
            johns_house_song.fadingIn = true;
            ambient_street_noise_1.pause();
            ambient_street_noise_2.pause();
        } else if(arrayIndexUnderPlayer === Switch.TheCityToJuliesStore) {
            locationNow = Place.JuliesStore;
            newSwitchIndex = Switch.JuliesStoreFromTheCity;
            shouldReloadLevel = true;
            //city_song.pause();
            city_song.fadingOut = true;
            julies_store_song.play();
            julies_store_song.fadingIn = true;
            ambient_street_noise_1.pause();
            ambient_street_noise_2.pause();
        } else if(arrayIndexUnderPlayer === Switch.TheCityToDavesHouse) {
            locationNow = Place.DavesHouse;
            newSwitchIndex = Switch.DavesHouseFromTheCity;
            shouldReloadLevel = true;
            //city_song.pause();
            city_song.fadingOut = true;
            daves_house_song.play();
            daves_house_song.fadingIn = true;
            ambient_street_noise_1.pause();
            ambient_street_noise_2.pause();
        }
    } else if(locationList[locationNow] === locationList[Place.JohnsRoom]) {
        if(arrayIndexUnderPlayer === Switch.JohnsRoomToTheCity) {
            locationNow = Place.TheCity;
            newSwitchIndex = Switch.TheCityFromJohnsRoom;
            shouldReloadLevel = true;
            //johns_house_song.pause();
            johns_house_song.fadingOut = true;
            city_song.play();
            city_song.fadingIn = true;
            ambient_street_noise_1.play();
            ambient_street_noise_2.play();
        } else if(arrayIndexUnderPlayer === Switch.JohnsRoomToJohnsHallway) {
            locationNow = Place.JohnsHallway;
            newSwitchIndex = Switch.JohnsHallwayFromJohnsRoom;
            shouldReloadLevel = true;
        }
    } else if(locationList[locationNow] === locationList[Place.JuliesStore]) {
        if(arrayIndexUnderPlayer === Switch.JuliesStoreToTheCity) {
            locationNow = Place.TheCity;
            newSwitchIndex = Switch.TheCityFromJuliesStore;
            shouldReloadLevel = true;
            //julies_store_song.pause();
            julies_store_song.fadingOut = true;
            city_song.play();
            city_song.fadingIn = true;
            ambient_street_noise_1.play();
            ambient_street_noise_2.play();
        }
    } else if(locationList[locationNow] === locationList[Place.DavesHouse]) {
        if(arrayIndexUnderPlayer === Switch.DavesHouseToTheCity) {
            locationNow = Place.TheCity;
            newSwitchIndex = Switch.TheCityFromDavesHouse;
            shouldReloadLevel = true;
            //daves_house_song.pause();
            daves_house_song.fadingOut = true;
            city_song.play();
            city_song.fadingIn = true;
            ambient_street_noise_1.play();
            ambient_street_noise_2.play();
        }
    }

    if(shouldReloadLevel) {
        loadLevel(locationList[locationNow]);

        const newPlayerPos = arrayIndexToRowCol(newSwitchIndex);
        player.setRowColPos(newPlayerPos.row, newPlayerPos.col);

        initializeOverworldObjects();
        initializeInteractableItems();

        mainCamera.instantFollow(player);

        PageTransition.init({
            duration:2500,
            pixelW: 16,
            pixelH: 16,
            colorArray: ["#000000", "#110011", "#111111"]

        });
    }
}

function loadLevel (whichLevel) {
    // these need to be updated to reflect the new location
    worldCols = whichLevel.columns;
    worldRows = whichLevel.rows;

    if (locationNow === Place.TheCity) { //only render fog in the city
    	isFoggy = true;
    } else {
    	isFoggy = false;
    }

    if(locationNow == Place.DavesHouse) {
        GameEvent.EnteredDavesHouse = true;
    }
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
    if(allNPCs.length > 0) {
        colorText("Near Rose: " + allNPCs[0].nearPlayer(), 20, 50, "white", "20px Arial", "left", 1);//assumes Rose is the first NPC added to the allNPCs array
    }
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
        if( dialogueNotShowing() ) {
            if(player.nearObjOrNPC.obtainable == undefined) {//NPCs can't be 'obtained', so this property is not defined for them
                // Draw text for NPC
                colorText(player.nearObjOrNPC.name, (player.nearObjOrNPC.x*2 - mainCamera.camPanX*2) - 15, (player.nearObjOrNPC.y*2 - johnSprite.height *4/3 - mainCamera.camPanY*2) + 15, "white", "14px Arial", "left", 1);
            } else {
                // Draw text for obtainable items
                colorText(player.nearObjOrNPC.description, (player.nearObjOrNPC.drawTileX*2 - mainCamera.camPanX*2) -15, (player.nearObjOrNPC.drawTileY*2 - mainCamera.camPanY*2) + 15, "white", "14px Arial", "left", 1);
            }

            // shadow
            colorText("Space to Interact", (player.x*2 + johnSprite.width / 2 - mainCamera.camPanX*2) - 15+1, (player.y*2 + johnSprite.height *3/4 - mainCamera.camPanY*2) + 15+1, "black", "14px Arial", "center", 1);
            // main
            colorText("Space to Interact", (player.x*2 + johnSprite.width / 2 - mainCamera.camPanX*2) - 15, (player.y*2 + johnSprite.height *3/4 - mainCamera.camPanY*2) + 15, "white", "14px Arial", "center", 1);
        }
    }
}

function pauseRadar(){
    if (!paused){
        paused = true;
    } else {
        paused = false;
    }
  }
