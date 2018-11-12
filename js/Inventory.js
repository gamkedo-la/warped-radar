var inventory = new(function () {
    //adapted from Dan Dela Rosa's code from GINT!
    this.isShowing = false;
    this.x = 95;
    this.y = 110;

    var width = 624;
    var height = 390;

    var numCols = 4;

    var itemCellX = this.x + 50;
    var itemCellY = this.y + 50;

    var itemCellWidth = 100;
    var itemCellHeight = 100;

    var itemCellBetweenX = 140;
    var itemCellBetweenY = 100;

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
            pickupImg: TILE_ITEM_SUNGLASSES,
            uiSprite: UIItem_sunglasses
        },
        {
            name: "Dog collar",
            description: "Wow, this looks like an antique",
            isObtained: false,
            pickupImg: TILE_ITEM_DOGCOLLAR,
            uiSprite: UIItem_dogCollar
        },
        {
            name: "Monthly club pass",
            description: "Oooh, one more until I can get a scratch and win",
            isObtained: false,
            pickupImg: TILE_ITEM_MEMBERSHIPCARD,
            uiSprite: UIItem_membershipCard
        },
        {
            name: "Half eaten sandwich",
            description: "A coolio sammich",
            isObtained: false,
            pickupImg: TILE_ITEM_SANDWICH,
            uiSprite: UIItem_sandwich
        }
    ];


    this.drawUI = function () {
        if (this.isShowing) {
            canvasContext.drawImage(inventoryImg, this.x, this.y);
            colorText("Inventory", titleTextX, titleTextY, textColour, textFontFace, textAlign, 1);

            for (var i = 0; i < inventoryItems.length; i++) {
                if (inventoryItems[i].isObtained) {
                    canvasContext.drawImage(inventoryItems[i].uiSprite, itemCellX + i * itemCellBetweenX, itemCellY);
                }
            }
        }
    }

})();
