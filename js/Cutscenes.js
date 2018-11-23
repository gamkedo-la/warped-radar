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
        text: "Hi there.",
    },
    {
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "hi"
    }
];

testScene.scenes = [
   [testScene.moveChar, player.x, player.y, this.xFinal, this.yFinal, this.speed],
   [testScene.wait, 5],
   [testScene.showDialogue, convo, 10],
   [testScene.wait, 10]
];
////////////////////////////////////////////////////////////////////////////////////////////////
