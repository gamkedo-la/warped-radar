let dialogueBoxPic = document.createElement("img");
let textArrowSheet = document.createElement("img");
let choiceCursorPic = document.createElement("img");

let arrowPic = document.createElement("img");
let logoPic = document.createElement("img");

let johnSprite = new Image();

let notePic = document.createElement("img");
let motherboardPic = document.createElement("img");
let memoryChipPic = document.createElement("img");

let inventoryPic = document.createElement("img");

let gameBorderPic = document.createElement("img");

let johnHappyPic = document.createElement("img");
let johnMadPic = document.createElement("img");
let roseHappyPic = document.createElement("img");
let roseAnnoyedPic = document.createElement("img");
let julieWorriedPic = document.createElement("img");
let julieMadPic = document.createElement("img");
let julieAnnoyedPic = document.createElement("img");
let julieHappyPic = document.createElement("img");
let npc_agentPic = document.createElement("img");
let copPic = document.createElement("img");
let danPic = document.createElement("img");
let catManPic = document.createElement("img");
let fusionFlatPic = document.createElement("img");
let alexFlatPic = document.createElement("img");
let placeholderNormalPic = document.createElement("img");
let placeholderAngryPic = document.createElement("img");

let johnMouthAnimatedSheet = document.createElement("img");
let johnMouthAnimationAngrySheet = document.createElement("img");
let roseMouthAnimatedSheet = document.createElement("img");
let julieNormalMouthAnimatedSheet = document.createElement("img");
let julieMadMouthAnimatedSheet = document.createElement("img");
let jenMouthAnimatedSheet = document.createElement("img");
let fusionMouthAnimatedSheet = document.createElement("img");
let alexMouthAnimatedSheet = document.createElement("img");

let johnAnimationIdle = document.createElement("img");
let johnAnimationUp = document.createElement("img");
let johnAnimationUpDiag = document.createElement("img");
let johnAnimationDown = document.createElement("img");
let johnAnimationDownDiag = document.createElement("img");
let johnAnimationSide = document.createElement("img");

let roseAnimationIdle = document.createElement("img");
let roseAnimationWorry = document.createElement("img");
let roseAnimationUp = document.createElement("img");
let roseAnimationDown = document.createElement("img");
let roseAnimationSide = document.createElement("img");

let julieAnimationIdle = document.createElement("img");
let catManAnimationIdle = document.createElement("img");
let agentAnimationIdle = document.createElement("img");
let copAnimationIdle = document.createElement("img");
let danAnimationIdle = document.createElement("img");
let fusionAnimationIdle = document.createElement("img");
let alexAnimationIdle = document.createElement("img");

let daveIdle = document.createElement("img");

let rainEffectImage = document.createElement("img");
let fogEffectImage = document.createElement("img");
let dustEffectImage = document.createElement("img");
let perlinNoiseImage = document.createElement("img");
let trafficEffectImage = document.createElement("img");

let endGameImage = document.createElement("img");

let picsToLoad = 0;
let worldTiles = document.createElement("img");

function countLoadedImages() {
    picsToLoad--;

    if(picsToLoad == 0) {
        start();//This function initializes the game and sets up the gameLoop()
    }

    return picsToLoad == 0;
}

function beginLoadingImage(imageVar, fileName) {
    imageVar.onload = countLoadedImages;
    imageVar.src = "img/" + fileName;
    return countLoadedImages;
}

function loadImages() {
    let imageList = [
        //GAME UI
        {varName: dialogueBoxPic, theFile: "dialoguebox.png"},
        {varName: choiceCursorPic, theFile: "choicecursor.png"},
        {varName: gameBorderPic, theFile: "gameBorder.png"},
        {varName: inventoryPic, theFile: "inventory.png"},
        {varName: arrowPic, theFile: "UI/arrowPic.png"},
        {varName: logoPic, theFile: "UI/logoPic.png"},
        {varName: endGameImage, theFile: "UI/endscreen.png"},

        //PORTRAITS
        {varName: johnHappyPic, theFile: "john.png"},
        {varName: johnMadPic, theFile: "john2.png"},
        {varName: roseHappyPic, theFile: "rose.png"},
        {varName: roseAnnoyedPic, theFile: "rose2.png"},
        {varName: julieWorriedPic, theFile: "julie1.png"},
        {varName: julieMadPic, theFile: "julie2.png"},
        {varName: julieAnnoyedPic, theFile: "julie4.png"},
        {varName: julieHappyPic, theFile: "julie3.png"},
        {varName: npc_agentPic, theFile: "npc_agent.png"},
        {varName: copPic, theFile: "NPC-COP-Portrait.png"},
        {varName: danPic, theFile: "NPC-Dan-Portrait.png"},
        {varName: fusionFlatPic, theFile: "NPC-Fusion-Portrait.png"},
        {varName: alexFlatPic, theFile: "NPC-Alex-Portrait.png"},
        {varName: catManPic, theFile: "CatMan-Portrait.png"},
        {varName: placeholderNormalPic, theFile: "PlaceholderPortrait.png"},
        {varName: placeholderAngryPic, theFile: "PlaceholderPortrait.png"},

        //PORTRAIT ANIMS
        {varName: johnMouthAnimatedSheet, theFile: "johnmouthmove.png"},
        {varName: johnMouthAnimationAngrySheet, theFile: "johnmouthmove_angry.png"},
        {varName: roseMouthAnimatedSheet, theFile: "rosemouthmove.png"},
        {varName: julieNormalMouthAnimatedSheet, theFile: "juliemouthmove_1.png"},
        {varName: julieMadMouthAnimatedSheet, theFile: "juliemouthmove_crazy.png"},
        {varName: jenMouthAnimatedSheet, theFile: "NPC-Jen-MouthMove.png"},
        {varName: fusionMouthAnimatedSheet, theFile: "NPC-Fusion-MouthMove.png"},
        {varName: alexMouthAnimatedSheet, theFile: "NPC-Alex-MouthMove.png"},

        //OVERWORLD CHARACTER ANIMS
        {varName: johnSprite, theFile: "johnside.png"},
        {varName: johnAnimationUp, theFile: "johnsprite-sheet-UP.png"},
        {varName: johnAnimationDown, theFile: "johnsprite-sheet-DOWN.png"},
        {varName: johnAnimationSide, theFile: "johnsprite-sheet-SIDE.png"},
        {varName: johnAnimationUpDiag, theFile: "johnsprite-sheet-UP-DIAG.png"},
        {varName: johnAnimationDownDiag, theFile: "johnsprite-sheet-DOWN-DIAG.png"},
        {varName: johnAnimationIdle, theFile: "johnsprite-sheet-IDLE.png"},
        
        {varName: roseAnimationIdle, theFile: "rosesprite-sheet-IDLE.png"},
        {varName: roseAnimationWorry, theFile: "rosesprite-sheet-IDLE-WORRY.png"},
        {varName: roseAnimationSide, theFile: "rosesprite-sheet-SIDE.png"},
        {varName: roseAnimationUp, theFile: "rosesprite-sheet-UP.png"},
        {varName: roseAnimationDown, theFile: "rosesprite-sheet-DOWN.png"},

        {varName: julieAnimationIdle, theFile: "juliesprite-sheet-IDLE.png"},
        {varName: catManAnimationIdle, theFile: "catMan.png"},
        {varName: agentAnimationIdle, theFile: "npc_agent-idle.png"},
        {varName: fusionAnimationIdle, theFile: "NPC-Fusion-Sprite-IDLE.png"},
        {varName: copAnimationIdle, theFile: "NPC-COP-Sprite-IDLE.png"},
        {varName: danAnimationIdle, theFile: "NPC-Dan-Sprite-IDLE.png"},
        {varName: alexAnimationIdle, theFile: "NPC-Alex-Sprite-IDLE.png"},

        {varName: daveIdle, theFile: "DaveSprite_Dead.png"},

        //DEFAULT GAMESTART ITEMS
        {varName: notePic, theFile: "note.png"},
        {varName: motherboardPic, theFile: "motherboard.png" },
        {varName: memoryChipPic, theFile: "memory_chip.png"},

        //ALL TILES; 40px by 40px are in the "Tiles.png" file
        {varName: worldTiles, theFile: "Tiles.png"},

        //VEHICLES
        {varName: trafficEffectImage, theFile: "trafficEffect.png"},

        // SPECIAL EFFECTS
        {varName: rainEffectImage, theFile: "rain.png"},
        {varName: fogEffectImage, theFile: "fog.png"},
        {varName: dustEffectImage, theFile: "dustEffect.png"},
        {varName: perlinNoiseImage, theFile: "perlinNoise.png"},

    ];

    picsToLoad = imageList.length;

    let loadResult = false;

    for(let i=0;i<imageList.length;i++) {
  		if(imageList[i].varName != undefined) {
  			loadResult = beginLoadingImage(imageList[i].varName, imageList[i].theFile);
  		}
    }

    return loadResult;
}
