let dialogueBoxPic = document.createElement("img");
let textArrowSheet = document.createElement("img");
let choiceCursorPic = document.createElement("img");

let inventoryPic = document.createElement("img");

let gameBorderPic = document.createElement("img");

let johnHappyPic = document.createElement("img");
let johnMadPic = document.createElement("img");
let roseHappyPic = document.createElement("img");
let roseAnnoyedPic = document.createElement("img");

let johnMouthAnimatedSheet = document.createElement("img");
let roseMouthAnimatedSheet = document.createElement("img");

let johnAnimation = document.createElement("img");

let johnSideAnimation = document.createElement("img");
let johnSide45Animation = document.createElement("img");

let johnIdleAnimation = document.createElement("img");


let building = document.createElement("img");

let picsToLoad = 0;
let worldPics = [];

function countLoadedImages() {
    picsToLoad--;
    if (picsToLoad == 0) {
        startGame();
    }
}

function beginLoadingImage(imagelet, fileName) {
    imagelet.onload = countLoadedImages;
    imagelet.src = "img/" + fileName;
}

function loadImageForWorldCode(worldCode, fileName) {
    worldPics[worldCode] = document.createElement("img");
	beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages() {
    let imageList = [
        //GAME UI
        {letName: dialogueBoxPic, theFile: "dialoguebox.png"},
        {letName: choiceCursorPic, theFile: "choicecursor.png"},
        {letName: gameBorderPic, theFile: "gameBorder.png"},
        {letName: inventoryPic, theFile: "inventory.png"},
        
        //PORTRAITS
        {letName: johnHappyPic, theFile: "john.png"},
        {letName: johnMadPic, theFile: "john2.png"},
        {letName: roseHappyPic, theFile: "rose.png"},
        {letName: roseAnnoyedPic, theFile: "rose2.png"},
        
        //PORTRAIT ANIMS
        {letName: johnMouthAnimatedSheet, theFile: "johnmouthmove.png"},
        {letName: roseMouthAnimatedSheet, theFile: "rosemouthmove.png"},
        
        //OVERWORLD CHARACTER ANIMS
        {letName: johnAnimation, theFile: "johnsprite-sheet.png"},
        {letName: johnIdleAnimation, theFile: "johnspriteidle-sheet.png"},
        {letName: johnSideAnimation, theFile: "johnspriteside-sheet.png"},
        {letName: johnSide45Animation, theFile: "johnspriteside45-sheet.png"},
        
        //TILES
        {worldType: TILE_GROUND, theFile: "ground.png"},
        {worldType: TILE_PLAYERS_TILE, theFile: "playerstarttile.png"},
        {worldType: TILE_WALL, theFile: "random.png"},
        {worldType: TILE_SIDEWLAK, theFile: "sidewalk.png"},
        {worldType: TILE_SIDEWALK_RIGHTCORNER, theFile: "sidewalk-cornerpiece-right.png"},
        {worldType: TILE_SIDEWALK_VERTICAL, theFile: "sidewalk-vertical.png"},
        
        //BUILDINGS
        {worldType: TILE_TESTBUILDING_LEFT, theFile: "testbuilding-leftcorner.png"},
        {worldType: TILE_TESTBUILDING_RIGHT, theFile: "testbuilding-rightcorner.png"},
        {worldType: TILE_TESTBUILDING_BOTTOMLEFT, theFile: "testbuilding-bottomleftcorner.png"},
        {worldType: TILE_TESTBUILDING_BOTTOMRIGHT, theFile: "testbuilding-bottomrightcorner.png"},
        
        {worldType: TILE_TEST_CONVENIENCE_STORELEFT, theFile: "test-convenience-leftcorner.png"},
        {worldType: TILE_TEST_CONVENIENCE_STOREMIDDLE, theFile: "test-convenience-middle.png"},
        {worldType: TILE_TEST_CONVENIENCE_STORERIGHT, theFile: "test-convenience-rightcorner.png"},
        {worldType: TILE_TEST_CONVENIENCE_STOREBOTTOMLEFT, theFile: "test-convenience-leftbottomcorner.png"},
        {worldType: TILE_TEST_CONVENIENCE_STOREBOTTOMMIDDLE, theFile: "test-convenience-middlebottom.png"},
        {worldType: TILE_TEST_CONVENIENCE_STOREBOTTOMRIGHT, theFile: "test-convenience-rightbottomcorner.png"}

    ];
    
    picsToLoad = imageList.length;
    
    for(let i=0;i<imageList.length;i++) {
		if(imageList[i].letName != undefined) {
			beginLoadingImage(imageList[i].letName, imageList[i].theFile);
		} else {
			loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
		}
	}
}

