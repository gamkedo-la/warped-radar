const Menu = new (function() {
    textFontFace = "30px consolas";
    let textColour = "white";
    let textAlign = "left";
   

const MENU_ROW0 = 200;
const MENU_ROW1 = 350;
const MENU_ROW2 = 550;

let menuColumnPos = [250, 300, 350, 400, 450];

let wobble = 10;
let wobbleSpeed = 0.25;
let cursor1 = 0;


//-----BEGIN GLOBAL SETTINGS-----//
let classListMenu = ["Play", "Setting", "Help" , "Credits"];
const CLASS_PLAY = 0;
const CLASS_SETTINGS = 1;
const CLASS_HELP= 2;
const CLASS_CREDITS= 3;
const MENU_NUM = 4;

let classListGame = ["New Game+", "Continue", "Select Chapter"];
const CLASS_NEWGAME = 0;
const CLASS_CONTINUE = 1;
const CLASS_LEVELS= 2;
const GAME_NUM = 4;

let classListLevels = ["Chapter 1", "Chapter 2", "Chapter 3"];
const CLASS_LEVEL1 = 0;
const CLASS_LEVEL2 = 1;
const CLASS_LEVEL3 = 2;
const LEVELS_NUM = 4;

let classListSettings = ["Volume", "Speed", "Controls"];
const CLASS_VOLUME = 0;
const CLASS_SPEED = 1;
const CLASS_CONTROLS = 2;
const SETTINGS_NUM = 4;

let classListHelp= ["Layout", "How to play", "Shopping"];
const CLASS_LAYOUT = 0;
const CLASS_HOWTOPLAY = 1;
const CLASS_SHOPPING = 2;
const HELP_NUM = 4;

let classListCredits= ["Credits"];


let MENU_CLASS_INDEX = 0;
let SETTINGS_CLASS_INDEX = 0;
let HELP_CLASS_INDEX = 0;
let CREDITS_CLASS_INDEX = 0;

const MENU_CLASS = 0;
const SETTINGS_CLASS = 1;
const HELP_CLASS = 2;
const CREDITS_CLASS = 3;

//-----END GLOBAL SETTINGS-----//

this.draw = function() {
    clearScreen();
    console.log("menu Started");
    canvasContext.drawImage(logoPic, 0, 0);

        //Wobble the cursors back and forth
    if (wobble > 13 || wobble < 9) {
      wobbleSpeed *= -1;
    }
        wobble += wobbleSpeed;
        //Draw menu options
    colorText(MENU_ROW1, menuColumnPos[0],textColour, textFontFace, 'left', 'middle',"New Game");
    canvasContext.drawImage(playPic,MENU_ROW1 -10 ,menuColumnPos[0]);
    colorText(MENU_ROW1, menuColumnPos[1],textColour, textFontFace, 'left', 'middle',"Settings");
    canvasContext.drawImage(settingsPic,MENU_ROW1 -20 ,menuColumnPos[1]);
    colorText(MENU_ROW1, menuColumnPos[2],textColour, textFontFace, 'left', 'middle',"Help",classListHelp[classListHelp]);
    canvasContext.drawImage(helpPic,MENU_ROW1 -10 ,menuColumnPos[2]);
    colorText(MENU_ROW1, menuColumnPos[3],textColour, textFontFace, 'left', 'middle',"Credits",classListCredits[classListCredits]);
    canvasContext.drawImage(creditsPic,MENU_ROW1 -18 ,menuColumnPos[3]);

        //Display previous score only if  player has lost
    colorText(MENU_ROW0, menuColumnPos[4],textColour, textFontFace, 'left', 'middle',"Score: " );
        
        //Draw cursor
    canvasContext.drawImage(arrowPic,MENU_ROW1 -80 ,menuColumnPos[cursor1] - wobble - 8);
 }

this.MenuCycle = function (inDir) {
    switch(cursor1) {
        case MENU_CLASS:
            MENU_CLASS_INDEX+=inDir;
            if (MENU_CLASS_Index >= MENU_NUM) {
                MENU_CLASS_Index = 0;
            }
            if (MENU_CLASS_Index < 0) {
                MENU_CLASS_Index = MENU_NUM-1;
            }
            break;

        case SETTINGS_CLASS:
            SETTINGS_CLASS_INDEX+=inDir;
            if (SETTINGS_CLASS_INDEX >= SETTINGS_NUM) {
                SETTINGS_CLASS_INDEX = 0;
            }
            if (SETTINGS_CLASS_INDEX < 0) {
                SETTINGS_CLASS_INDEX = SETTINGS_NUM-1;
            }
            break;

        case HELP_CLASS:
            HELP_CLASS_INDEX+=inDir;
            if (HELP_CLASS_INDEX >= HELP_NUM) {
                HELP_CLASS_INDEX = 0;
            }
            if (HELP_CLASS_INDEX < 0) {
                HELP_CLASS_INDEX = HELP_NUM-1;
            }
            break;

        case LEVELS_CLASS:
            LEVELS_CLASS_INDEX+=inDir;
            if (LEVELS_CLASS_INDEX >= LEVELS_NUM) {
                LEVELS_CLASS_INDEX = 0;
            }
            if (LEVELS_CLASS_INDEX < 0) {
                LEVELS_CLASS_INDEX = LEVELS_NUM-1;
            }
            break;
    }
}

function keyPressed(evt) {
    keySet(evt, true);

    evt.preventDefault();
}

function keyReleased(evt) {
    keySet(evt, false);
}

})(); 