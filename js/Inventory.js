var inventory = new(function () {
    this.isShowing = false;
    this.x = 95;
    this.y = 110;

    var inventoryImg = inventoryPic;

    var textFontFace = "30px consolas";
    var textColour = "white";
    var textAlign = "left";

    var titleTextX = 320;
    var titleTextY = this.y + 40;

   /* var inventoryItems = [
        {
            name: "Broken sunglasses",
            description: "Oh man, are these brand?! I can't tell. I wonder which would cost more, fixing these, or buying some new sunnies?",
            isObtained: ,
            giveTo:,
            canUseWith:,
            examine: 
        },
        {
            name: "Dog collar",
            description: ,
            isObtained: ,
            giveTo: ,
            canUseWith:,
            examine: 
        },
        {
            name: "Monthly club pass",
            description: ,
            isObtained: ,
            giveTo: ,
            canUseWith:,
            examine: 
        },
        {
            name: "Half eaten sandwich",
            description: ,
            isObtained: ,
            giveTo: ,
            canUseWith:,
            examine: 
        }
    ];*/

    this.draw = function () {
        if (this.isShowing) {
            canvasContext.drawImage(inventoryImg, this.x, this.y);
            colorText("Inventory", titleTextX, titleTextY, textColour, textFontFace, textAlign, 1);
        }
    }

})();
