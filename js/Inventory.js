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
	let lineHeight = 25;
    let descX = this.x + 60;
    let descY = this.y + 200;

    let itemActionCursorX = 0;
    let itemActionCursorY = 0;

    let actionCursor = 0;
    let selectedAction = -1;
    let letterCounter = 0;

    this.items = [];

    this.navigate = function (keyCode) {
        if (this.isShowing && !this.showActions && !this.selectAction) {
            if (keysPressed(KEY_D) || keysPressed(KEY_RIGHT)) {
                this.index++;
                navigationSound.play();
            } else if (keysPressed(KEY_A) || keysPressed(KEY_LEFT)) {
                this.index--;
                navigationSound.play();
            } else if (keysPressed(KEY_W) || keysPressed(KEY_UP)) {
                this.index -= 4;
                navigationSound.play();
            } else if (keysPressed(KEY_S) || keysPressed(KEY_DOWN)) {
                this.index += 4;
                navigationSound.play();
            } else if (keysPressed(KEY_SPACE)) {
                //action - use item? give item?
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
                    if(Number.isInteger(inventory.items[i].image)) {
                        tileSet.drawTileAt(canvasContext, inventory.items[i].image, itemCellX + 5, itemCellY + 5, slotWidth * 0.9, slotHeight * 0.9);
                    } else {
                        canvasContext.drawImage(inventory.items[i].image, itemCellX + 5, itemCellY + 5, slotWidth * 0.9, slotHeight * 0.9);
                    }

                }
            }
        }
    }


    this.drawItemDescription = function () {
        if (!this.showActions && !this.selectAction) {
            if (this.items[this.index]) {
                colorText(this.items[this.index].name + ": ", descX, descY + 90, "yellow", descFontFace, textAlign, 1);
 				this.wrapText(this.items[this.index].description, descX, descY + 120, width - 110, lineHeight, descFontFace, 'white');
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
        let choiceColour;
        let actionfontFace = "20px Consolas";
        let textColour = "white";
        let selectedTextColour = "orange";
        let cursorTextColour = "yellow";
        let itemSpace = 30;

        if (this.isShowing) {
            if (this.showActions) {
                for (let i = 0; i < this.items[this.index].actions.length; i++) {
                    if (actionCursor == i) {
                        if (interact_key) {
                            choiceColour = selectedTextColour;
                        } else {
                            choiceColour = cursorTextColour;
                        }
                    } else {
                        choiceColour = textColour;
                    }
                    colorText(inventory.items[inventory.index].actions[i][0], 10 + descX, (descY + 95) + itemSpace * i, choiceColour, actionfontFace, textAlign, 1);
                }
            }
            if (this.selectAction && !this.showActions) {
                if (letterCounter < inventory.items[inventory.index].actions[actionCursor][1].length) {
                    letterCounter += 1;
	                //floored in case letter speed is changed
	                if ((Math.floor(letterCounter) % 2) == 0) {
						inventoryChoiceSound.play();
	                }
                } else {
                    if (interact_key) {
                        this.selectAction = false;
                        this.showActions = false;
                        letterCounter = 0;
                        selectedAction = -1;
                        actionCursor = 0;
                    }
                }

                let typewriterText = inventory.items[inventory.index].actions[actionCursor][1].substr(0, letterCounter);
				this.wrapText(typewriterText, descX, (descY + 95), width - 110, lineHeight, actionfontFace, choiceColour);
            }
            this.updateActionCursor();
        }
    }

    this.updateActionCursor = function () {
        if (interact_key) {
            if (cursorKeyPresses === 1) {
                if (this.showActions && !this.selectAction) {
                    selectedAction = actionCursor;
                    this.showActions = false;
                    this.selectAction = true;
                }
            }
        }
        if (cursorUp && (this.showActions && !this.selectAction)) {
            if (cursorKeyPresses === 1) {
                actionCursor--;
                navigationSound.play();
                if (actionCursor < 0) {
                    actionCursor += inventory.items[inventory.index].actions.length;
                }
            }
        }
        if (cursorDown && (this.showActions && !this.selectAction)) {
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


    this.getWordsAndBreaksFromString = function (dialogueWords) {
    	let breaks = dialogueWords.split("\n"),
    		newLines = "";
   		 for (let i = 0; i < breaks.length; i++) {
    		newLines = newLines + breaks[i] + "  Gamkedo  ";
   		 }
		 let words = newLines.split(" ");
		 return words;
    }

    this.wrapText = function (dialogueWords, x, y, maxWidth, lineHeight, font, colour) {
        let words = this.getWordsAndBreaksFromString(dialogueWords),
            checkEndOfLine, checkTextWidth, textWidth;
        let line = "";

		let oldFont = canvasContext.font;
		canvasContext.font = descFontFace; // to correctly measure text
        for (let i = 0; i < words.length; i++) {
            if (words[i] != "Gamkedo") {
                checkEndOfLine = line + words[i] + " ";
                checkTextWidth = canvasContext.measureText(checkEndOfLine);
                textWidth = checkTextWidth.width;
                if (textWidth > maxWidth && i > 0) {
                    colorText(line, x, y, colour, descFontFace, textAlign, 1);
                    line = words[i] + " ";
                    y += lineHeight;
                } else {
                    line = checkEndOfLine;
                }
            } else {
                colorText(line, x, y, colour, descFontFace, textAlign, 1);
                line = "";
                y += lineHeight;
            }
        }
		canvasContext.font = oldFont; // reset so it doesn't mess with other code
    }

})();
