var inventory = new(function () {
    this.isShowing = false;
    this.x = 95;
    this.y = 110;
    
    this.foundAddress = false;
    this.foundName = false;

    var inventoryImg = inventoryPic;

    var textFontFace = "30px consolas";
    var textColour = "white";
    var textAlign = "left";

    var titleTextX = 320;
    var titleTextY = this.y + 40;

    var inventoryItems = [
        {
            name: "Broken sunglasses",
            description: "Sunglasses... But we barely get any sun?",
            isObtained: false,
            giveTo: null,
            canUseWith: "Monthly club pass",
            
            examining: false,
            observations: ["Oh man, are these brand?! I can't tell. I wonder which would cost more, fixing these, or buying some new sunnies?", "Some cool sunglasses", "Hey.. Looks like there's something attached to it"],
            
            //0 index is a bark from player, second is the variable it changes - maybe it'll change in the code?
            newInformation: ["There's an address...", this.foundAddress]
        },
        {
            name: "Dog collar",
            description: "Wow, this looks like an antique",
            isObtained: false,
            giveTo: null,
            canUseWith: null,
            
            examining: false,
            observations: ["Hmm, whose borker does this belong to?", "I don't think I can do much with this..."],
            
            newInformation: null
        },
        {
            name: "Monthly club pass",
            description: "For the most lit club in town",
            isObtained: false,
            giveTo: null,
            canUseWith: null,
            
            examining: false,
            observations: ["Almost all the days have stickers on them... Looks like someone likes to have fun", "Huh. What's this chicken scratch on the back?"],
            
            newInformation: ["There's a name...", this.foundName]
        },
        {
            name: "Half eaten sandwich",
            description: "A coolio sammich",
            isObtained: false,
            giveTo: null,
            canUseWith: null,
            
            examining: false,
            observations: ["Oh, that's mine.", "That was a good sandwich"],
            
            newInformation: null
        }
    ];

    this.drawUI = function () {
        if (this.isShowing) {
            canvasContext.drawImage(inventoryImg, this.x, this.y);
            colorText("Inventory", titleTextX, titleTextY, textColour, textFontFace, textAlign, 1);
        }
    }

})();
