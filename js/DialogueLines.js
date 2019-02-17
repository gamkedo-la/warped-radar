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
        text: "I was at Rachel's.",
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
        text: "At Rachel's!?! But that's in Ampere.  Why did you go there?",
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
        text: "I was at Rachel's.",
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
        text: "At Rachel's!?! But that's in Ampere.  Why did you go there?",
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

let julieConvo2 = [
    {
        scene: "page1",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "Hey John, is that no good Alex still outside?",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: julieWorriedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 517.5, y: -394}
    },
    {
        scene: "page2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: julieWorriedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Yes", "page3"], ["No", "page4"]],

        position: {x: 517.5, y: -104}
    },
    {
        scene: "page3",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "That's it! I'm calling Agent Jen to take care of him.",
        nextPage: 4,
        leftPic: johnHappyPic,
        rightPic: julieAnnoyedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 84.5, y: -36}
    },
    {
        scene: "page4",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "He isn't?... I wonder why not...",
        nextPage: 5,
        leftPic: johnHappyPic,
        rightPic: julieWorriedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 981.5, y: -2}
    },
    {
        scene: "page5",
        who: "Cat",
        nameCol: "yellow",
        voice: voiceLow1,
        text: "Don't bring her here! I'll get rid of him.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: catManPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 84.5, y: 254}
    },
    {
        scene: "page6",
        who: "Cat",
        nameCol: "yellow",
        voice: voiceLow1,
        text: "See, I told you I'd take care of him.",
        nextPage: 6,
        leftPic: johnHappyPic,
        rightPic: catManPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 983.5, y: 268}
    },
    {
        scene: "page7",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "That's not what I meant and you know it...",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: julieMadPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 982.5, y: 538}
    },
];

let julieConvo3 = [
    {
        scene: "page1",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "Hey John, do you see any enhancements you like?",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: julieHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 492.5, y: -377}
    },
    {
        scene: "page2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: julieHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Julie, you know what I think about enhancements.", "page3"], ["Nothing I can afford without a discount for having such an amazing smile.", "page7"]],

        position: {x: 492.5, y: -87}
    },
    {
        scene: "page3",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "I do, but people change their minds.  Plus, Fusion just posted an article proving you're wrong about the problem. Here I'll transfer it to you.",
        nextPage: 3,
        leftPic: johnHappyPic,
        rightPic: julieMadPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 99.5, y: -19}
    },
    {
        scene: "page4",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: julieMadPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["That's ok, I've seen all the proof I need.", "page5"], ["Ok, I'll take a look at it...later...", "page6"]],

        position: {x: 99.5, y: 331}
    },
    {
        scene: "page5",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "Alright, but I think you're really missing out.  We've got some pretty cool stuff.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: julieWorriedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: -317.5, y: 396}
    },
    {
        scene: "page6",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "Sure you will... Well, there it is.  Let me know if you actually read it.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: julieWorriedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 509.5, y: 451}
    },
    {
        scene: "page7",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "You know I love that smile, but I think Felen wants some Credits for his work this week.  Even if he wasn't here last night like he was supposed to be.",
        nextPage: 7,
        leftPic: johnHappyPic,
        rightPic: julieHappyPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 971.5, y: 87}
    },
    {
        scene: "page8",
        who: "Cat",
        nameCol: "yellow",
        voice: voiceLow1,
        text: "I better get paid!",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: catManPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 971.5, y: 437}
    },
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
        rightPic: julieHappyPic,

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
        rightPic: julieHappyPic,

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
        rightPic: julieAnnoyedPic,

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

let jenConvo1 = [
    {
        scene: "firstLine",
        who: "Jen",
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
        who: "Jen",
        nameCol: "purple",
        voice: voiceLow1,
        text: "You're cute, but I can't let you in.  You need to go to the police station.",
        nextPage: 3,
        leftPic: johnHappyPic,
        rightPic: npc_agentPic,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 140}
    }
];

let jenConvo2 = [
    {
        scene: "page1",
        who: "Jen",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "I'm Agent Jen.  You can't enter here.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: npc_agentPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 965, y: 140}
    },
    {
        scene: "page2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: npc_agentPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["But this is my Uncle's House.  What's going on?", "page3"], ["But Fusion sent me and I'm trying to go see my Uncle Dave.", "page4"]],

        position: {x: 965, y: 430}
    },
    {
        scene: "page3",
        who: "Jen",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "You need to go to the police station and see if they can help you out.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: npc_agentPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 485, y: 503}
    },
    {
        scene: "page4",
        who: "Jen",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "Ok, but just a quick look around and don't touch ANYTHING!",
        nextPage: 4,
        leftPic: johnHappyPic,
        rightPic: npc_agentPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 1406, y: 557}
    }
];

let jenConvo3 = [
    {
        scene: "page1",
        who: "Jen",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "Back again?",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: npc_agentPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 965, y: 140}
    },
    {
        scene: "page2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "Yes, Fusion sent me back.",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: npc_agentPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 965, y: 410}
    },
    {
        scene: "page3",
        who: "Jen",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "Ok, but just a quick look around, don't tell anyone I let you in.",
        nextPage: 3,
        leftPic: johnHappyPic,
        rightPic: npc_agentPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 965, y: 680}
    },
    {
        scene: "page4",
        who: "Jen",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "and don't touch ANYTHING!",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: npc_agentPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 965, y: 969}
    },
];

let confessorConvo1 = [
    {
        scene: "firstLine",
        who: "Cop",
        nameCol: "darkBlue",
        voice: voiceLow1,
        text: "I'm Detective Dan.  I work in Homicide.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: copPic,

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
        text: "If you're looking for enhancements, you've come to the wrong place.  Go find that street dealer Fusion.",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: null,

        choices: null,

        position: {x: 492.5, y: 140}
    }
];

let copConvo1 = [
    {
        scene: "firstLine",
        who: "Cop",
        nameCol: "darkBlue",
        voice: voiceLow1,
        text: "Move along.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 492.5, y: 140}
    },
    {
        scene: "secondLine",
        who: "Cop",
        nameCol: "darkBlue",
        voice: voiceLow1,
        text: "Nothing to see here.",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 492.5, y: 140}
    }
];

let copConvo3 = [
    {
        scene: "page1",
        who: "Cop",
        nameCol: "darkBlue",
        voice: voiceLow1,
        text: "You shouldn't be here.  Who let you in?",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 492.5, y: 140}
    },
    {
        scene: "page2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Agent Jen.", "page3"], ["Nobody. I'm just looking for my Uncle Dave.", "page5"]],

        position: {x: 505.5, y: 324}
    },
    {
        scene: "page3",
        who: "Cop",
        nameCol: "darkBlue",
        voice: voiceLow1,
        text: "That's the second strange thing she did today.",
        nextPage: 3,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 492.5, y: 140}
    },
    {
        scene: "page4",
        who: "Cop",
        nameCol: "darkBlue",
        voice: voiceLow1,
        text: "The first was telling me to throw out this broken skateboard...",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 492.5, y: 140}
    },
    {
        scene: "page5",
        who: "Cop",
        nameCol: "darkBlue",
        voice: voiceLow1,
        text: "Well you need to get out of here!",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 492.5, y: 140}
    }
];

let copConvo2 = [
    {
        scene: "firstLine",
        who: "Cop",
        nameCol: "darkBlue",
        voice: voiceLow1,
        text: "You shouldn't be here.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 492.5, y: 140}
    },
    {
        scene: "secondLine",
        who: "Cop",
        nameCol: "darkBlue",
        voice: voiceLow1,
        text: "You need to leave immediately.",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 492.5, y: 140}
    }
];

let julieCatArgument = [
    {
        scene: "page1",
        who: "Cat",
        nameCol: "yellow",
        voice: voiceLow1,
        text: "Hi, I'm Felen.  Julie hired me to run her shop.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: catManPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 452, y: -535}
    },
    {
        scene: "page2",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "I HIRED you to watch the shop at night! Where were you last night?",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: julieWorriedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 452, y: -245}
    },
    {
        scene: "page3",
        who: "Cat",
        nameCol: "yellow",
        voice: voiceLow1,
        text: "I had some business to take care of.",
        nextPage: 3,
        leftPic: johnHappyPic,
        rightPic: catManPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 451, y: 44}
    },
    {
        scene: "page4",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "Your business was to watch the shop.",
        nextPage: 4,
        leftPic: johnHappyPic,
        rightPic: julieWorriedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 452, y: 335}
    },
    {
        scene: "page5",
        who: "Cat",
        nameCol: "yellow",
        voice: voiceLow1,
        text: "Yeah? Well, where were YOU last night? Huh?",
        nextPage: 5,
        leftPic: johnHappyPic,
        rightPic: catManPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 452, y: 625}
    },
    {
        scene: "page6",
        who: "Julie",
        nameCol: "#b12f0c",
        voice: voiceHigh2,
        text: "None of your business. Get back to work!",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: julieWorriedPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 451, y: 915}
    },
];

let fusionConvo = [
    {
        scene: "page1",
        who: "Fusion",
        nameCol: "#b09145",
        voice: voiceLow1,
        text: "The name's Fusion.  You looking for some enhancements?",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: fusionFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 505.5, y: 34}
    },
    {
        scene: "page2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: fusionFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Yes, I just can't keep up and I need a job.", "page3"], ["No, I think they ruined Ohm City and I refuse to become part of the refuse.", "page7"]],

        position: {x: 505.5, y: 324}
    },
    {
        scene: "page3",
        who: "Fusion",
        nameCol: "#b09145",
        voice: voiceLow1,
        text: "Well, they don't come cheap but I can make you a better deal than Julie.",
        nextPage: 3,
        leftPic: johnHappyPic,
        rightPic: fusionFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 503.5, y: 679}
    },
    {
        scene: "page4",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: fusionFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["I don't have any Credits", "page5"], ["Can I do a job for you to earn the Credits I need?", "page6"]],

        position: {x: 511.5, y: 990}
    },
    {
        scene: "page5",
        who: "Fusion",
        nameCol: "#b09145",
        voice: voiceLow1,
        text: "Well, I can do it cheap, but not that cheap.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: fusionFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 90.5, y: 1060}
    },
    {
        scene: "page6",
        who: "Fusion",
        nameCol: "#b09145",
        voice: voiceLow1,
        text: "Go talk to Agent Jen and come back.  Then we'll see what can be done.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: fusionFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 937.5, y: 1077}
    },
    {
        scene: "page7",
        who: "Fusion",
        nameCol: "#b09145",
        voice: voiceLow1,
        text: "I hear you man.  Stay strong.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: fusionFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 964.5, y: 452}
    },
];

let fusionConvo2 = [
    {
        scene: "page1",
        who: "Fusion",
        nameCol: "#b09145",
        voice: voiceLow1,
        text: "I heard about your Uncle Dave.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: fusionFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 622.5, y: 140}
    },
    {
        scene: "page2",
        who: "Fusion",
        nameCol: "#b09145",
        voice: voiceLow1,
        text: "Here, take this. It'll help you figure out who did it.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: fusionFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 622.5, y: 410}
    },
];

let fusionConvo3 = [
    {
        scene: "page1",
        who: "Fusion",
        nameCol: "#b09145",
        voice: voiceLow1,
        text: "I'd love to help more, but that's all I know.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: fusionFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 622.5, y: 140}
    },
    {
        scene: "page2",
        who: "Fusion",
        nameCol: "#b09145",
        voice: voiceLow1,
        text: "Come back when you have some Creds and we'll do that enhancement.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: fusionFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 622.5, y: 410}
    },
];

let alexConvo1 = [
    {
        scene: "page1",
        who: "Alex",
        nameCol: "#c26682",
        voice: voiceLow1,
        text: "Hey man, you got any Creds?  I just need a couple more to get another enhancement.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 449.5, y: 139}
    },
    {
        scene: "page2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["No, get your own!", "snubbedAlex"], ["Sorry, I don't.  Have you asked Julie if she can float you a few?", "page4"]],

        position: {x: 450.5, y: 448}
    },
    {
        scene: "snubbedAlex",
        who: "Alex",
        nameCol: "#c26682",
        voice: voiceLow1,
        text: "Whoa!  Don't glitch on me bro!  Good luck but don't ask me for any help later...",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 46.5, y: 530}
    },
    {
        scene: "page4",
        who: "Alex",
        nameCol: "#c26682",
        voice: voiceLow1,
        text: "I haven't.  Maybe you can put in a good word for me?  I go by 'Alex', it was a pleasure to meet you.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 897.5, y: 573}
    },
];

let alexConvo2 = [
    {
        scene: "page1",
        who: "Alex",
        nameCol: "#c26682",
        voice: voiceLow1,
        text: "Hey man, you got any Creds you can spare?  I came up a few short for my next enhancement.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 455.5, y: 95}
    },
    {
        scene: "page2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["No", "snubbedAlex"], ["You should go see Fusion, I think he could help you out.", "page4"]],

        position: {x: 455.5, y: 405}
    },
    {
        scene: "snubbedAlex",
        who: "Alex",
        nameCol: "#c26682",
        voice: voiceLow1,
        text: "Huh.  Well don't ask me for any help in the future...",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 45.5, y: 472}
    },
    {
        scene: "page4",
        who: "Alex",
        nameCol: "#c26682",
        voice: voiceLow1,
        text: "Thanks man, I appreciate the recommendation.  They call me 'Alex', let me know if you need anything.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 923.5, y: 437}
    },
];

let alexConvo3 = [
    {
        scene: "page1",
        who: "Alex",
        nameCol: "#c26682",
        voice: voiceLow1,
        text: "Good to see you again John.  Any chance you could spare a couple of Creds for a brother?",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 448.5, y: 140}
    },
    {
        scene: "page2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["No", "snubbedAlex"], ["You should go see Fusion, I think he could help you out.", "page4"]],

        position: {x: 448.5, y: 450}
    },
    {
        scene: "snubbedAlex",
        who: "Alex",
        nameCol: "#c26682",
        voice: voiceLow1,
        text: "Huh.  Well, don't ask me for any help later...",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 23.5, y: 502}
    },
    {
        scene: "page4",
        who: "Alex",
        nameCol: "#c26682",
        voice: voiceLow1,
        text: "Thanks man, I think I will.  I appreciate the recommendation.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 940.5, y: 542}
    },
];

let alexConvo4 = [
    {
        scene: "firstLine",
        who: "Alex",
        nameCol: "#c26682",
        voice: voiceLow1,
        text: "Go away glitch!.",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 492.5, y: 140}
    },
    {
        scene: "secondLine",
        who: "Alex",
        nameCol: "#c26682",
        voice: voiceLow1,
        text: "I got nothin' to say to you, glitch.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: alexFlatPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 492.5, y: 140}
    }
];

let accusation = [
    {
        scene: "accusation1",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "I figured it out!",
        nextPage: 1,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: -439, y: -560}
    },
    {
        scene: "accusation2",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "Oh yeah? Who did it then?",
        nextPage: 2,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: -439, y: -290}
    },
    {
        scene: "accusation3",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Rose", "accusationRose1"], ["Julie", "accusationJulie1"], ["Felen", "accusationFelen1"], ["Agent Jen", "accusationJen1"]],

        position: {x: -437, y: -18}
    },
    {
        scene: "accusationRose1",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "Huh.  Got any evidence?",
        nextPage: 4,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: -938, y: 28}
    },
    {
        scene: "accusationRose2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Medical Notebook", "accusationRoseSuccess"], ["Hoodie", "accusationRoseFail"], ["Thumb Drive", "accusationRoseFail"], ["Crowbar", "accusationRoseFail"]],

        position: {x: -938, y: 298}
    },
    {
        scene: "accusationRoseSuccess",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "That's amazing kid!  You're absolutely right! You should be a detective.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: -1468, y: 143}
    },
    {
        scene: "accusationRoseFail",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "Nice try.  I don't think that's quite right.  You might need to keep looking for more evidence.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: -1466, y: 430}
    },
    {
        scene: "accusationJulie1",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "Huh. Got any evidence?",
        nextPage: 8,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: -440, y: 329}
    },
    {
        scene: "accusationJulie2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Medical Notebook", "accusationJulieFail"], ["Hoodie", "accusationJulieSuccess"], ["Thumb Drive", "accusationJulieFail"], ["Crowbar", "accusationJulieFail"]],

        position: {x: -440, y: 599}
    },
    {
        scene: "accusationJulieFail",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "Nice try.  I don't think that's quite right.  You might need to keep looking for more evidence.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: -974, y: 667}
    },
    {
        scene: "accusationJulieSuccess",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "That's amazing kid!  You're absolutely right!  You should be a detective.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: -974, y: 977}
    },
    {
        scene: "accusationFelen1",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "Huh.  Got any evidence?",
        nextPage: 12,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 58, y: -122}
    },
    {
        scene: "accusationFelen2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Medical Notebook", "accusationFelenFail"], ["Hoodie", "accusationFelenFail"], ["Thumb Drive", "accusationFelenSuccess"], ["Corwbar", "accusationFelenFail"]],

        position: {x: 566, y: -173}
    },
    {
        scene: "accusationFelenFail",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "Nice Try.  I don't think that's quite right.  You might need to keep looking for more evidence.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 571, y: 142}
    },
    {
        scene: "accusationFelenSuccess",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "That's amazing kid!  You're absolutely right!  You should be a detective.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 977, y: 59}
    },
    {
        scene: "accusationJen1",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "Huh.  Got any evidence?",
        nextPage: 16,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 53, y: 154}
    },
    {
        scene: "accusationJen2",
        who: "John",
        nameCol: "lightBlue",
        voice: voiceLow1,
        text: "",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Medical Notebook", "accusationJenFail"], ["Hoodie", "accusationJenFail"], ["Thumb Drive", "accusationJenFail"], ["Crowbar", "accusationJenSuccess"]],

        position: {x: 53, y: 424}
    },
    {
        scene: "accusationJenFail",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "Nice Try.  I don't think that's quite right.  You might need to keep looking for more evidence.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 509, y: 552}
    },
    {
        scene: "accusationJenSuccess",
        who: "Dan",
        nameCol: "#223344",
        voice: voiceHigh2,
        text: "That's amazing kid!  You're absolutely right!  You should be a detective.",
        nextPage: null,
        leftPic: johnHappyPic,
        rightPic: copPic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null,

        position: {x: 44, y: 799}
    },
];