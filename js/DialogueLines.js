var johnAndRoseConvo = [
    {
        scene: "neutral",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Hi there.",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "neutral",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Hi! How are you?",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "neutral",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [
        ["Good, how about you?", "Good end"],
        ["Meh", "Bad end"],
        ["I like tortles", "Tortle end"]
        ]

    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "I'm good. So how've you been?",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "I'm fine.",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Oh that's great.",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        hasChoices: false,
        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Hold on, let me just show the player that I also have an angry face portrait.",
        leftPic: johnPic2,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        hasChoices: false,
        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "GRRR",
        leftPic: johnPic2,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        hasChoices: false,
        choices: null
    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Uhh, oK, see ya",
        leftPic: johnPic,
        rightPic: rosePic2,

        leftPicLeave: false,
        rightPicLeave: false,

        hasChoices: false,
        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Hey, wait!",
        leftPic: johnPic2,
        rightPic: rosePic2,

        leftPicLeave: false,
        rightPicLeave: true,

        hasChoices: false,
        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "...",
        leftPic: johnPic2,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        hasChoices: false,
        choices: null
    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Just kidding!",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        hasChoices: false,
        choices: null
    },
    {
        scene: "Bad end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Yeah, I feel you.",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Bad end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Welp, gotta go!",
        leftPic: johnPic,
        rightPic: rosePic2,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Tortle end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "JONATHAN IS THAT YOU",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Tortle end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "BOI",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    }
];

var johnAndRoseConvo2 = [
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Hello!",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Oh, it's you again!",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Okay I'm gonna go now",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Ok",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    }
];

var johnAndRoseConvo3 = [
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Sorry I forgot to tell you somethi-",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Please, just go",
        leftPic: johnPic,
        rightPic: rosePic2,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Ok...",
        leftPic: johnPic2,
        rightPic: rosePic2,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "...",
        leftPic: johnPic2,
        rightPic: rosePic2,

        leftPicLeave: true,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "That's better",
        leftPic: null,
        rightPic: rosePic2,

        leftPicLeave: true,
        rightPicLeave: false,

        choices: null
    }
];
