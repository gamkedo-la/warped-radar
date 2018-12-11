////////////////////////////////////////////////////////////////////////////////////////////////
let testScene = new CutScene();
let playTheScene = false;
this.xFinal = 100,
    this.yFinal = 20,
    this.speed = 7;

let convo = [
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Once upon a time there was a ball",
    },
    {
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "In the woods. It was a very nice ball."
    },
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "But then, someone came and took it...",
    },
    {
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Oh no!",
    }
];

let convo2 = [
    {
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Don't you have any better stories?"
    },
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "No."
    }
];

let convo3 = [
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "It's a classic though"
    }, {
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "..."
    },
    {
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Please stop"
    }
];

testScene.scenes = [
   [testScene.showDialogue, convo],
   [testScene.moveChar, player, 250, -30, "southeast", 3],
   [testScene.moveChar, player, 0, 100, "south", 3],
   [testScene.showDialogue, convo2],
   [testScene.moveChar, player, -100, -30, "west", 3],
   [testScene.showDialogue, convo3],
   [testScene.wait, 1]
];

function triggerTestScene() {
    if (playTheScene) {
        createCutscene(testScene);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////

function showCutsceneDialogue() {
    //
    /* Notes: 
    - scene step starts at 1
    fix:
    - end dialogue scene with wait:
        - if another dialogue event follows it
        - it is the last in the scene
    
    - Pass in the scene's step/dialogue here to show it on screen.. 
    */
    if (playingScene != null) {
        if (sceneStep == 1) testScene.showDialogue(convo);
        if (sceneStep == 4) testScene.showDialogue(convo2);
        if (sceneStep == 6) testScene.showDialogue(convo3);
    }
}
