var johnAndRoseConvo = [
    {
        scene: "neutral",
        who: "John",
        nameCol: "lightblue",
        voice: voiceLow1,
        text: "Hello, how are you",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "neutral",
        who: "John",
        nameCol: "lightblue",
        voice: voiceHigh2,
        text: "",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [
        ["Good, how are you?", "Good end"],
        ["Meh", "Bad end"],
        ["I like tortles", "Tortle end"]
        ]

    },
    {
        scene: "Good end",
        who: "Rose",
        nameCol: "pink",
        voice: voiceHigh2,
        text: "I'm fine, how about you?",
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
        text: "This is horrible example dialogue. Also, I'm doing great, thanks for asking.",
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
        text: "OK, see ya",
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
        who: "Rose",
        nameCol: "blue",
        voice: voiceHigh2,
        text: "By the way, you're cool.",
        leftPic: null,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "John",
        nameCol: "blue",
        voice: voiceLow1,
        text: "Thanks Rose, couldn't have said it better myself.",
        leftPic: johnPic,
        rightPic: rosePic,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    }

];

var bobConvo = [
    {
        scene: "Bob is sad",
        who: "Bob",
        nameCol: "lightblue",
        voice: voiceLow2,
        text: "Hi I'm bobs.",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Bob is sad",
        who: "Bob",
        nameCol: "lightblue",
        voice: voiceLow2,
        text: "Oh that s was a typo I've had since birth. The accurate pronounciation is bob though.",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Bob is sad",
        who: "Bob",
        nameCol: "lightblue",
        voice: voiceLow2,
        text: "Sighs",
        leftPic: johnPic2,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Bob is sad",
        who: "Bob",
        nameCol: "lightblue",
        voice: voiceLow2,
        text: "Do you like my name?",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "Bob is sad",
        who: "Bob",
        nameCol: "lightblue",
        voice: voiceLow2,
        text: "",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: [["Yeah, of course", "happy"], ["no not really", "sad"]]
    },
    {
        scene: "happy",
        who: "Bob",
        nameCol: "lightblue",
        voice: voiceLow2,
        text: "Yeah me, t-",
        leftPic: johnPic2,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "happy",
        who: "Bob",
        nameCol: "lightblue",
        voice: voiceLow2,
        text: "Wait...",
        leftPic: johnPic2,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "happy",
        who: "Bob",
        nameCol: "lightblue",
        voice: voiceLow2,
        text: "You really like it?? That's the nicest thing anyone's ever told me",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "sad",
        who: "Bob",
        nameCol: "lightblue",
        voice: voiceLow2,
        text: "Oh....",
        leftPic: johnPic2,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        scene: "sad",
        who: "Bob",
        nameCol: "lightblue",
        voice: voiceLow2,
        text: "I guess I should've expected that",
        leftPic: johnPic2,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
];

var omigoshJohn = [
    {
        who: "John",
        voice: voiceLow1,
        nameCol: "blue",
        text: "ayeyo you done did it again",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "John",
        voice: voiceLow1,
        nameCol: "blue",
        text: "u srs bro",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    }
];

var omigoshBob = [
    {
        who: "Bob(s)",
        voice: voiceLow2,
        nameCol: "blue",
        text: "AAAAAAAAA",
        leftPic: johnPic2,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "Bob",
        voice: voiceLow2,
        nameCol: "blue",
        text: "M-my name.....",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "Bob",
        voice: voiceLow2,
        nameCol: "blue",
        text: "The s is gone?!?!?!",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    },
    {
        who: "Bob",
        voice: voiceLow2,
        nameCol: "blue",
        text: "I... I don't know what to feel.",
        leftPic: johnPic,
        rightPic: null,

        leftPicLeave: false,
        rightPicLeave: false,

        choices: null
    }
];
