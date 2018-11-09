var dialogueBoxPic = document.createElement("img");
var nameBoxPic = document.createElement("img");
var textArrowSheet = document.createElement("img");
var choiceCursorPic = document.createElement("img");

var inventoryPic = document.createElement("img");

var gameBorderPic = document.createElement("img");

var johnPic = document.createElement("img");
var johnPic2 = document.createElement("img");
var rosePic = document.createElement("img");
var rosePic2 = document.createElement("img");

var picsToLoad = 0;

function countLoadedImages() {
    picsToLoad--;
    if (picsToLoad == 0) {
        startGame();
    }
}

function beginLoadingImage(imageVar, fileName) {
    imageVar.onload = countLoadedImages;
    imageVar.src = fileName;
}

function loadImages() {
    var imageList = [
        {varName: dialogueBoxPic, theFile: "img/dialoguebox.png"},
        {varName: nameBoxPic, theFile: "img/namebox.png"},
        {varName: johnPic, theFile: "img/john.png"},
        {varName: johnPic2, theFile: "img/john2.png"},
        {varName: rosePic, theFile: "img/rose.png"},
        {varName: rosePic2, theFile: "img/rose2.png"},
        {varName: textArrowSheet, theFile: "img/textArrow.png"},
        {varName: choiceCursorPic, theFile: "img/choicecursor.png"},
        {varName: gameBorderPic, theFile: "img/gameBorder.png"},
        {varName: inventoryPic, theFile: "img/inventory.png"}
    ];
    
    picsToLoad = imageList.length;
    for (var i = 0; i < imageList.length; i++) {
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    }
}
