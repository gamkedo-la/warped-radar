////////////////////////////////////////////////////////////////////////////////////////////////
var testScene = new cutscene();
    this.xFinal = 100,
    this.yFinal = 20,
    this.speed = 7;

var convo = [
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
    },
];

var convo2 = [
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

var convo3 = [
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
   [testScene.wait, 1],
   [testScene.showDialogue, convo2],
   [testScene.wait, 2],
   [testScene.showDialogue, convo3],
   [testScene.wait, 3]
];
////////////////////////////////////////////////////////////////////////////////////////////////

function showCutsceneDialogue() {
    //scene step starts at 1?
    //end dialogue scenes with wait
    //also remember to pass in the scene's step/dialogue here for multiple dialogues in one scene
    if (playingScene != null) {
        if (sceneStep == 1) testScene.showDialogue(convo);
        if (sceneStep == 3) testScene.showDialogue(convo2);
        if (sceneStep == 5) testScene.showDialogue(convo3);
    }
}
