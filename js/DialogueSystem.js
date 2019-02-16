function Dialogue() {
    this.isShowing = false;
    this.letterCounter = 0;
    this.page = -1;
    this.setPage = function(newPage) {
        this.page = newPage;
    };

    this.speakerAlpha = 0.0;
    this.speakerAlpha2 = 0.0;
    this.alphaChange = 0.2;

    this.speakerStartX = -310;
    this.speakerX = this.speakerStartX;
    this.speaker2StartX = 800;
    this.speaker2X = this.speaker2StartX;

    let speakerFinalX = 50;
    let speaker2FinalX = 480;
    let speakerY = 80;
    let speaker2Y = speakerY;

    let tweenInSpeed = 20;
    let tweenOutSpeed = 40;

    let dialogueBoxImage = dialogueBoxPic;

    let dialogueBoxX = 0;
    let dialogueBoxY = 470;

    let textXBuffer = 30;
    let textYBuffer = 40;
    let textX = dialogueBoxX + textXBuffer;
    let textY = dialogueBoxY + textYBuffer;
    let textColour = "white";
    let textFontFace = "25px consolas";
    let textAlign = "left";

    let line;
    let letterSpeed = 1;
    let maxWidth = 210;
    let lineHeight = 30;
    let paused = false;

    let choiceColour;
    let chose = false;
    let showingChoiceMenu = false;
    let nextChoiceLabel = -1;
    let selectedChoice = -1;
    let choiceCounter = 0;
    let choiceCursorX = 0;
    let choiceCursorY = 0;
    let choiceCursor = 0;
    //let choiceSound = voiceHigh1;
    let selectSound = selected;
    let choiceTextAlign = textAlign;
    let cursorTextColour = "yellow";
    let selectedTextColour = "orange";

    let nextPic;
    let currentPic;
    let switchPic = false;

    this.create = function (conversation) {
        let dialogue = [],
        	pages = [];
            scenes = [],
            playerChoices = [],
            speakerNames = [],
            voices = [],
            nameCols = [],
            leftPics = [],
            rightPics = [],
            s1PicLeave = [],
            s2PicLeave = [];

        for (let i = 0; i < conversation.length; i++) {
            let chatEvent = conversation[i];
            if ("text" in chatEvent) dialogue.push(chatEvent.text);
            if ("nextPage" in chatEvent) pages.push(chatEvent.nextPage);
            if ("who" in chatEvent) speakerNames.push(chatEvent.who);
            if ("scene" in chatEvent) scenes.push(chatEvent.scene);
            if ("voice" in chatEvent) voices.push(chatEvent.voice);
            if ("choices" in chatEvent) playerChoices.push(chatEvent.choices);
            if ("nameCol" in chatEvent) nameCols.push(chatEvent.nameCol);
            if ("leftPic" in chatEvent) leftPics.push(chatEvent.leftPic);
            if ("rightPic" in chatEvent) rightPics.push(chatEvent.rightPic);
            if ("leftPicLeave" in chatEvent) s1PicLeave.push(chatEvent.leftPicLeave);
            if ("rightPicLeave" in chatEvent) s2PicLeave.push(chatEvent.rightPicLeave);
        }
        this.showSpeakers(dialogue, speakerNames, leftPics, s1PicLeave, rightPics, s2PicLeave)
        this.showBoxElements(dialogueBoxImage);
        this.showTextElements(conversation, dialogue, playerChoices, scenes, voices, nameCols, speakerNames);
        this.showChoices(conversation, playerChoices, dialogue);
    }

    this.showSpeakers = function (dialogueList, nameList, leftPicList, leftPicLeaveList, rightPicList, rightPicLeaveList) {
        if (leftPicList[this.page] != null) this.setupSpeakerTween(dialogueList, nameList, leftPicList, leftPicLeaveList);
        if (rightPicList[this.page] != null) this.setupSpeaker2Tween(dialogueList, nameList, rightPicList, rightPicLeaveList);
    }

    this.showBoxElements = function (dialogueBoxImg) {
        if (this.isShowing) {
            canvasContext.drawImage(dialogueBoxImg, dialogueBoxX, dialogueBoxY);
        }
    }

    this.changeScene = function (conversation) {
        if (nextChoiceLabel != -1 && chose) {
            if (chose) chose = false;
            showingChoiceMenu = false;
            for (let d = 0; d < conversation.length; d++) {
                if (conversation[d].scene == nextChoiceLabel) {
                    this.setPage(d); // found the index where .scene
                    break; // bail from for loop, quit searching
                }
            }
        }
        if (this.page == -1) { // means we didn't find a scene label match in the list
            console.error("Error: no scene found matching target label " + nextChoiceLabel);
        }
    }

    this.showTextElements = function (conversation, dialogueList, choiceList, sceneList, voiceList, nameColList, nameList) {
        let typewriterText;
        let textPad = 60;
        let measureText = canvasContext.measureText(nameList[this.page]);
        let nameWidth = measureText.width + textPad;
        if (this.isShowing) {
            if (this.letterCounter < dialogueList[this.page].length && !paused) {
                this.letterCounter += letterSpeed;
                //floored in case letter speed is changed
                if ((Math.floor(this.letterCounter) % 2) == 0) {
                    voiceList[this.page].play();
                }
            }
            this.changeScene(conversation);
            if (choiceList[this.page] == null) {
                colorText(nameList[this.page] + ":", textX, textY, nameColList[this.page], textFontFace, textAlign, 1);
            }
            typewriterText = dialogueList[this.page].substr(0, this.letterCounter);
            //this.findPunctuation(typewriterText);
            this.wrapText(typewriterText, textX + nameWidth, textY, maxWidth, lineHeight);
            if (this.letterCounter >= dialogueList[this.page].length && dialogueList[this.page] != "") {
                //finished effect here (to show that text is done spelling out)
            }
            this.makeAChoice(choiceList);
        }
    }

    this.makeAChoice = function (choiceList) {
        if (selectedChoice != -1 && choiceList[this.page] != null) {
            if (choiceCounter == 1 && nextChoiceLabel != -1) {
                setTimeout(function () {
                    chose = true;
                }, 360);
            }
            if (showingChoiceMenu && interact_key) {
                choiceCounter = 1;
                nextChoiceLabel = choiceList[this.page][selectedChoice][1];
                if((nextChoiceLabel == "accusationRoseSuccess") ||
                (nextChoiceLabel == "accusationJulieSuccess") ||
                (nextChoiceLabel == "accusationFelenSuccess") ||
                (nextChoiceLabel == "accusationJenSuccess")) {
                    console.log("Yay! You figured it out and beat the game!!!");
                } else if(nextChoiceLabel == "snubbedAlex") {
                    GameEvent.SnubbedAlex = true;
                }
            }
        }
    }

    this.getSceneLength = function (conversation) {
        let sceneLength = [];
        if (nextChoiceLabel != -1) {
            for (let d = 0; d < conversation.length; d++) {
                if (conversation[d].scene == nextChoiceLabel) {
                    sceneLength.push(conversation[d].text);
                }
            }
        }
        return sceneLength;
    }

    this.showChoices = function (conversation, choiceList, dialogueList) {
        let sceneText = this.getSceneLength(conversation);
        if (!showingChoiceMenu) choiceCursor = 0;
        if(this.page < 0) {this.page = 0;}
        if (conversation[this.page].text == "" && choiceList[this.page] != null && this.isShowing) {
            this.setupChoices(conversation, choiceList[this.page]);
            canvasContext.drawImage(choiceCursorPic, choiceCursorX, choiceCursorY);
            setTimeout(function () { //pause ability to select choice in order to increment page
                showingChoiceMenu = true;
            }, 180);
        } else {
            if (selectedChoice != -1 && showingChoiceMenu && this.page >= dialogueList.length - 1) {
                showingChoiceMenu = false;
            }
        }
    }

    this.setupChoices = function (conversation, choiceList) {
        let itemSpace = 30;
        let sceneText = this.getSceneLength(conversation);
        for (let i = 0; i < choiceList.length; i++) {
            if (choiceCursor == i) {
                let cursorXOffset = 12;
                let cursorYOffset = 17;
                choiceCursorX = textX - cursorXOffset;
                choiceCursorY = (textY + itemSpace * i) - cursorYOffset;
                if (interact_key && showingChoiceMenu && nextChoiceLabel != -1) {
                    choiceColour = selectedTextColour;
                } else {
                    choiceColour = cursorTextColour;
                }
            } else {
                choiceColour = textColour;
            }
            colorText(choiceList[i][0], 15 + textX, textY + itemSpace * i, choiceColour, textFontFace, choiceTextAlign, 1);
        }
        this.updateChoiceCursor(choiceList);
    }

    this.updateChoiceCursor = function (choiceList) {
        if (showingChoiceMenu) {
            if (interact_key) {
                if (cursorKeyPresses === 1) {
                    selectedChoice = choiceCursor;
                    selectSound.play();
                }
            }
            if (cursorUp) {
                if (cursorKeyPresses === 1) {
                    choiceCursor--;
                    dialogueChoiceSound.play();
                    if (choiceCursor < 0) {
                        choiceCursor += choiceList.length;
                    }
                }
            }
            if (cursorDown) {
                if (cursorKeyPresses === 1) {
                    choiceCursor = (choiceCursor + 1) % choiceList.length;
                    dialogueChoiceSound.play();
                    if (choiceCursor > choiceList.length - 1) {
                        choiceCursor = 0;
                    }
                }
            }
            cursorKeyPresses = 0;
        }
    }

    this.setupAnimatedMouths = function (dialogueList, nameList, NPCName, leftPicElseRightPic, animatedSheetVar, xOffset, yOffset) {
        if (nameList[this.page] == NPCName) {
            if (this.isShowing && this.letterCounter < dialogueList[this.page].length && !paused) {
                if (leftPicElseRightPic) {
                    animatedSheetVar.draw(canvasContext, this.speakerX + xOffset, speakerY + yOffset, 1);
                } else {
                    animatedSheetVar.draw(canvasContext, this.speaker2X + xOffset, speaker2Y + yOffset, 1);
                }
            }
        }
    }

    this.setupSpeakerTween = function (dialogueList, nameList, speakerImgList, leaveScreenList) {
        let fullAlpha = !switchPic && this.speakerAlpha >= 1.0 && this.isShowing
        if (this.isShowing) {
            if (switchPic) {
                this.speakerAlpha -= this.alphaChange;
                if (this.speakerAlpha <= 0.0) {
                    this.speakerAlpha = 0.0;
                    switchPic = false;
                }
            } else {
                this.speakerAlpha += this.alphaChange;
                if (this.speakerAlpha >= 1.0) {
                    this.speakerAlpha = 1.0;
                }
            }
        }

        canvasContext.globalAlpha = this.speakerAlpha;

        if ((switchPic) && (this.page > 0)) {//fade out on the previous pic
            canvasContext.drawImage(speakerImgList[this.page - 1], this.speakerX, speakerY);
        } else {//fade in on the next (when poses switch)
            canvasContext.drawImage(speakerImgList[this.page], this.speakerX, speakerY);
        }

        //just drawing the portrait will show the full fade effect AFTER the portraits have switched
        //canvasContext.drawImage(speakerImgList[this.page], this.speakerX, speakerY);

        canvasContext.globalAlpha = 1;
        if (leaveScreenList[this.page] && this.speakerX >= this.speakerStartX) {

            if (this.speakerX <= this.speakerStartX) {
                this.speakerX = this.speakerStartX;
            } else {
                this.speakerX -= tweenOutSpeed;
            }

        } else if (!this.isShowing && this.speakerX > this.speakerStartX) {
            this.speakerX -= tweenOutSpeed;
        } else if (this.isShowing && this.speakerX < speakerFinalX) {
            this.speakerX += tweenInSpeed;

            //speaker specific mouth anims for when tweening in
            if (fullAlpha) {
                if (speakerImgList[this.page] == johnHappyPic) {
                    this.setupAnimatedMouths(dialogueList, nameList, "John", true, johnMouthMove, 130, 300);
                } else {
                    this.setupAnimatedMouths(dialogueList, nameList, "John", true, johnAngryMouthMove, 130, 400);
                }

            }
        } else if (this.speakerX >= speakerFinalX) {
            this.speakerX = speakerFinalX;
            currentPic = speakerImgList[this.page];
            nextPic = speakerImgList[this.page + 1];

            //speaker specific mouth anims when at final pos
            if (fullAlpha) {

                if (speakerImgList[this.page] == johnHappyPic) {
                    this.setupAnimatedMouths(dialogueList, nameList, "John", true, johnMouthMove, 150, 300);
                } else {
                    this.setupAnimatedMouths(dialogueList, nameList, "John", true, johnAngryMouthMove, 150, 300);
                }
            }


        }
    }

    this.setupSpeaker2Tween = function (dialogueList, nameList, speaker2ImgList, leaveScreenList) {
        canvasContext.drawImage(speaker2ImgList[this.page], this.speaker2X, speaker2Y);

        if (leaveScreenList[this.page] && this.speaker2X <= this.speaker2StartX) {

            if (this.speaker2X >= this.speaker2StartX) {
                this.speaker2X = this.speaker2StartX;
            } else {
                this.speaker2X += tweenOutSpeed;
            }

        } else if (!this.isShowing && this.speaker2X < this.speaker2StartX) {
            this.speaker2X += tweenOutSpeed;
        } else if (this.isShowing && this.speaker2X > speaker2FinalX) {
            this.speaker2X -= tweenInSpeed;

            //speaker specific mouth anims for when tweening in
            this.setupAnimatedMouths(dialogueList, nameList, "Rose", false, roseMouthMove, 170, 300);

        } else if (this.speaker2X <= speaker2FinalX) {
            this.speaker2X = speaker2FinalX;

            //speaker specific mouth anims when at final pos
            this.setupAnimatedMouths(dialogueList, nameList, "Rose", false, roseMouthMove, 150, 300);
        }

    }

    this.findPunctuation = function (str) {
        if (str.includes(".") || str.includes("!") || str.includes(",")) {
            paused = true;
            this.unPauseWords();
        }
    }

    this.unPauseWords = function () {
        setTimeout(function () {
            paused = false;
        }, 200);
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

    this.calculateLineBreak = function (dialogueWords, x, y, maxWidth, lineHeight) {
        let words = this.getWordsAndBreaksFromString(dialogueWords),
            checkEndOfLine, checkTextWidth, textWidth;
        line = "";
        for (let i = 0; i < words.length; i++) {
            if (words[i] != "Gamkedo") {
                checkEndOfLine = line + words[i] + " ";
                checkTextWidth = canvasContext.measureText(checkEndOfLine);
                textWidth = checkTextWidth.width;
                if (textWidth > maxWidth && i > 0) {
                    colorText(line, x, y, textColour, textFontFace, textAlign, 1);
                    line = words[i] + " ";
                    y += lineHeight;
                } else {
                    line = checkEndOfLine;
                }
            } else {
                colorText(line, x, y, textColour, textFontFace, textAlign, 1);
                line = "";
                y += lineHeight;
            }
        }
    }

    this.wrapText = function (dialogueWords, x, y, maxWidth, lineHeight) {
        line = "";
        this.calculateLineBreak(dialogueWords, x, y, maxWidth, lineHeight);
        colorText(line, x, y, textColour, textFontFace, textAlign, 1);
    }

    this.resetBranchingDialogueVars = function () {
        nextChoiceLabel = -1;
        selectedChoice = -1;
        choiceCounter = 1;
        if (this.speakerX > this.speakerStartX && this.speakerX < speakerFinalX) {
            this.speakerX = this.speakerStartX;
        }
    }

    this.incrementPage = function (conversation) {
        let dialogue = [];
        let pages = [];
        let sceneText = this.getSceneLength(conversation);
        
        for (let i = 0; i < conversation.length; i++) {
            if ("text" in conversation[i]) {
	            dialogue.push(conversation[i].text);
	            pages.push(conversation[i].nextPage);
	        }
        }

        if (this.letterCounter < dialogue[this.page].length) {
            this.letterCounter = dialogue[this.page].length;
        } else if (this.page >= dialogue.length - 1) {
            this.isShowing = false;
            this.letterCounter = 0;
            //if branching dialogue finishes at the end of the array, reset variables
            this.resetBranchingDialogueVars();
        } else if (this.page < dialogue.length - 1 && !showingChoiceMenu || nextChoiceLabel != -1 && (choiceCounter < sceneText.length)) {
            this.letterCounter = 0;

            //fade effect for left pic
            if (currentPic != nextPic) switchPic = true;

            if (choiceCounter < sceneText.length) { //increases the index for branching text
                choiceCounter++;
            } else if (choiceCounter != 0 && choiceCounter == sceneText.length && nextChoiceLabel != -1) {

                if (dialogue[this.page] == "") {
                    //choices in branching text? Reset variables
                    this.resetBranchingDialogueVars();
                } else if((pages[this.page] == null) && (playerChoices[this.page] == null)) {
                    //end conversation once branching dialogue has been all read, but not at the end of the array
                    this.isShowing = false;
                }
                //to prevent portrait incrementing once text is over
                if (!this.isShowing) {
                    this.setPage(this.page - 1);
                }
                this.resetBranchingDialogueVars();
            }

            if(pages[this.page] != undefined) {
                this.setPage(pages[this.page]);
            } else {
                this.isShowing = false;
			}

        } 
    }
}
