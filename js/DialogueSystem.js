//Dialogue System by Kise, for Gamkedo! <3 Feel free to make changes and improve the code base!!  
function Dialogue() {
    this.isShowing = false;
    this.letterCounter = 0;
    this.page = 0;

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

    var tweenPosSpeed = 20;
    var tweenNegSpeed = 40;

    //change dialogue pics here
    var dialogueImage = dialogueBoxPic;
    var nameBoxImage = nameBoxPic;
    var dialogueBoxX = 35;
    var dialogueBoxY = 425;

    var textXBuffer = 30;
    var textYBuffer = 45;
    var textX = dialogueBoxX + textXBuffer;
    var textY = dialogueBoxY + textYBuffer;
    var textColour = "#373F51";
    var textFontFace = "25px Arial";
    var textAlign = "left";

    var line;
    var letterSpeed = 1;
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
    var arrowEffectBufferY = 118;
    var arrowEffectX = (dialogueBoxX * dialogueBoxX / 2) + arrowEffectBufferX;
    var arrowEffectY = dialogueBoxY + arrowEffectBufferY;

    var choiceColour;
    var choiceCursorX = 0;
    var choiceCursorY = 0;
    var choiceCursor = 0;
    var cursorControl = false;
    var choiceCommitted = -1;
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
            speakerPics = [],
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
            if ("speakerPic" in chatEvent) speakerPics.push(chatEvent.speakerPic);
            if ("leftPic" in chatEvent) leftPics.push(chatEvent.leftPic);
            if ("rightPic" in chatEvent) rightPics.push(chatEvent.rightPic);
            if ("leftPicLeave" in chatEvent) s1PicLeave.push(chatEvent.leftPicLeave);
            if ("rightPicLeave" in chatEvent) s2PicLeave.push(chatEvent.rightPicLeave);
        }

        this.showSpeakers(leftPics, s1PicLeave, rightPics, s2PicLeave);
        this.showBoxElements(dialogueImage, nameBoxImage);
        this.showTextElements(dialogue, scenes, voices, speakerNames);
        this.showChoices(playerChoices, dialogue);
        this.makeAChoice(scenes, playerChoices);
        
        console.log(scenes[this.page]);
    }

    this.makeAChoice = function (sceneList, choiceList) {
        var nextBranch = [];
        if (choiceCommitted != -1 && choiceCursor != -1 && sceneList[this.page] != null && choiceList[this.page] != null) {
            //this.isShowing = false;
            colorText(choiceList[this.page][choiceCommitted][1], canvas.width / 2, 100, "white", textFontFace, "center", 1);
            sceneList[this.page] = choiceList[this.page][choiceCommitted][1];
        }
    }

    this.showSpeakerFadeIn = function (speakerPicList) {
        if (speakerPicList[this.page] != null) this.setupSpeakerFadeIn(speakerPicList);
    }

    this.showSpeakers = function (leftPicList, leftPicLeaveList, rightPicList, rightPicLeaveList) {
        if (leftPicList[this.page] != null) this.setupSpeakerTween(leftPicList, leftPicLeaveList);
        if (rightPicList[this.page] != null) this.setupSpeaker2Tween(rightPicList, rightPicLeaveList);
    }

    this.showTextElements = function (dialogueList, sceneList, voiceList, nameList) {
        var stringCopy;
        if (this.isShowing) {
            if (this.letterCounter < dialogueList[this.page].length && !paused) {
                this.letterCounter += letterSpeed;
                //floored in case letter speed is changed
                if ((Math.floor(this.letterCounter) % 2) == 0) {
                    voiceList[this.page].play();
                }
            }
            colorText(nameList[this.page], nameBoxTextX, nameBoxTextY, nameBoxTextColour, nameBoxTextFontFace, nameBoxTextAlign, 1);

            stringCopy = dialogueList[this.page].substr(0, this.letterCounter);
            this.findPunctuation(stringCopy);

            this.wrapText(stringCopy, textX, textY, maxWidth, lineHeight);
            if (this.letterCounter >= dialogueList[this.page].length && dialogueList[this.page] != "") {
                //uses AnimatedSprites.js 
                textArrowEffect.draw(arrowEffectX, arrowEffectY, 1);
            }
        }
    }

    this.showBoxElements = function (dialogueBoxImg, nameBoxImg) {
        if (this.isShowing) {
            canvasContext.drawImage(dialogueBoxImg, dialogueBoxX, dialogueBoxY);
            canvasContext.drawImage(nameBoxImg, nameBoxX, nameBoxY);
        }
    }

    this.showChoices = function (choiceList, dialogueList) {
        if (!cursorControl) choiceCursor = 0;
        if (choiceList[this.page] != null && this.isShowing && choiceCommitted == -1) {
            this.setupChoices(choiceList[this.page]);
            canvasContext.drawImage(choiceCursorPic, choiceCursorX, choiceCursorY);
            setTimeout(function () {
                cursorControl = true;
            }, 110);
        } else {
            if (choiceCommitted != -1 && cursorControl && this.page >= dialogueList.length - 1) {
                cursorControl = false;
                console.log("default bool switch");
            }
        }
    }

    this.setupChoices = function (choiceList) {
        var itemSpace = 30;
        for (var i = 0; i < choiceList.length; i++) {
            if (choiceCursor == i) {
                var cursorXOffset = 12;
                var cursorYOffset = 17;
                choiceCursorX = textX - cursorXOffset;
                choiceCursorY = (textY + itemSpace * i) - cursorYOffset;
                if (choiceCommitted != -1 || pressed_mbLeft) {
                    choiceColour = selectedTextColour;
                    console.log("change colour gosh darnit");
                } else {
                    choiceColour = cursorTextColour;
                }
            } else {
                choiceColour = textColour;
            }
            colorText(choiceList[i][0], 15 + textX, textY + itemSpace * i, choiceColour, textFontFace, textAlign, 1);
        }
        if (cursorControl) {
            if (pressed_space) {
                console.log("choose this one!")
                cursorControl = false;
                selectSound.play();
                choiceCommitted = choiceCursor;
            }
            if (cursorUp) {
                if (cursorKeyPresses === 1) {
                    choiceCursor--;
                    choiceSound.play();
                    if (choiceCursor < 0) {
                        choiceCursor += choiceList.length;
                    }
                }
            }
            if (cursorDown) {
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
            this.speakerX -= tweenNegSpeed;
        } else if (!this.isShowing && this.speakerX > this.speakerStartX) {
            this.speakerX -= tweenNegSpeed;
        } else if (this.isShowing && this.speakerX < speakerFinalX) {
            this.speakerX += tweenPosSpeed;
        }
    }

    this.setupSpeaker2Tween = function (speaker2ImgList, leaveScreenList) {
        canvasContext.drawImage(speaker2ImgList[this.page], this.speaker2X, speaker2Y);
        if (leaveScreenList[this.page] && this.speaker2X <= this.speaker2StartX) {
            this.speaker2X += tweenNegSpeed;
        } else if (!this.isShowing && this.speaker2X < this.speaker2StartX) {
            this.speaker2X += tweenNegSpeed;
        } else if (this.isShowing && this.speaker2X > speaker2FinalX) {
            this.speaker2X -= tweenPosSpeed;
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

    this.incrementPage = function (conversation) {
        var dialogue = [];
        for (var i = 0; i < conversation.length; i++) {
            if ("text" in conversation[i]) {
                dialogue.push(conversation[i].text);
            }
        }
        if (this.letterCounter < dialogue[this.page].length) {
            this.letterCounter = dialogue[this.page].length;
        } else if (this.page < dialogue.length - 1 && !cursorControl && choiceCommitted == -1 || this.page < dialogue.length - 1 && choiceCommitted != -1) {
            this.letterCounter = 0;
            this.page++;
            console.log("increment");
        } else if (this.page >= dialogue.length - 1 || this.page >= dialogue.length - 1 && !cursorControl && choiceCommitted != -1) {
            this.isShowing = false;
            this.letterCounter = 0;
            console.log("end conversation");
        }
    }

    this.start = function () { //could use this for vn style games?
        this.page = 0;
        this.isShowing = true;
        this.letterCounter = 0;
    }

}
