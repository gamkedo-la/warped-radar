var inventory = new(function () {
    this.isShowing = false;
    this.x = 95;
    this.y = 110;

    var inventoryImg = inventoryPic;

    var textFontFace = "30px consolas";
    var textColour = "white";
    var textAlign = "left";

    var titleTextX = 300;
    var titleTextY = this.y + 40;

    var inventoryItems = [
        {
            name: ,
            description: ,
            isObtained:
        },
        {
            name: ,
            description: ,
            isObtained:
        },
        {
            name: ,
            description: ,
            isObtained:
        },
        {
            name: ,
            description: ,
            isObtained:
        }
    ];

    this.draw = function () {
        if (this.isShowing) {
            canvasContext.drawImage(inventoryImg, this.x, this.y);
            //colorText("Inventory", titleTextX, titleTextY, textColour, textFontFace, textAlign, 1);
        }
    }

})();
