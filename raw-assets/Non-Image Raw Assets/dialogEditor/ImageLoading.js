//Image Loading
let imageList = [];
const billboardSprites = [];

let picsToLoad = 0;

const johnHappyPic = document.createElement("img");
const johnMadPic = document.createElement("img");
const roseHappyPic = document.createElement("img");
const roseAnnoyedPic = document.createElement("img");
const julieHappyPic = document.createElement("img");
const julieWorriedPic = document.createElement("img");
const npcAgentFlatPic = document.createElement("img");
//const npcAgentAngryPic = document.createElement("img");
const fusionFlatPic = document.createElement("img");
//const fusionAngryPic = document.createElement("img");
const alexFlatPic = document.createElement("img");
const placeholderNormalPic = document.createElement("img");
//const placeholderAngryPic = document.createElement("img");

function imageForString(string) {
	switch(string) {
		case "johnHappyPic":
			return johnHappyPic;
		case "johnMadPic":
			return johnMadPic;
		case "roseHappyPic":
			return roseHappyPic;
		case "roseAnnoyedPic":
			return roseAnnoyedPic;
		case "julieHappyPic":
			return julieHappyPic;
		case "julieWorriedPic":
			return julieWorriedPic;
		case "npcAgentFlatPic":
			return npcAgentFlatPic;
		case "fusionFlatPic":
			return fusionFlatPic;
		case "alexFlatPic":
			return alexFlatPic;
		case "PlaceholderNormalPic":
			return placeholderNormalPic;
/*		case "npcAgentAngryPic":
			return npcAgentAngryPic;
		case "PlaceholderAngryPic":
			return placeholderAngryPic;*/
	}
}

function countLoadedImageAndLaunchIfReady() {
	picsToLoad--;
	fillRectangle(canvasContext, 0, 0, canvas.width, canvas.height, 'red');
	colorText(canvasContext, "LOADING", canvas.width / 2, canvas.height / 2, 'white', 34, 'center', opacity = 1);
	const numberText = "Remaining Images: " + picsToLoad.toString();
	colorText(canvasContext, numberText, canvas.width / 2, 2 * canvas.height / 3, 'white', 30, 'center', opacity = 1);
	if (picsToLoad == 0) { // last image loaded?
		loadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImageAndLaunchIfReady;	
	imgVar.src = "images/" + fileName;
}

function loadImages() {
	imageList = [
	   //PORTRAITS
	    {imgName: johnHappyPic, theFile: "john.png", speaker:Speaker.John},
	    {imgName: johnMadPic, theFile: "john2.png", speaker:Speaker.John},
	    {imgName: roseHappyPic, theFile: "rose.png", speaker:Speaker.Rose},
		{imgName: roseAnnoyedPic, theFile: "rose2.png", speaker:Speaker.Rose},
		{imgName: julieHappyPic, theFile: "julie1.png", speaker:Speaker.Julie}, 
		{imgName: julieWorriedPic, theFile: "julie1.png", speaker:Speaker.Julie},
		{imgName: npcAgentFlatPic, theFile: "npc_agent.png", speaker:Speaker.NPCAgent},
//		{imgName: npcAgentAngryPic, theFile: "npc_agent.png", speaker:Speaker.NPCAgent},//placeholder
		{imgName: fusionFlatPic, theFile: "NPC-Fusion-Portrait.png", speaker:Speaker.Fusion},
		{imgName: alexFlatPic, theFile: "NPC-Alex-Portrait.png", speaker:Speaker.Alex},//placeholder
		{imgName: placeholderNormalPic, theFile: "PlaceholderPortrait.png", speaker:Speaker.NPC},//placeholder
/*		{imgName: fusionAngryPic, theFile: "NPC-Fusion-Portrait.png", speaker:Speaker.Fusion},//placeholder
		
		{imgName: placeholderAngryPic, theFile: "PlaceholderPortrait.png", speaker:Speaker.Cat},//placeholder*/
	];

	picsToLoad = imageList.length;
	countLoadedImageAndLaunchIfReady();

	for (let i = 0; i < imageList.length; i++) {
		beginLoadingImage(imageList[i].imgName, imageList[i].theFile);
	}
}