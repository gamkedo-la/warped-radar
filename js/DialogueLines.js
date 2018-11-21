let johnAndRoseConvo = [
    {
        scene: "neutral",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Hi there.",
        leftPic: johnHappyPic,
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
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

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
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

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
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

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
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

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
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,
        
        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Hold on, let me just show the player that I also have an angry face portrait.",
        leftPic: johnMadPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "GRRR",
        leftPic: johnMadPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Uhh, oK, see ya",
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Hey, wait!",
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "...",
        leftPic: johnMadPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Just kidding!",
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Do you want to talk some more?",
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "",
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Yes", "Talk more"], ["No", "Really?"]]
    },
    {
        scene: "Talk more",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Yay! Too bad, I have to go though",
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Talk more",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Let's talk later!",
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
      {
        scene: "Really?",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Really, are you sure?",
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Really?",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "",
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["no", "Bad end"], ["actually, yes", "Talk more"]]
    },
    {
        scene: "Bad end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Yeah, I feel you.",
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

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
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

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
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

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
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    }
];

let johnAndRoseConvo2 = [
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Hello!",
        leftPic: johnHappyPic,
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
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Okay I'm gonna go now",
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Ok",
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    }
];

let johnAndRoseConvo3 = [
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Sorry I forgot to tell you somethi-",
        leftPic: johnHappyPic,
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
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Ok...",
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "...",
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

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
        rightPic: roseAnnoyedPic,

        leftPicLeave: true,
        rightPicLeave: false,

        choices: null
    }
];
