var dialogueBoxPic = document.createElement("img");
var textArrowSheet = document.createElement("img");
var choiceCursorPic = document.createElement("img");

var inventoryPic = document.createElement("img");

var gameBorderPic = document.createElement("img");

var johnHappyPic = document.createElement("img");
var johnMadPic = document.createElement("img");
var roseHappyPic = document.createElement("img");
var roseAnnoyedPic = document.createElement("img");

var johnMouthAnimatedSheet = document.createElement("img");
var roseMouthAnimatedSheet = document.createElement("img");

var johnAnimation = document.createElement("img");

var johnSideAnimation = document.createElement("img");
var johnSide45Animation = document.createElement("img");

var johnIdleAnimation = document.createElement("img");


var building = document.createElement("img");

var picsToLoad = 0;
var worldPics = [];

function countLoadedImages() {
    picsToLoad--;
    if (picsToLoad == 0) {
        startGame();
    }
}

function beginLoadingImage(imageVar, fileName) {
    imageVar.onload = countLoadedImages;
    imageVar.src = "img/" + fileName;
}

function loadImageForWorldCode(worldCode, fileName) {
    worldPics[worldCode] = document.createElement("img");
	beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages() {
    var imageList = [
        //GAME UI
        {varName: dialogueBoxPic, theFile: "dialoguebox.png"},
        {varName: choiceCursorPic, theFile: "choicecursor.png"},
        {varName: gameBorderPic, theFile: "gameBorder.png"},
        {varName: inventoryPic, theFile: "inventory.png"},
        
        //PORTRAITS
        {varName: johnHappyPic, theFile: "john.png"},
        {varName: johnMadPic, theFile: "john2.png"},
        {varName: roseHappyPic, theFile: "rose.png"},
        {varName: roseAnnoyedPic, theFile: "rose2.png"},
        
        //PORTRAIT ANIMS
        {varName: johnMouthAnimatedSheet, theFile: "johnmouthmove.png"},
        {varName: roseMouthAnimatedSheet, theFile: "rosemouthmove.png"},
        
        //OVERWORLD CHARACTER ANIMS
        {varName: johnAnimation, theFile: "johnsprite-sheet.png"},
        {varName: johnIdleAnimation, theFile: "johnspriteidle-sheet.png"},
        {varName: johnSideAnimation, theFile: "johnspriteside-sheet.png"},
        {varName: johnSide45Animation, theFile: "johnspriteside45-sheet.png"},
        
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
    
    for(var i=0;i<imageList.length;i++) {
		if(imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else {
			loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
		}
	}
}

