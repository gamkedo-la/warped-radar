//dialogue system by Kise, for Gamkedo! <3 Feel free to make changes and improve the code base!! 
function Dialogue() {
    this.isShowing = false;
    this.letterCounter = 0;
    this.page = -1;

    this.speakerStartX = -265;
    this.speakerX = this.speakerStartX;
    this.speaker2StartX = 800;
    this.speaker2X = this.speaker2StartX;

    var speakerFinalX = 50;
    var speaker2FinalX = 480;
    var speakerY = 80;
    var speaker2Y = speakerY;

    var tweenInSpeed = 20;
    var tweenOutSpeed = 40;

    var dialogueImage = dialogueBoxPic;

    var dialogueBoxX = 0;
    var dialogueBoxY = 470;

    var textXBuffer = 30;
    var textYBuffer = 40;
    var textX = dialogueBoxX + textXBuffer;
    var textY = dialogueBoxY + textYBuffer;
    var textColour = "white";
    var textFontFace = "25px consolas";
    var textAlign = "left";

    var line;
    var letterSpeed = 1;
    var maxWidth = 210;
    var lineHeight = 30;
    var paused = false;

    var choiceColour;
    var chose = false;
    var showingChoiceMenu = false;
    var nextChoiceLabel = -1;
    var selectedChoice = -1;
    var choiceCounter = 1;
    var choiceCursorX = 0;
    var choiceCursorY = 0;
    var choiceCursor = 0;
    var choiceSound = voiceHigh1;
    var selectSound = selected;
    var choiceTextAlign = textAlign;
    var cursorTextColour = "yellow";
    var selectedTextColour = "orange";

    this.create = function (conversation) {
        var dialogue = [],
            scenes = [],
            playerChoices = [],
            speakerNames = [],
            voices = [],
            nameCols = [],
            leftPics = [],
            rightPics = [],
            s1PicLeave = [],
            s2PicLeave = [];

        for (var i = 0; i < conversation.length; i++) {
            var chatEvent = conversation[i];
            if ("text" in chatEvent) dialogue.push(chatEvent.text);
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
        this.showBoxElements(dialogueImage);
        this.showTextElements(conversation, dialogue, playerChoices, scenes, voices, nameCols, speakerNames);
        this.showChoices(conversation, playerChoices, dialogue);
        this.makeAChoice(playerChoices);
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
            for (var d = 0; d < conversation.length; d++) {
                if (conversation[d].scene == nextChoiceLabel) {
                    this.page = d; // found the index where .scene 
                    break; // bail from for loop, quit searching
                }
            }
        }
        if (this.page == -1) { // means we didn't find a scene label match in the list
            console.log("Error: no scene found matching target label " + nextChoiceLabel);
        }
    }

    this.showTextElements = function (conversation, dialogueList, choiceList, sceneList, voiceList, nameColList, nameList) {
        var typewriterText;
        var textPad = 60;
        var measureText = canvasContext.measureText(nameList[this.page]);
        var nameWidth = measureText.width + textPad;
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
            this.findPunctuation(typewriterText);
            this.wrapText(typewriterText, textX + nameWidth, textY, maxWidth, lineHeight);
            if (this.letterCounter >= dialogueList[this.page].length && dialogueList[this.page] != "") {
                //finished effect here
            }
        }
    }

    this.makeAChoice = function (choiceList) {
        if (selectedChoice != -1 && choiceList[this.page] != null) {
            setTimeout(function () { //small pause when choice selected
                chose = true;
            }, 320);
            choiceCounter = 1;
            nextChoiceLabel = choiceList[this.page][selectedChoice][1];
        }
    }

    this.getSceneLength = function (conversation) {
        var sceneLength = [];
        if (nextChoiceLabel != -1) {
            for (var d = 0; d < conversation.length; d++) {
                if (conversation[d].scene == nextChoiceLabel) {
                    sceneLength.push(conversation[d].text);
                }
            }
        }
        return sceneLength;
    }

    this.showChoices = function (conversation, choiceList, dialogueList) {
        var sceneText = this.getSceneLength(conversation);
        if (!showingChoiceMenu) choiceCursor = 0;
        if (conversation[this.page].text == "" && choiceList[this.page] != null && this.isShowing) {
            this.setupChoices(conversation, choiceList[this.page]);
            canvasContext.drawImage(choiceCursorPic, choiceCursorX, choiceCursorY);
            setTimeout(function () { //pause ability to select choice in order to increment page
                showingChoiceMenu = true;
            }, 150);

        } else {
            if (selectedChoice != -1 && showingChoiceMenu && this.page >= dialogueList.length - 1) {
                showingChoiceMenu = false;
                console.log("default bool switch");
            }
        }
    }

    this.setupChoices = function (conversation, choiceList) {
        var itemSpace = 30;
        var sceneText = this.getSceneLength(conversation);
        for (var i = 0; i < choiceList.length; i++) {
            if (choiceCursor == i) {
                var cursorXOffset = 12;
                var cursorYOffset = 17;
                choiceCursorX = textX - cursorXOffset;
                choiceCursorY = (textY + itemSpace * i) - cursorYOffset;
                if (pressed_space && showingChoiceMenu) {
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
            if (pressed_space) {
                if (cursorKeyPresses === 1) {
                    selectedChoice = choiceCursor;
                    selectSound.play();
                }
            }
            if (cursorUp && selectedChoice == -1) {
                if (cursorKeyPresses === 1) {
                    choiceCursor--;
                    choiceSound.play();
                    if (choiceCursor < 0) {
                        choiceCursor += choiceList.length;
                    }
                }
            }
            if (cursorDown && selectedChoice == -1) {
                if (cursorKeyPresses === 1) {
                    choiceCursor = (choiceCursor + 1) % choiceList.length;
                    choiceSound.play();
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
            if (this.isShowing && this.letterCounter < dialogueList[this.page].length) {
                if (leftPicElseRightPic) {
                    animatedSheetVar.draw(this.speakerX + xOffset, speakerY + yOffset, 1);
                } else {
                     animatedSheetVar.draw(this.speaker2X + xOffset, speaker2Y + yOffset, 1);
                }
            }
        }
    }

    this.setupSpeakerTween = function (dialogueList, nameList, speakerImgList, leaveScreenList) {
        canvasContext.drawImage(speakerImgList[this.page], this.speakerX, speakerY);
        if (leaveScreenList[this.page] && this.speakerX >= this.speakerStartX) {
            this.speakerX -= tweenOutSpeed;
        } else if (!this.isShowing && this.speakerX > this.speakerStartX) {
            this.speakerX -= tweenOutSpeed;
        } else if (this.isShowing && this.speakerX < speakerFinalX) {
            this.speakerX += tweenInSpeed;
            
            //speaker specific anims
            this.setupAnimatedMouths(dialogueList, nameList, "John", true, johnMouthMove, 130, 300);
            this.setupAnimatedMouths(dialogueList, nameList, "Bob", true, johnMouthMove, 130, 300);
        } else if (this.speakerX >= speakerFinalX) {
            this.speakerX = speakerFinalX;
            
            //speaker specific anims
            this.setupAnimatedMouths(dialogueList, nameList, "John", true, johnMouthMove, 150, 300);
            this.setupAnimatedMouths(dialogueList, nameList, "Bob", true, johnMouthMove, 150, 300);
        }
        
    }

    this.setupSpeaker2Tween = function (dialogueList, nameList, speaker2ImgList, leaveScreenList) {
        canvasContext.drawImage(speaker2ImgList[this.page], this.speaker2X, speaker2Y);
        if (leaveScreenList[this.page] && this.speaker2X <= this.speaker2StartX) {
            this.speaker2X += tweenOutSpeed;
        } else if (!this.isShowing && this.speaker2X < this.speaker2StartX) {
            this.speaker2X += tweenOutSpeed;
        } else if (this.isShowing && this.speaker2X > speaker2FinalX) {
            this.speaker2X -= tweenInSpeed;
            
            
            //speaker specific animations
            this.setupAnimatedMouths(dialogueList, nameList, "Rose", false, roseMouthMove, 170, 300);
        } else if (this.speaker2X <= speaker2FinalX) {
            this.speaker2X = speaker2FinalX;
            
        
            //speaker specific animations
            this.setupAnimatedMouths(dialogueList, nameList, "Rose", false, roseMouthMove, 150, 300);
        }
        
    }

    this.findPunctuation = function (str) {
        if (str.includes(".")) {
            paused = true;
            this.unPauseWords();
        } else if (str.includes("!")) {
            paused = true;
            this.unPauseWords();
        } else if (str.includes(",")) {
            paused = true;
            this.unPauseWords();
        }
    }

    this.unPauseWords = function () {
        setTimeout(function () {
            paused = false;
        }, 190);
    }

    this.getWordsAndBreaksFromString = function (dialogueWords) {
        var breaks = dialogueWords.split("\n"),
            newLines = "";
        for (var i = 0; i < breaks.length; i++) {
            newLines = newLines + breaks[i] + "  Gamkedo  ";
        }
        var words = newLines.split(" ");
        return words;
    }

    this.calculateLineBreak = function (dialogueWords, x, y, maxWidth, lineHeight) {
        var words = this.getWordsAndBreaksFromString(dialogueWords),
            checkEndOfLine, checkTextWidth, textWidth;
        line = "";
        for (var i = 0; i < words.length; i++) {
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
    }

    this.incrementPage = function (conversation) {
        var dialogue = [];
        var playerChoices = [];
        var sceneText = this.getSceneLength(conversation);
        for (var i = 0; i < conversation.length; i++) {
            if ("text" in conversation[i]) dialogue.push(conversation[i].text);
        }
        if (this.letterCounter < dialogue[this.page].length) {
            this.letterCounter = dialogue[this.page].length;
        } else if (this.page < dialogue.length - 1 && !showingChoiceMenu || (!chose && nextChoiceLabel != -1) && (choiceCounter < sceneText.length)) {
            this.letterCounter = 0;
            this.page++;

            if (choiceCounter < sceneText.length) { //increases the index for branching text
                choiceCounter++;
            } else if (choiceCounter != 0 && choiceCounter == sceneText.length) {
                //end conversation once branching dialogue has been all read, but not at the end of the array
                this.isShowing = false;
                //to prevent portrait incrementing once text is over
                if (!this.isShowing) this.page = this.page - 1;
                this.resetBranchingDialogueVars();
            }
        } else if (this.page >= dialogue.length - 1) {
            this.isShowing = false;
            this.letterCounter = 0;
            //if branching dialogue finishes at the end of the array, reset variables
            this.resetBranchingDialogueVars();
        }
    }

    this.start = function () { //could use this for vn style games?
        this.page = 0;
        this.isShowing = true;
        this.letterCounter = 0;
    }
}
