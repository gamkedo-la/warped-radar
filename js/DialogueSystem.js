//kinda messy dialogue system by Kise, for Gamkedo! <3 Feel free to make changes and improve the code base!! 
function Dialogue() {
    this.isShowing = false;
    this.letterCounter = 0;
    this.page = -1;

    //speaker fade in vars
    this.speakerCentredX = 220;
    this.speakerAlpha = 0.0;
    this.alphaChange = 0.1;

    //speaker tweening vars
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

    //change dialogue pics here
    var dialogueImage = dialogueBoxPic;
    var nameBoxImage = nameBoxPic;
    var dialogueBoxX = 35;
    var dialogueBoxY = 435;

    var textXBuffer = 30;
    var textYBuffer = 45;
    var textX = dialogueBoxX + textXBuffer;
    var textY = dialogueBoxY + textYBuffer;
    var textColour = "#373F51";
    var textFontFace = "25px Arial";
    var textAlign = "left";

    var line;
    var letterSpeed = 0.6;
    var maxWidth = 270;
    var lineHeight = 30;
    var paused = false;

    var nameBoxXBuffer;
    var nameBoxYBuffer = 45;
    var nameBoxX = dialogueBoxX;
    var nameBoxY = dialogueBoxY - nameBoxYBuffer;

    var nameBoxTextXBuffer = 60;
    var nameBoxTextYBuffer = 32;
    var nameBoxTextX = nameBoxX + nameBoxTextXBuffer;
    var nameBoxTextY = nameBoxY + nameBoxTextYBuffer;
    var nameBoxTextColour = textColour;
    var nameBoxTextFontFace = "20px Arial";
    var nameBoxTextAlign = textAlign;

    var arrowEffectBufferX = 95;
    var arrowEffectBufferY = 114;
    var arrowEffectX = (dialogueBoxX * dialogueBoxX / 2) + arrowEffectBufferX;
    var arrowEffectY = dialogueBoxY + arrowEffectBufferY;

    var choiceColour;
    var chose = false;
    var choiceMenuShowing = false;
    var nextChoiceLabel = -1;
    var selectedChoice = -1;
    var choiceCounter = 1;
    var choiceCursorX = 0;
    var choiceCursorY = 0;
    var choiceCursor = 0;
    var choiceSound = voiceHigh1;
    var selectSound = selected;
    var cursorTextColour = "#536991";
    var selectedTextColour = "white";

    this.create = function (conversation) {
        var dialogue = [],
            scenes = [],
            playerChoices = [],
            speakerNames = [],
            voices = [],
            //speakerPics = [], for fade in transition
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
            //if ("speakerPic" in chatEvent) speakerPics.push(chatEvent.speakerPic);
            if ("leftPic" in chatEvent) leftPics.push(chatEvent.leftPic);
            if ("rightPic" in chatEvent) rightPics.push(chatEvent.rightPic);
            if ("leftPicLeave" in chatEvent) s1PicLeave.push(chatEvent.leftPicLeave);
            if ("rightPicLeave" in chatEvent) s2PicLeave.push(chatEvent.rightPicLeave);
        }
        //var l = this.getSceneLength(conversation);
        //console.log("Next choice label: " + nextChoiceLabel);
        //console.log(l.length);
        //console.log("Choice counter: " + choiceCounter);
        //console.log("Current page: " + this.page);
        //console.log("Showing choice menu: " + choiceMenuShowing);

        //console.log("Selected choice: " + selectedChoice);
        //console.log("Choice cursor: " + choiceCursor);
        //console.log("Chose an option: " + chose);

        this.showSpeakers(leftPics, s1PicLeave, rightPics, s2PicLeave);
        this.showBoxElements(dialogueImage, nameBoxImage);
        this.showTextElements(conversation, dialogue, playerChoices, scenes, voices, speakerNames);
        this.showChoices(conversation, playerChoices, dialogue);
        this.makeAChoice(playerChoices);
    }

    this.showSpeakerFadeIn = function (speakerPicList) {
        if (speakerPicList[this.page] != null) this.setupSpeakerFadeIn(speakerPicList);
    }

    this.showSpeakers = function (leftPicList, leftPicLeaveList, rightPicList, rightPicLeaveList) {
        if (leftPicList[this.page] != null) this.setupSpeakerTween(leftPicList, leftPicLeaveList);
        if (rightPicList[this.page] != null) this.setupSpeaker2Tween(rightPicList, rightPicLeaveList);
    }

    this.showBoxElements = function (dialogueBoxImg, nameBoxImg) {
        if (this.isShowing) {
            canvasContext.drawImage(dialogueBoxImg, dialogueBoxX, dialogueBoxY);
            canvasContext.drawImage(nameBoxImg, nameBoxX, nameBoxY);
        }
    }

    this.showTextElements = function (conversation, dialogueList, choiceList, sceneList, voiceList, nameList) {
        var typewriterText;
        if (this.isShowing) {
            if (this.letterCounter < dialogueList[this.page].length && !paused) {
                this.letterCounter += letterSpeed;
                //floored in case letter speed is changed
                if ((Math.floor(this.letterCounter) % 2) == 0) {
                    voiceList[this.page].play();
                }
            }
            if (nextChoiceLabel != -1 && chose) {
                if (chose) chose = false;
                choiceMenuShowing = false;
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
            typewriterText = dialogueList[this.page].substr(0, this.letterCounter);
            colorText(nameList[this.page], nameBoxTextX, nameBoxTextY, nameBoxTextColour, nameBoxTextFontFace, nameBoxTextAlign, 1);
            this.findPunctuation(typewriterText);
            this.wrapText(typewriterText, textX, textY, maxWidth, lineHeight);
            if (this.letterCounter >= dialogueList[this.page].length && dialogueList[this.page] != "") {
                //uses AnimatedSprites.js 
                textArrowEffect.draw(arrowEffectX, arrowEffectY, 1);
            }
        }
    }


    this.makeAChoice = function (choiceList) {
        if (selectedChoice != -1 && choiceList[this.page] != null) {
            setTimeout(function () { //small pause when choice selected
                chose = true;
            }, 335);
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
        if (!choiceMenuShowing) choiceCursor = 0;
        if (conversation[this.page].text == "" && choiceList[this.page] != null && this.isShowing) {
            this.setupChoices(conversation, choiceList[this.page]);
            canvasContext.drawImage(choiceCursorPic, choiceCursorX, choiceCursorY);
            setTimeout(function () { //pause ability to select choice in order to increment page
                choiceMenuShowing = true;
            }, 110);

        } else {
            if (selectedChoice != -1 && choiceMenuShowing && this.page >= dialogueList.length - 1) {
                choiceMenuShowing = false;
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
                if (pressed_space && choiceMenuShowing) {
                    choiceColour = selectedTextColour;
                } else {
                    choiceColour = cursorTextColour;
                }
            } else {
                choiceColour = textColour;
            }
            colorText(choiceList[i][0], 15 + textX, textY + itemSpace * i, choiceColour, textFontFace, textAlign, 1);
        }
        this.updateChoiceCursor(choiceList);
    }

    this.setupSpeakerFadeIn = function (speakerImgList) {
        if (this.isShowing) {
            this.speakerAlpha += this.alphaChange;
            if (this.speakerAlpha >= 1.0) {
                this.speakerAlpha = 1.0;
            }
        }
        if (!this.isShowing) {
            this.speakerAlpha -= this.alphaChange;
            if (this.speakerAlpha <= 0.0) {
                this.speakerAlpha = 0.0;
            }
        }
        canvasContext.globalAlpha = this.speakerAlpha;
        canvasContext.drawImage(speakerImgList[this.page], this.speakerCentredX, speakerY);
        canvasContext.globalAlpha = 1;
    }

    this.setupSpeakerTween = function (speakerImgList, leaveScreenList) {
        canvasContext.drawImage(speakerImgList[this.page], this.speakerX, speakerY);
        if (leaveScreenList[this.page] && this.speakerX >= this.speakerStartX) {
            this.speakerX -= tweenOutSpeed;
        } else if (!this.isShowing && this.speakerX > this.speakerStartX) {
            this.speakerX -= tweenOutSpeed;
        } else if (this.isShowing && this.speakerX < speakerFinalX) {
            this.speakerX += tweenInSpeed;
        }
    }

    this.setupSpeaker2Tween = function (speaker2ImgList, leaveScreenList) {
        canvasContext.drawImage(speaker2ImgList[this.page], this.speaker2X, speaker2Y);
        if (leaveScreenList[this.page] && this.speaker2X <= this.speaker2StartX) {
            this.speaker2X += tweenOutSpeed;
        } else if (!this.isShowing && this.speaker2X < this.speaker2StartX) {
            this.speaker2X += tweenOutSpeed;
        } else if (this.isShowing && this.speaker2X > speaker2FinalX) {
            this.speaker2X -= tweenInSpeed;
        }
    }
    
    this.updateChoiceCursor = function (choiceList) {
        if (choiceMenuShowing) {
            if (pressed_space) {
                if (cursorKeyPresses === 1) {
                    selectedChoice = choiceCursor;
                    selectSound.play();
                    //console.log("choose this one!");
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
        choiceCounter = 0;
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
        } else if (this.page < dialogue.length - 1 && !choiceMenuShowing || nextChoiceLabel != -1 && choiceCounter < sceneText.length) {
            this.letterCounter = 0;
            this.page++;
            //console.log("increment");
            
            if (choiceCounter < sceneText.length) { //increases the index for branching text
                choiceCounter++;
            } else if (choiceCounter != 0 && choiceCounter == sceneText.length) {
                //end conversation once branching dialogue has been all read, but not at the end of the array
                this.isShowing = false;
                //to prevent portrait incrementing once text is over
                if (!this.isShowing) this.page = this.page - 1; 
                this.resetBranchingDialogueVars();
                //console.log("end conversation");
            }
        } else if (this.page >= dialogue.length - 1) {
            this.isShowing = false;
            this.letterCounter = 0;
            //if branching dialogue finishes at the end of the array, reset variables
            this.resetBranchingDialogueVars();
            //console.log("end conversation");
        }
    }

    this.start = function () { //could use this for vn style games?
        this.page = 0;
        this.isShowing = true;
        this.letterCounter = 0;
    }
}
