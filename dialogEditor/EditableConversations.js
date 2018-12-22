//Conversations for Editing

//________________
//Only listed to prevent errors, not used in Dialog Editor
const voiceHigh1 = null;
const voiceHigh2 = null;
const voiceLow1 = null;
const voiceLow2 = null;
//_________________


let ATestDialog = [
    {
        scene: "neutral",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Hi there.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: null,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "neutral",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Hi! How are you?",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "neutral",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: [["Good, how about you?", "Good end"], ["Meh", "Bad end"], ["I like tortles", "Tortle end"]]
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "I'm good. So how've you been?",
        nextPage: 4,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "I'm fine.",
        nextPage: 5,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Oh that's great.",
        nextPage: 6,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Hold on, let me just show the player that I also have an angry face portrait.",
        nextPage: 7,
        leftPic: johnMadPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "GRRR",
        nextPage: 8,
        leftPic: johnMadPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Uhh, oK, see ya",
        nextPage: 9,
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Hey, wait!",
        nextPage: 10,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: true,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "...",
        nextPage: 11,
        leftPic: johnMadPic,
        rightPic: null,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Just kidding!",
        nextPage: 12,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Do you want to talk some more?",
        nextPage: 13,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: [["Yes", "Talk more"], ["No", "Really?"]]
    },
    {
        scene: "Talk more",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Yay! Too bad, I have to go though",
        nextPage: 15,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Talk more",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Let's talk later!",
        nextPage: 16,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Really?",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Really, are you sure?",
        nextPage: 17,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Really?",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: [["no", "Bad end"], ["actually, yes", "Talk more"]]
    },
    {
        scene: "Bad end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Yeah, I feel you.",
        nextPage: 19,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Bad end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Welp, gotta go!",
        nextPage: 20,
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Tortle end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "JONATHAN IS THAT YOU",
        nextPage: 21,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    },
    {
        scene: "Tortle end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "BOI",
        nextPage: 22,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: true,
        rightPicLeave: true,

        choices: null
    }
];

//CONVERSATIONS.push(ATestDialog);