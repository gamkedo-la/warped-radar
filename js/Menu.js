const Menu = new (function() {
    textFontFace = "30px consolas";
    let textColour = "white";
    let textAlign = "left";
   

const MENU_ROW0 = 150;
const MENU_ROW1 = 300;
const MENU_ROW2 = 500;

let menuColumnPos = [250, 300, 350, 400, 450];

let wobble = 10;
let wobbleSpeed = 0.25;
let cursor1 = 0;
let cursor2 = 0;

//-----BEGIN GLOBAL SETTINGS-----//


let classListGame = ["New Game", "Continue", "Choose Level"];
const CLASS_NEWGAME = 0;
const CLASS_CONTINUE = 1;
const CLASS_LEVELS= 2;


let classListLevels = ["Level 1", "Level 2", "Level 3"];
const CLASS_LEVEL1 = 0;
const CLASS_LEVEL2 = 1;
const CLASS_LEVEL3 = 2;


let classListSettings = ["Volume", "Speed", "Controls"];
const CLASS_VOLUME = 0;
const CLASS_SPEED = 1;
const CLASS_CONTROLS = 2;

let classListHelp= ["Layout", "How to play", "Shopping"];
const CLASS_LAYOUT = 0;
const CLASS_HOWTOPLAY = 1;
const CLASS_SHOPPING = 2;

let classListCredits= ["Credits"];
const CLASS_CREDITS = 0;



const MENU_CLASS = 0;
const MENU_HAND_RIGHT = 1;
const MENU_HAND_LEFT = 2;
const MENU_CONTROL = 3;
const MENU_NUM = 4;
//-----END GLOBAL SETTINGS-----//

this.draw = function() {
    console.log("menu Started");
    canvasContext.drawImage(logoPic, 0, 0);

        //Wobble the cursors back and forth
    if (wobble > 13 || wobble < 9) {
      wobbleSpeed *= -1;
    }
        wobble += wobbleSpeed;
        //Draw menu options
    colorText(MENU_ROW1, menuColumnPos[0],textColour, textFontFace, 'left', 'middle',"Play");
    canvasContext.drawImage(playPic,MENU_ROW1 -20 ,menuColumnPos[0]);
    colorText(MENU_ROW1, menuColumnPos[1],textColour, textFontFace, 'left', 'middle',"Settings");
    canvasContext.drawImage(settingsPic,MENU_ROW1 -20 ,menuColumnPos[1]);
    colorText(MENU_ROW1, menuColumnPos[2],textColour, textFontFace, 'left', 'middle',"Help",classListHelp[classListHelp]);
    canvasContext.drawImage(helpPic,MENU_ROW1 -20 ,menuColumnPos[2]);
    colorText(MENU_ROW1, menuColumnPos[3],textColour, textFontFace, 'left', 'middle',"Credits",classListCredits[classListCredits]);
    canvasContext.drawImage(creditsPic,MENU_ROW1 -20 ,menuColumnPos[3]);

        //Display previous score only if  player has lost
    
    colorText(MENU_ROW0, menuColumnPos[4],textColour, textFontFace, 'left', 'middle',"Score: " );
        
        //Draw cursor
    canvasContext.drawImage(arrowPic,MENU_ROW1 -80 ,menuColumnPos[cursor1] - wobble);
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

})(); 