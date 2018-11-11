var dialogueBoxPic = document.createElement("img");
var textArrowSheet = document.createElement("img");
var choiceCursorPic = document.createElement("img");

var inventoryPic = document.createElement("img");

var gameBorderPic = document.createElement("img");

var johnPic = document.createElement("img");
var johnPic2 = document.createElement("img");
var rosePic = document.createElement("img");
var rosePic2 = document.createElement("img");

var johnMouthAnimatedSheet = document.createElement("img");
var roseMouthAnimatedSheet = document.createElement("img");


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
        {varName: dialogueBoxPic, theFile: "dialoguebox.png"},
        {varName: johnPic, theFile: "john.png"},
        {varName: johnPic2, theFile: "john2.png"},
        {varName: rosePic, theFile: "rose.png"},
        {varName: rosePic2, theFile: "rose2.png"},
        {varName: choiceCursorPic, theFile: "choicecursor.png"},
        {varName: gameBorderPic, theFile: "gameBorder.png"},
        {varName: inventoryPic, theFile: "inventory.png"},
        {varName: johnMouthAnimatedSheet, theFile: "johnmouthmove.png"},
        {varName: roseMouthAnimatedSheet, theFile: "rosemouthmove.png"},

        {worldType: TILE_GROUND, theFile: "ground.png"},
        {worldType: TILE_RANDOM, theFile: "random.png"}
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

