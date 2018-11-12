var inventory = new(function () {
    //adapted from Dan Dela Rosa's code from GINT!
    this.isShowing = false;
    this.x = 95;
    this.y = 110;

    var width = 624;
    var height = 390;

    var slots = new Array(8);

    var slotCols = 4;
    var slotRows = 2;

    var slotX = this.x + 50;
    var slotY = this.y + 60;
    var slotWidth = 90;
    var slotHeight = 85;
    var slotBetweenX = 55;
    var slotBetweenY = 25;

    var inventoryIndex = 0;

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

    this.initSlots = (function () {
        for (var i = 0; i < slots.length; i++) {
            slots[i] = -1;
        }
    })();

    this.update = function (keyCode) {
        if (this.isShowing) {
            switch (keyCode) {
                case KEY_RIGHT:
                    inventoryIndex++;
                    break;
                case KEY_LEFT:
                    inventoryIndex--;
                    break;
                case KEY_UP:
                    inventoryIndex -= 4;
                    break;
                case KEY_DOWN:
                    inventoryIndex += 4;
                    break;
                case KEY_SPACE:
                    //action - use item? give item?
                    break;
            }
            if (inventoryIndex >= slots.length) {
                inventoryIndex = inventoryIndex - slots.length;
            } else if (inventoryIndex < 0) {
                inventoryIndex = inventoryIndex + slots.length;
            }
        }
    }

    this.drawSlots = function () {
        if (this.isShowing) {
            var drawInvX = 0;
            var drawInvY = 0;

            for (var i = 0; i < slots.length; i++) {
                var itemCellX = slotX + ((slotWidth + slotBetweenX) * (i % slotCols));
                var itemCellY = slotY + ((slotHeight + slotBetweenY) * Math.floor(i / slotCols));

                canvasContext.save();
                if (i === inventoryIndex) {
                    canvasContext.fillStyle = 'yellow';
                } else {
                    canvasContext.globalAlpha = 0.5;
                    canvasContext.fillStyle = 'white';
                    canvasContext.globalAlpha = 1.0;
                }
                canvasContext.fillRect(itemCellX, itemCellY, slotWidth, slotHeight);
                canvasContext.restore();
            }
        }
    }


    this.drawUI = function () {
        if (this.isShowing) {
            canvasContext.drawImage(inventoryImg, this.x, this.y);
            colorText("Inventory", titleTextX, titleTextY, textColour, textFontFace, textAlign, 1);
        }
    }

})();
