// TO-DO: reorganize cutscene manager

////////////////////////////////////////////////////////////////////////////////////////////////
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

testScene.sequence = [
   [1, testScene.playDialogue, convo], // [sceneStep, function, convo]
   [testScene.moveChar, player, 250, -30, "southeast", 3],
   [testScene.moveChar, player, 0, 100, "south", 3],
   [4, testScene.playDialogue, convo2],
   [testScene.moveChar, player, -100, -30, "west", 3],
   [6, testScene.playDialogue, convo3],
   [testScene.wait, 1]
];


////////////////////////////////////////////////////////////////////////////////////////////////


