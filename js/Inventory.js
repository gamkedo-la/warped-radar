var inventory = new(function () {
    this.isShowing = false;
    this.x = 95;
    this.y = 110;

    var navigationSound = voiceHigh2;

    var width = 624;
    var height = 390;

    var slots = [-1, -1, -1, -1, -1, -1, -1, -1];

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

    var descFontFace = "20px consolas";
    var descX = this.x + width / 2;
    var descY = this.y + 200;


    /*var inventoryItems = [
        {
            name:,
            description: ,
            isObtained: ,
            uiSprite: 
        }
    ];*/

    this.navigate = function (keyCode) {
        if (this.isShowing) {
            switch (keyCode) {
                case KEY_RIGHT:
                    inventoryIndex++;
                    navigationSound.play();
                    break;
                case KEY_LEFT:
                    inventoryIndex--;
                    navigationSound.play();
                    break;
                case KEY_UP:
                    inventoryIndex -= 4;
                    navigationSound.play();
                    break;
                case KEY_DOWN:
                    inventoryIndex += 4;
                    navigationSound.play();
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
                    canvasContext.fillStyle = 'purple';
                } else {
                    canvasContext.fillStyle = 'darkblue';
                }
                canvasContext.fillRect(itemCellX, itemCellY, slotWidth, slotHeight);
                canvasContext.restore();
            }
        }
    }

    this.drawItems = function () {
        if (this.isShowing) {
            for (var i = 0; i < inventoryItems.length; i++) {
                if (inventoryItems[i].isObtained) {
                    var itemCellX = slotX + ((slotWidth + slotBetweenX) * (i % slotCols));
                    var itemCellY = slotY + ((slotHeight + slotBetweenY) * Math.floor(i / slotCols));
                    canvasContext.drawImage(inventoryItems[i].uiSprite, itemCellX, itemCellY);
                }
            }
        }
    }

    this.drawUI = function () {
        if (this.isShowing) {
            canvasContext.drawImage(inventoryImg, this.x, this.y);
            colorText("Inventory", titleTextX, titleTextY, textColour, textFontFace, textAlign, 1);
            
            this.drawSlots();
            //this.drawItems();
            
        } else {
            inventoryIndex = 0;
        }
    }

})();
