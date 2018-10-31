//A simple dialogue system for Gamkedo! By Kise <3
function Dialogue() {
    this.isShowing = false;
    this.letterCounter = 0;
    this.page = 0;

    this.speakerStartX = -265;
    this.speakerX = this.speakerStartX;
    this.speaker2StartX = 800;
    this.speaker2X = this.speaker2StartX;

    var speakerFinalX = 50;
    var speaker2FinalX = 480;
    var speakerY = 80;
    var speaker2Y = speakerY;

    var dialogueBoxX = 35;
    var dialogueBoxY = 425;

    var textXBuffer = 30;
    var textYBuffer = 45;
    var textX = dialogueBoxX + textXBuffer;
    var textY = dialogueBoxY + textYBuffer;
    var textColour = "#373F51";
    var textFontFace = "25px Arial";
    var textAlign = "left";

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

    var tweenPosSpeed = 20;
    var tweenNegSpeed = 40;

    var letterSpeed = 0.7;
    var maxWidth = 270;
    var lineHeight = 30;
    var line;
    var paused = false;

    var arrowEffectBufferX = 95;
    var arrowEffectBufferY = 118;
    var arrowEffectX = (dialogueBoxX * dialogueBoxX / 2) + arrowEffectBufferX;
    var arrowEffectY = dialogueBoxY + arrowEffectBufferY;

    this.create = function (conversation) {
        var dialogue = [],
            speakerNames = [],
            leftPics = [],
            rightPics = [],
            s1PicLeave = [],
            s2PicLeave = [],
            playerHasChoices = [],
            playerChoices = [],
            stringCopy;

        for (var i = 0; i < conversation.length; i++) {
            var chatEvent = conversation[i];
            if ("text" in chatEvent) dialogue.push(chatEvent.text);
            if ("who" in chatEvent) speakerNames.push(chatEvent.who);
            if ("leftPic" in chatEvent) leftPics.push(chatEvent.leftPic);
            if ("rightPic" in chatEvent) rightPics.push(chatEvent.rightPic);
            if ("leftPicLeave" in chatEvent) s1PicLeave.push(chatEvent.leftPicLeave);
            if ("rightPicLeave" in chatEvent) s2PicLeave.push(chatEvent.rightPicLeave);
            if ("hasChoices" in chatEvent) playerHasChoices.push(chatEvent.hasChoices);
            if ("choices" in chatEvent) playerChoices.push(chatEvent.playerChoices);
        }

        if (leftPics[this.page] != null) this.drawSpeaker(leftPics, s1PicLeave);
        if (rightPics[this.page] != null) this.drawSpeaker2(rightPics, s2PicLeave);

        //change dialogue pics here
        this.drawBoxElements(dialogueBoxPic, nameBoxPic, speakerNames);

        if (this.isShowing) {
            if (this.letterCounter < dialogue[this.page].length && !paused) {
                this.letterCounter += letterSpeed;
            }
            if (speakerNames[this.page] != null) {
                colorText(speakerNames[this.page], nameBoxTextX, nameBoxTextY, nameBoxTextColour, nameBoxTextFontFace, nameBoxTextAlign, 1);
            }
            stringCopy = dialogue[this.page].substr(0, this.letterCounter);

            this.findPunctuation(stringCopy);
            
            this.wrapText(stringCopy, textX, textY, maxWidth, lineHeight);
            if (this.letterCounter >= dialogue[this.page].length) {
                //used AnimatedSprites.js 
                textArrowEffect.draw(arrowEffectX, arrowEffectY, 1);
            }
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
    
    this.unPauseWords = function() {
        setTimeout(function () { paused = false; }, 210);
    }

    this.drawSpeaker = function (speakerImg, leaveScreen) {
        canvasContext.drawImage(speakerImg[this.page], this.speakerX, speakerY);
        if (leaveScreen[this.page] && this.speakerX >= this.speakerStartX) {
            this.speakerX -= tweenNegSpeed;
        } else if (!this.isShowing && this.speakerX > this.speakerStartX) {
            this.speakerX -= tweenNegSpeed;
        } else if (this.isShowing && this.speakerX < speakerFinalX) {
            this.speakerX += tweenPosSpeed;
        }
    }

    this.drawSpeaker2 = function (speaker2Img, leaveScreen) {
        canvasContext.drawImage(speaker2Img[this.page], this.speaker2X, speaker2Y);
        if (leaveScreen[this.page] && this.speaker2X <= this.speaker2StartX) {
            this.speaker2X += tweenNegSpeed;
        } else if (!this.isShowing && this.speaker2X < this.speaker2StartX) {
            this.speaker2X += tweenNegSpeed;
        } else if (this.isShowing && this.speaker2X > speaker2FinalX) {
            this.speaker2X -= tweenPosSpeed;
        }
    }

    this.drawBoxElements = function (dialogueBoxImg, nameBoxImg, noNameBox) {
        if (this.isShowing) {
            canvasContext.drawImage(dialogueBoxImg, dialogueBoxX, dialogueBoxY);
            if (noNameBox[this.page] != null) {
                canvasContext.drawImage(nameBoxImg, nameBoxX, nameBoxY);
            }
        }
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
        } else if (this.page < dialogue.length - 1) {
            this.letterCounter = 0;
            this.page++;
        } else if (this.page >= dialogue.length - 1) {
            this.isShowing = false;
            this.letterCounter = 0;
        }
    }

    this.getWordsAndBreaksFromString = function (dialogue) {
        var breaks = dialogue.split("\n"),
            newLines = "";
        for (var i = 0; i < breaks.length; i++) {
            newLines = newLines + breaks[i] + "  Gamkedo  ";
        }
        var words = newLines.split(" ");
        return words;
    }

    this.calculateLineBreak = function (dialogue, x, y, maxWidth, lineHeight) {
        var words = this.getWordsAndBreaksFromString(dialogue),
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

    this.wrapText = function (dialogue, x, y, maxWidth, lineHeight) {
        line = "";
        this.calculateLineBreak(dialogue, x, y, maxWidth, lineHeight);
        colorText(line, x, y, textColour, textFontFace, textAlign, 1);
    }

    /*this.start = function () { //use this for vn style games
        this.page = 0;
        this.isShowing = true;
        this.letterCounter = 0;
    } */

}
