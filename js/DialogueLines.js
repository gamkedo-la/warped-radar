let JohnAndRose_1 = [
    {
        scene: "Greeting",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Hi, how are you?",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 501.5, y: -226}
    },
    {
        scene: "Response",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "I just got here. I don't know what's going on.",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 501.5, y: 44}
    },
    {
        scene: "Query",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Are you ok?", "YesOk"], ["Why are you so worried?", "ImNotWorried"]],

        position: {x: 501.5, y: 334}
    },
    {
        scene: "YesOk",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Yes, why wouldn't I be?",
        nextPage: 4,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 501.5, y: 604}
    },
    {
        scene: "ImNotWorried",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "I'm not worried!",
        nextPage: 5,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 976.5, y: 426}
    },
];

let johnAndRoseConvo = [
    {
        scene: "neutral",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Hi there.",
        nextPage: 1,
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
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

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

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Good, how about you?", "Good end"], ["Meh", "Bad end"], ["I like tortles", "Tortle end"]]
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "I'm good. So how've you been?",
        nextPage: 22,
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
        nextPage: 5,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

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

        leftPicLeave: false,
        rightPicLeave: false,

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

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Good end",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "GRRR!",
        nextPage: 8,
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
        text: "Uhh, ok, see ya.",
        nextPage: 9,
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

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

        leftPicLeave: false,
        rightPicLeave: true,

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
        nextPage: 12,
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
        nextPage: 13,
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
        nextPage: null,
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
        text: "Yay! Too bad, I have to go though.",
        nextPage: 15,
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
        nextPage: 16,
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
        nextPage: 17,
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
        nextPage: null,
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
        nextPage: 19,
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
        nextPage: 20,
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
        text: "JONATHAN IS THAT YOU?!",
        nextPage: 21,
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
        text: "BOI!!!",
        nextPage: 22,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Scene I inserted",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "You shouldn't just butt in like that.",
        nextPage: 4,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    }
];

let johnAndRoseConvo2 = [
        {
        scene: "A Basic Conversation",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Hello!",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "A Basic Conversation",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Oh, it's you again!",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "A Basic Conversation",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Okay I'm gonna go now.",
        nextPage: 3,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "A Basic Conversation",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Ok.",
        nextPage: 4,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    }
];

let johnAndRoseConvo3 = [
    {
        scene: "Convo3",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Sorry I forgot to tell you somethi-",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Convo3",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Please, just go.",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Convo3",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Ok...",
        nextPage: 3,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Convo3",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "...",
        nextPage: 4,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: true,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Convo3",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "That's better.",
        nextPage: 5,
        leftPic: null,
        rightPic: roseAnnoyedPic,

        leftPicLeave: true,
        rightPicLeave: false,

        choices: null
    }
];

let UncleDaveDiscovery = [
    {
        scene: "UncleDaveDiscovery",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Uncle Dave, I finally made it!",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: null,

        leftPicLeave: null,
        rightPicLeave: null,

        choices: null,

        position: {x: 659.5, y: -942}
    },
    {
        scene: "",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Uncle Dave, did you hear me?",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: null,

        leftPicLeave: null,
        rightPicLeave: null,

        choices: null,

        position: {x: 659.5, y: -672}
    },
    {
        scene: "",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Uncle Dave, are you there?",
        nextPage: 3,
        leftPic: johnHappyPic,
        rightPic: null,

        leftPicLeave: null,
        rightPicLeave: null,

        choices: null,

        position: {x: 659.5, y: -402}
    },
    {
        scene: "",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Uncle Dave!!!!!",
        nextPage: 4,
        leftPic: johnMadPic,
        rightPic: null,

        leftPicLeave: null,
        rightPicLeave: null,

        choices: null,

        position: {x: 659.5, y: -132}
    },
    {
        scene: "",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Oh no! What happened?",
        nextPage: 5,
        leftPic: johnMadPic,
        rightPic: null,

        leftPicLeave: null,
        rightPicLeave: null,

        choices: null,

        position: {x: 659.5, y: 138}
    },
    {
        scene: "",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Who did this?",
        nextPage: 6,
        leftPic: johnMadPic,
        rightPic: null,

        leftPicLeave: null,
        rightPicLeave: null,

        choices: null,

        position: {x: 659.5, y: 408}
    },
    {
        scene: "",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Uncle Dave, I'll figure this out if it's the last thing I do!",
        nextPage: 7,
        leftPic: johnMadPic,
        rightPic: null,

        leftPicLeave: null,
        rightPicLeave: null,

        choices: null,

        position: {x: 659.5, y: 678}
    },
];

let johnAndJulie_1 = [
    {
        scene: "page1",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "Welcome to Julie's Automail, I'm Julie.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: julieWorriedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 527.5, y: -308}
    },
    {
        scene: "page2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Hi, do you have any enhancements available for free?",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: julieWorriedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 527.5, y: -17}
    },
    {
        scene: "page3",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "I like your smile, but it won't put food on my table. Come back when you have Credits.",
        nextPage: 3,
        leftPic: johnHappyPic,
        rightPic: julieWorriedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 529.5, y: 273}
    },
];

let familyPhotoInJohnsRoom = [
    {
        scene: "firstLine",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "That was such a fun trip.  It has been such a long time since I saw Uncle Dave",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 140}
    },
    {
        scene: "secondLine",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "I need to go by his house and see how Uncle Dave doing.",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 430}
    },
];

let familyPhotoInDavesHouse = [
    {
        scene: "firstLine",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Strange...He was looking at that same photo of our fishing trip...",
        nextPage: 1,
        leftPic: johnMadPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 140}
    },
    {
        scene: "secondLine",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "I wonder why?",
        nextPage: 2,
        leftPic: johnMadPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 140}
    },
];

let wallOutletinJohnsHouse = [
    {
        scene: "firstLine",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Just a wall outlet.",
        nextPage: 1,
        leftPic: npc_agentPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 140}
    },
    {
        scene: "secondLine",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Nothing to see here.",
        nextPage: 2,
        leftPic: johnMadPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 140}
    }
];   


let npcConvo = [
    {
        scene: "firstLine",
        who: "Agent",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "I'm the pink-haired signpost.",
        nextPage: 1,
        leftPic: npc_agentPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 140}
    },
    {
        scene: "secondLine",
        who: "Agent",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Here I am, an agent of exposition. Blah blah important clue or maybe red herring blah blah blah",
        nextPage: 2,
        leftPic: npc_agentPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 140}
    }
];
