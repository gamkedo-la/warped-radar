let dialogueBoxPic = document.createElement("img");
let textArrowSheet = document.createElement("img");
let choiceCursorPic = document.createElement("img");

let inventoryPic = document.createElement("img");
let brokenSkateboardPic = document.createElement("img");
let burnerPhonePic = document.createElement("img");
let crowbarPic = document.createElement("img");
let hoodiePic = document.createElement("img");
let medicalNotebookPic = document.createElement("img");
let sealedTubePic = document.createElement("img");
let thumbDrivePic = document.createElement("img");
let trainTicketPic = document.createElement("img");

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
    return picsToLoad == 0;
}

function beginLoadingImage(imageVar, fileName) {
    imageVar.onload = countLoadedImages;
    imageVar.src = "img/" + fileName;
    return countLoadedImages;
}

function loadImageForWorldCode(worldCode, fileName) {
    worldPics[worldCode] = document.createElement("img");
	return beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages() {
    let imageList = [
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

        //INVENTORY ITEMS
        {worldType: }
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

    let loadResult = false;
    for(let i=0;i<imageList.length;i++) {
		if(imageList[i].varName != undefined) {
			loadResult = beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else {
			loadResult = loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
		}
    }

    return loadResult;
}
