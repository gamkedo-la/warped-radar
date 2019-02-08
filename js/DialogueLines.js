let JohnAndRose_1 = [
    {
        scene: "Greeting",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Hi, how are you?  I missed you last night.",
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
        text: "Oh. Yeah, sorry about that.  Something came up.",
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

        choices: [["Are you ok?", "YesOk"], ["What came up?", "ImNotWorried"]],

        position: {x: 501.5, y: 334}
    },
    {
        scene: "YesOk",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Yes, I'm fine.  I need to go now.",
        nextPage: null,
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
        text: "Nothing, I just... Sorry I didn't call.  Let's talk later, ok?",
        nextPage: 5,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 976.5, y: 426}
    },
];

let roseReallyNeedToGo = [
    {
        scene: "firstPage",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Wait! Where are you going?",
        nextPage: 1,
        leftPic: johnMadPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 513, y: -3020}
    },
    {
        scene: "secondPage",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Just running some errands.  I really need to go.",
        nextPage: null,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 515, y: -2750}
    }
];

let roseInquiry = [
    {
        scene: "firstPage",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Rose, my Uncle Dave is dead!",
        nextPage: 1,
        leftPic: johnMadPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 513, y: -3020}
    },
    {
        scene: "secondPage",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Oh no! What happened?",
        nextPage: 2,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 515, y: -2750}
    },
    {
        scene: "thirdPage",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "I don't know. I went visit him just now and his place is surrounded by cops and he's dead.",
        nextPage: 3,
        leftPic: johnMadPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 514, y: -2480}
    },
    {
        scene: "fourthPage",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "I'm so sorry John.",
        nextPage: 4,
        leftPic: johnHappyPic,
        rightPic: roseHappyPic,

        leftPicLeave: null,
        rightPicLeave: null,

        choices: null,

        position: {x: 514, y: -2170}
    },
    {
        scene: "fifthPage",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "I wish I had been there to protect him last night, but I had plans...",
        nextPage: 5,
        leftPic: johnMadPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 514, y: -1901}
    },
    {
        scene: "sixthPage",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "...",
        nextPage: 6,
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 514, y: -1610}
    },
    {
        scene: "seventhPage",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Wait! Where did you say you were last night?",
        nextPage: 7,
        leftPic: johnMadPic,
        rightPic: roseHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 515, y: -1340}
    },
    {
        scene: "eighthPage",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Something came up.",
        nextPage: 8,
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 514, y: -1050}
    },
    {
        scene: "ninthPage",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "What 'something'?",
        nextPage: 9,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 514, y: -780}
    },
    {
        scene: "tenthPage",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Are you accusing me of hurting your Uncle Dave?",
        nextPage: 10,
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 514, y: -510}
    },
    {
        scene: "eleventhPage",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["No, I just want to know.", "twelfthPage"], ["Well, where were you?", "fifteenthPage"]],

        position: {x: 514, y: -221}
    },
    {
        scene: "twelfthPage",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "I was at Julie's.",
        nextPage: 12,
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 504, y: 70}
    },
    {
        scene: "thirteenthPage",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "At Julie's!?! I thought you hated augmentation?",
        nextPage: 13,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 516, y: 346}
    },
    {
        scene: "fourteenthPage",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Well...I...I have to go",
        nextPage: null,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 517, y: 637}
    },
    {
        scene: "fifteenthPage",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "I was at Julie's.",
        nextPage: 15,
        leftPic: johnHappyPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 504, y: 70}
    },
    {
        scene: "sixteenthPage",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "At Julie's!?! I thought you hated augmentation?",
        nextPage: 16,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 516, y: 346}
    },
    {
        scene: "seventeenthPage",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "Well...I...I have to go",
        nextPage: null,
        leftPic: johnMadPic,
        rightPic: roseAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 517, y: 637}
    },
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
        nameCol: "purple",
        voice: voiceLow1,
        text: "I'm Agent Jen.  You can't enter here.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: npc_agentPic,

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
        text: "But this is my uncle's house.  What's going on?",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: npc_agentPic,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 140}
    },
    {
        scene: "thirdLine",
        who: "Agent",
        nameCol: "purple",
        voice: voiceLow1,
        text: "Ok.  Just a quick look, but only because I like your look.",
        nextPage: 3,
        leftPic: johnHappyPic,
        rightPic: npc_agentPic,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 140}
    }
];

let cop1Convo = [
    {
        scene: "firstLine",
        who: "Cop",
        nameCol: "darkBlue",
        voice: voiceLow1,
        text: "I'm a Cop, hear me roar.",
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
        who: "Cop",
        nameCol: "darkBlue",
        voice: voiceLow1,
        text: "That's going to be an expensive mistake.",
        nextPage: 2,
        leftPic: npc_agentPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 140}
    }
];
