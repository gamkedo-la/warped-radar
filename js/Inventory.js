let inventory = new(function () {
    this.isShowing = false;
    this.x = 95;
    this.y = 110;

    let navigationSound = voiceHigh2;

    let width = 624;
    let height = 390;

    let slots = new Array(8);

    let slotCols = 4;
    let slotRows = 2;

    let slotX = this.x + 50;
    let slotY = this.y + 60;
    let slotWidth = 90;
    let slotHeight = 85;
    let slotBetweenX = 55;
    let slotBetweenY = 25;

    let inventoryIndex = 0;

    let inventoryImg = inventoryPic;
    let textFontFace = "30px consolas";
    let textColour = "white";
    let textAlign = "left";

    let titleTextX = 320;
    let titleTextY = this.y + 40;

    let descFontFace = "20px consolas";
    let descX = this.x + width / 2;
    let descY = this.y + 200;

    this.inventoryItems = [];

    this.navigate = function (keyCode) {
        if (this.isShowing) {
            switch (keyCode) {
                case KEY_D:
                case KEY_RIGHT:
                    inventoryIndex++;
                    navigationSound.play();
                    break;
                case KEY_A:
                case KEY_LEFT:
                    inventoryIndex--;
                    navigationSound.play();
                    break;
                case KEY_W:
                case KEY_UP:
                    inventoryIndex -= 4;
                    navigationSound.play();
                    break;
                case KEY_S:
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
            let drawInvX = 0;
            let drawInvY = 0;

            for (let i = 0; i < slots.length; i++) {
                let itemCellX = slotX + ((slotWidth + slotBetweenX) * (i % slotCols));
                let itemCellY = slotY + ((slotHeight + slotBetweenY) * Math.floor(i / slotCols));

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
            for (let i = 0; i < inventory.inventoryItems.length; i++) {
                if (inventory.inventoryItems[i]) {
                    let itemCellX = slotX + ((slotWidth + slotBetweenX) * (i % slotCols));
                    let itemCellY = slotY + ((slotHeight + slotBetweenY) * Math.floor(i / slotCols));
                    canvasContext.fillStyle = "white";
                    canvasContext.drawImage(inventory.inventoryItems[i].image, itemCellX + 15,itemCellY + 15, slotWidth*0.66,slotHeight*0.66);
                }
            }
        }
    }

    this.drawItemDescription = function () {
      if (inventory.inventoryItems[inventoryIndex]) {
        colorText(inventory.inventoryItems[inventoryIndex].description, descX - 125,descY + 125, textFontFace, textFontFace, textAlign, 1);
      }
    }

    this.draw = function () {
        if (this.isShowing) {
            canvasContext.drawImage(inventoryImg, this.x, this.y);
            colorText("Inventory", titleTextX, titleTextY, textColour, textFontFace, 'center', 1);
            this.drawSlots();
            this.drawItemDescription();
            this.drawItems();
        } else {
            inventoryIndex = 0;
        }
    }

    this.toggle = function() {
        if (!levelEditor.isOn) {
            this.isShowing = !this.isShowing;
        }
    }

})();
