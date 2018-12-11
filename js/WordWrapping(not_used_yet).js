
// Text wrapping module for Javascript/HTML5 on Canvas
//Made by Remy "OmegaLarmor" "RayTeX" Lapointe for Gamkedo Club projects! :)



////////////////        OPTIONS          //////////////////////

/*The options include:

width/height : Given as argument since there is no dynamic fitting based on box img (pixels) (make a 9-slice editor if you want :D)
padx/pady : In pixels, defaults to 5
numlines : Number of lines that have to be fit in the box. Currently this doesn't happen automatically, therefore be careful to set your fontsize appropriately!
fontsize : In pixels, defaults to 10
textcolor : Self-explanatory.

Current limitations:
No message queue
No multiple choice
Left align only
No bold, italic, font changing mid-text
No actual typing effect yet!

If you wanna help extending this module, send me a message! :D
*/

let messageActive = false;

function MessageBox (x, y, options) {

    //////////////////           Initialization           //////////
    if (!options) {options = {}; } //so that we can access the fields without causing an error

    this.isAlive = false;

    let x = x;
    let y = y;
    let width = options.width;
    let height = options.height;
    let padx = options.padx || 5;
    let pady = options.pady || 5;
    let numlines = options.numlines || 2;
    let font = options.font;
    let fontsize = options.fontsize || 10;
    let textcolor = options.textcolor || "black";

    this.type = "Message Box"; //not used (yet?)
    this.img = options.img;

    if (!options.width) {
        if (this.img) { width = this.img.width; }
        else { width = 100; }
    }
    if (!options.height) {
        if (this.img) { height = this.img.height; }
        else { height = 100; }
    }
/*
    if (!options.padx)     { padx = 5;}
    if (!options.pady) { pady = 5; }
    if (!options.numlines) { numlines = 2; }

    if (!options.fontsize) { fontsize = 10; } //height in pixels
    if (!options.textcolor) { textcolor = "black"; }
    */

    let text = "";
    //let remainingWords = [];
    let spliceIndex = 0;
    let standbyForInput = false;
    let messageDone = false;
    //let playerInput = holdEnter;
    
    let delayBetweenPresses = 5;
    let delayPressesTick = 5; //frames of waiting that prevent the player from multi skipping when hitting the button

    let currentx;
    let currentLine;
    let words;

    //this.subject = new Subject(); //optional, if using the Observer pattern to notify entities that the message is over

    // String argument. Auto-generates text layout
    this.beginText = function (newText) {

        this.isAlive = true;
        //currentLine = 0;
        messageDone = false;
        text = newText;
        words = text.split(" ");
    }
    /*
    this.getCurrentText = function(){
        console.log("Text:" + words);
    }*/
    this.update = function () {

        if (!this.isAlive) return; //our box is inactive

        messageActive = true;

        this.drawWords(); //draw the current message

        if (standbyForInput) {

            //this.getText();
            delayPressesTick--;
            if ((holdEnter || holdSpacebar) && delayPressesTick <= 0) {
                standbyForInput = false;
                //our message is over, if we had an event system we would declare it there and call the appropriate function :P
                if (messageDone) {
                    messageDone = false;
                    this.isAlive = false;
                    messageActive = false;
                    this.afterMessage(); //does whatever we said would happen once done
                    didInteraction(); //adds a delay so that the player can't immediately input another NPC interaction
                }
                words.splice(0, spliceIndex);
                delayPressesTick = delayBetweenPresses; //frames until the player can skip to following text
            }
        }

    }
    this.drawBox = function () {
        canvasContext.drawImage(this.img, x, y);
    }

    let generateLines = function() {

        allLines = [[]]; //reset our lines array
        currentLine = 0;

        for (i = 0; i < words.length; i++) {
           
            //catches the end of the message string
            if (i === words.length - 1) {
                lastWord = true;
            }

            let wordWidth = canvasContext.measureText(words[i]).width;

            //add to current line if it fits
            if (words[i] === "\n") {
                if (currentLine+1 < numlines) {
                    newLine(); //we still have space for a new line
                }
                else if (currentLine+1 === numlines) {
                    stopDrawing(i + 1); //+1 to cut the line skip
                    break;
                }
            }//for line skips, \n needs to be surrounded by spaces!!! :O

            // "\b" allows for messages that are cut short, like a character saying 'Hey!' 
            else if (words[i] === "\b") {
                stopDrawing(i + 1);
                break;
            }


            if (currentx + wordWidth < x + width - padx) {

                //colorText(words[i], currentx, y + pady + fontsize * (currentline), textcolor);

                allLines[currentLine].push(words[i]);
                currentx = currentx + wordWidth + spaceWidth;
                if (lastWord) {
                    messageDone = true;
                    standbyForInput = true;
                }

            }
        }
    }

    this.drawLines = function () {

        for (i = 0; i < allLines.length; i++) {

        }
    }

    this.drawWords = function () {

        canvasContext.font = "normal " + fontsize + "px" + " " + font;
        currentx = padx + x; //start at edge of box + padding
        currentLine = 1;

        let lastWord = false;
        let fits = false;

        let spaceWidth = canvasContext.measureText(" ").width;

        for (i = 0; i < words.length; i++) {
            let wordWidth = canvasContext.measureText(words[i]).width;

            //catches the end of the message
            if (i === words.length - 1) {
                lastWord = true;
            }

            //draw on current line if it fits
            if (words[i] === "\n") {
                if (currentLine < numlines) {
                    newLine();
                }
                else if (currentLine === numlines) {
                    stopDrawing(i + 1); //+1 to cut the line skip
                    break;
                }
            }//for line skips, \n needs to be surrounded by spaces :O
            else if (words[i] === "\b") {
                stopDrawing(i + 1);
                break;
            }
            if (currentx + wordWidth < x + width - padx) {
                fits = true
                    colorText(words[i], currentx, y + pady + fontsize * (currentLine), textcolor);
                    currentx = currentx + wordWidth + spaceWidth;
                if (lastWord && fits) {
                    messageDone = true;
                    standbyForInput = true;
                }
            }
            //if we have no space but lines left, skip to next
            else if (currentLine < numlines) {
                fits = true;
                newLine();
                colorText(words[i], currentx, y + pady + fontsize * (currentLine), textcolor);
                currentx = currentx + wordWidth + spaceWidth;
                if (lastWord && fits) {
                    messageDone = true;
                    standbyForInput = true;
                }
            }
            //we have no more space! Gotta press something
            else {
                stopDrawing(i); //we're gonna cut "words" at "i" when we press a given key
                break;
            }

        }
    }

    //Meant to be abstract, ie can be implemented for each box (simple behaviour only)
    this.afterMessageDone = function () {
        return;
    }

    let newLine = function () {
        currentx = padx + x;
        currentLine++;
    }


    let stopDrawing = function (i) {
        standbyForInput = true;
        spliceIndex = i;
    }

    this.changeFont = function(newFont){
        font = newFont; //WOW!!!!
    }
    
}
/*
function drawMessagesIfAlive() {
    messageBoxes.forEach(function (box) {
        if (box.isAlive && box.img) { box.drawBox(); }
    })
}
function updateMessages() {
    messageBoxes.forEach(function (box) {
        if (box.isAlive) { box.update(); }
    })
}
*/
// Example
pokeboxOptions = {
    width: 800,
    height: 65 * 4,
    padx: 20,
    pady: 20,
    numlines: 5,
    textcolor: "#4f2b24",
    font: "Consolas",
    fontsize: 40,
    //img: yourPicHere

}

