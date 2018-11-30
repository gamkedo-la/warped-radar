let inventory = new(function () {
    this.isShowing = false;
    this.x = 95;
    this.y = 110;
    this.showActions = false;
    this.selectAction = false;
    this.index = 0;

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

    let inventoryImg = inventoryPic;
    let textFontFace = "30px consolas";
    let textColour = "white";
    let textAlign = "left";

    let titleTextX = 320 + 80;
    let titleTextY = this.y + 40;

    let descFontFace = "20px consolas";
    let descX = this.x + 60;
    let descY = this.y + 200;

    let itemActionCursorX = 0;
    let itemActionCursorY = 0;

    let actionCursor = 0;
    let selectedAction = -1;

    this.items = [];

    this.navigate = function (keyCode) {
        if (this.isShowing && !this.showActions && !this.selectAction) {
            switch (keyCode) {
                case KEY_D:
                case KEY_RIGHT:
                    this.index++;
                    navigationSound.play();
                    break;
                case KEY_A:
                case KEY_LEFT:
                    this.index--;
                    navigationSound.play();
                    break;
                case KEY_W:
                case KEY_UP:
                    this.index -= 4;
                    navigationSound.play();
                    break;
                case KEY_S:
                case KEY_DOWN:
                    this.index += 4;
                    navigationSound.play();
                    break;
                case KEY_SPACE:
                    //action - use item? give item?
                    break;
            }
            if (this.index >= slots.length) {
                this.index = this.index - slots.length;
            } else if (this.index < 0) {
                this.index = this.index + slots.length;
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
                if (i === this.index) {
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
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i]) {
                    let itemCellX = slotX + ((slotWidth + slotBetweenX) * (i % slotCols));
                    let itemCellY = slotY + ((slotHeight + slotBetweenY) * Math.floor(i / slotCols));
                    canvasContext.fillStyle = "white";
                    canvasContext.drawImage(inventory.items[i].image, itemCellX + 5, itemCellY + 5, slotWidth * 0.9, slotHeight * 0.9);
                }
            }
        }
    }


    this.drawItemDescription = function () {
        let descFontFace = "20px Consolas"
        if (!this.showActions && !this.selectAction) {
            if (this.items[this.index]) {
                colorText(this.items[this.index].name + ": ", descX, descY + 90, "yellow", descFontFace, textAlign, 1);
                colorText(this.items[this.index].description, descX, descY + 120, "white", descFontFace, textAlign, 1);
            }
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
            this.index = 0;
        }
    }

    this.interactWithItems = function () {
        var choiceColour;
        var actionfontFace = "20px Consolas";
        var textColour = "white";
        var selectedTextColour = "orange";
        var cursorTextColour = "yellow";
        var itemSpace = 30;
        if (this.isShowing) {
            if (this.showActions) {
                for (let i = 0; i < this.items[this.index].actions.length; i++) {
                    if (actionCursor == i) {
                        let cursorXOffset = 12;
                        let cursorYOffset = 17;
                        itemActionCursorX = descX - cursorXOffset;
                        itemActionCursorY = (descY + itemSpace * i) - cursorYOffset;
                        if (interact_key) {
                            choiceColour = selectedTextColour;
                        } else {
                            choiceColour = cursorTextColour;
                        }
                    } else {
                        choiceColour = textColour;
                    }
                    colorText(inventory.items[inventory.index].actions[i][0], 15 + descX, (descY + 95) + itemSpace * i, choiceColour, actionfontFace, textAlign, 1);
                }
            }
            if (this.selectAction && !this.showActions) {
                let letterCounter = 0;
                colorText(inventory.items[inventory.index].actions[actionCursor][1], 15 + descX, (descY + 95), choiceColour, actionfontFace, textAlign, 1);
            }
            this.updateActionCursor();
        }
    }

    this.updateActionCursor = function () {
        if (interact_key) {
            if (cursorKeyPresses === 1) {
                if (this.showActions) {
                    selectedAction = actionCursor;
                    this.showActions = false;
                    this.selectAction = true;
                }
            }
        }
        if (cursorUp && (this.showActions || this.selectAction)) {
            if (cursorKeyPresses === 1) {
                actionCursor--;
                navigationSound.play();
                if (actionCursor < 0) {
                    actionCursor += inventory.items[inventory.index].actions.length;
                }
            }
        }
        if (cursorDown && (this.showActions || this.selectAction)) {
            if (cursorKeyPresses === 1) {
                actionCursor = (actionCursor + 1) % inventory.items[inventory.index].actions.length;
                navigationSound.play();
                if (actionCursor > inventory.items[inventory.index].actions.length - 1) {
                    actionCursor = 0;
                }
            }
        }
        cursorKeyPresses = 0;
    }

    this.toggle = function () {
        if (!levelEditor.isOn) {
            this.isShowing = !this.isShowing;
        }
    }

})();
