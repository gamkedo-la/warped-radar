var dialogueBoxPic = new Image();
var nameBoxPic = new Image();
var johnPic = new Image();
var johnPic2 = new Image();
var rosePic = new Image();
var rosePic2 = new Image();
var textArrowSheet = new Image();

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
        {varName: textArrowSheet, theFile: "img/textArrow.png"}
    ];
    
    picsToLoad = imageList.length;
    for (var i = 0; i < imageList.length; i++) {
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    }
}
