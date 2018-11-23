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
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Oh no!",
    },
];

testScene.scenes = [
   [testScene.showDialogue, convo],
   [testScene.wait, 1],
   [testScene.showDialogue, convo],
   [testScene.wait, 3]
];
////////////////////////////////////////////////////////////////////////////////////////////////

function showCutsceneDialogue() {
    //scene step starts at 1?
    //end dialogue scenes with wait
    if (playingScene != null) {
        if (sceneStep == 1 || sceneStep == 3) testScene.showDialogue(convo);
    }
}
