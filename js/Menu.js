const Menu = new (function() {
//-----BEGIN GLOBAL SETTINGS-----//
    const MENU_ROW0 = 200;
    const MENU_ROW1 = 350;
    const MENU_ROW2 = 550;

    let menuColumnPos = [250, 300, 350, 400];

    let wobble = 10;
    let wobbleSpeed = 0.25;
    let cursor1 = 0;

    let keyRepeatWait = 0;

    let classListMenu = ["Play", "Settings", "Help" , "Credits"];
    let classListGame = ["New Game", "Continue", "Select Chapter", "etc"];
    let classListLevels = ["Chapter 1", "Chapter 2", "Chapter 3", "etc"];
    let classListSettings = ["Volume", "Speed", "Controls", "etc"];
    let classListHelp= ["How to play","Control layout", "Shopping", "etc"];
    let classListCredits= ["Credits"];

    const MENU_NUM = 4;

    let INDEX = 0;
    let INDEX_PAGE=0

    let LEVELS_INDEX = 0;

    const MENU_PAGE = 0;
    const SETTINGS_PAGE = 1;
    const HELP_PAGE = 2;
    const CREDITS_PAGE = 3;
    const LEVELS_PAGE = 4;
    let textColour = "blue" ;
    let textFontFace = "20px Arial";

// A super-janky menu input key repeat delay variable
    const KEY_REPEAT_FRAME_DELAY = 10;
//-----END GLOBAL SETTINGS-----//
this.update = function(){
      //Wobble the cursors back and forth
    if (wobble > 13 || wobble < 9) {
      wobbleSpeed *= -1;
    }
        wobble += wobbleSpeed;

    if (keysPressed(KEY_SPACE) || keysPressed(KEY_ENTER)) {
            this.cycle();
            this.checkState();
        }

    if(keysPressed(KEY_UP)) {
            if (keyRepeatWait == 0) {
                cursor1--;
                if (cursor1 >= MENU_NUM){
                    cursor1 = MENU_NUM - 1;
                }
                keyRepeatWait = KEY_REPEAT_FRAME_DELAY;
            }console.log("cursor UP", classListMenu[cursor1]);
        }
    if(keysPressed(KEY_DOWN)) {
            if (keyRepeatWait == 0) {
                cursor1++;
                if (cursor1 < 0){
                    cursor1 = 0;
                }
                keyRepeatWait = KEY_REPEAT_FRAME_DELAY;
            }console.log("cursor DOWN", classListMenu[cursor1]);
        }

    keyRepeatWait = Math.max(0, keyRepeatWait - 1);
}

this.cycle = function (INDEX_PAGE) {
    switch(cursor1) {
        case MENU_PAGE:
            INDEX=classListMenu[cursor1];
           this.draw();
            break;

        case SETTINGS_PAGE:
            INDEX=classListSettings[cursor1];
            this.drawSettings();
            break;

        case HELP_PAGE:
            INDEX=classListHelp[cursor1];
            this.drawHelp();
            break;

        case CREDITS_PAGE:
            INDEX=classListCredits[cursor1];
            this.drawCredits();
            break;

        case LEVELS_PAGE:
            INDEX=classListLevels[cursor1];
            //this.drawLevels();
            break;
     }
};

this.checkState = function(){
    if (classListMenu[cursor1] === "Play"){
        gameIsStarted = true;
    }  
    if (classListMenu[cursor1] === "Settings"){
        //INDEX_PAGE = SETTINGS_PAGE;
    } 
    if (classListMenu[cursor1] === "Help"){
         //INDEX_PAGE = HELP_PAGE;
    } 
    if (classListMenu[cursor1] === "Credits"){
         //INDEX_PAGE = CREDITS_PAGE;
    } 

    if (classListSettings[cursor1] === "Volume"){
        //INDEX_PAGE = VOLUME_PAGE;
    }  
    if (classListSettings[cursor1] === "Speed"){
        //INDEX_PAGE = SPEED_PAGE;
    } 
    if (classListSettings[cursor1] === "Controls"){
          //INDEX_PAGE = CONTROLS_PAGE;
    } 
    if (classListSettings[cursor1] === "etc"){
         //INDEX_PAGE = etc;
    }    

    if (classListHelp[cursor1] === "How to play"){
        //INDEX_PAGE = HOWTOPLAY_PAGE;
    }  
    if (classListHelp[cursor1] === "Control layout"){
        //INDEX_PAGE = CONTROLS_PAGE;
    } 
    if (classListHelp[cursor1] === "Shopping"){
         //INDEX_PAGE = SHOPPING_PAGE;
    } 
    if (classListSettings[cursor1] === "etc"){
         //INDEX_PAGE = etc2;
    }    
}

this.redraw = function (){
            // Clear the screen
    // Note: according to the internet, this approach is faster than using
    // fillRect() or drawImage()
    // see, e.g., https://dzone.com/articles/how-you-clear-your-html5
    canvasContext.save();
    canvasContext.setTransform(1, 0, 0, 1, 0, 0);
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.restore(); 
}

this.draw = function() {
    this.redraw();
        // Draw the menu logo
    canvasContext.drawImage(logoPic, 0, 0);

        //Draw menu options
    canvasContext.drawImage(playPic,MENU_ROW1 -10 ,menuColumnPos[0]);
    canvasContext.drawImage(settingsPic,MENU_ROW1 -20 ,menuColumnPos[1]);
    canvasContext.drawImage(helpPic,MENU_ROW1 -10 ,menuColumnPos[2]);
    canvasContext.drawImage(creditsPic,MENU_ROW1 -18 ,menuColumnPos[3]);

        //Display previous score only if  player has lost
    colorText(MENU_ROW0, menuColumnPos[4],textColour, textFontFace, 'left', 'middle',"Score: " );
        
        //Draw cursor
    canvasContext.drawImage(arrowPic,MENU_ROW1 -80 ,menuColumnPos[cursor1] - wobble - 8);
 }

this.drawSettings = function() {
    this.redraw();
    canvasContext.drawImage(logoPic, 0, 0);
    colorText(260, 40,textColour, textFontFace, 'left', 'middle',"WARPED RADAR");
    colorText(263, 40,textColour, textFontFace, 'left', 'middle',"WARPED RADAR");

        //Draw menu options
    colorText(MENU_ROW1, menuColumnPos[0],textColour, textFontFace, 'left', 'middle',"Volume");
    colorText(MENU_ROW1, menuColumnPos[1],textColour, textFontFace, 'left', 'middle',"Speed");
    colorText(MENU_ROW1, menuColumnPos[2],textColour, textFontFace, 'left', 'middle',"Controls");
    colorText(MENU_ROW1, menuColumnPos[3],textColour, textFontFace, 'left', 'middle',"etc");

        //Display previous score
    colorText(MENU_ROW0, menuColumnPos[4],textColour, textFontFace, 'left', 'middle',"Score: " );

        //Draw cursor
    canvasContext.drawImage(arrowPic,MENU_ROW1 -80 ,menuColumnPos[cursor1] - wobble - 8);
 };

 this.drawHelp = function() {
    this.redraw();
    canvasContext.drawImage(logoPic, 0, 0);
    colorText(260, 40,textColour, textFontFace, 'left', 'middle',"WARPED RADAR");
    colorText(263, 40,textColour, textFontFace, 'left', 'middle',"WARPED RADAR");

        //Draw menu options
    colorText(MENU_ROW1, menuColumnPos[0],textColour, textFontFace, 'left', 'middle',"How to play");
    colorText(MENU_ROW1, menuColumnPos[1],textColour, textFontFace, 'left', 'middle',"Control Layout");
    colorText(MENU_ROW1, menuColumnPos[2],textColour, textFontFace, 'left', 'middle',"Shopping");
    colorText(MENU_ROW1, menuColumnPos[3],textColour, textFontFace, 'left', 'middle',"etc");

        //Display previous score
    colorText(MENU_ROW0, menuColumnPos[4],textColour, textFontFace, 'left', 'middle',"Score: " );

        //Draw cursor
    canvasContext.drawImage(arrowPic,MENU_ROW1 -80 ,menuColumnPos[cursor1] - wobble - 8);
 };




this.drawCredits = function() {
    this.redraw();
    canvasContext.drawImage(logoPic, 0, 0);
    colorText(260, 40,textColour, textFontFace, 'left', 'middle',"WARPED RADAR");
    colorText(263, 40,textColour, textFontFace, 'left', 'middle',"WARPED RADAR");

        //Draw menu options
        for (i=0; i<classListMenu[i]; i++){
    colorText(MENU_ROW1, menuColumnPos[i],textColour, textFontFace, 'left', 'middle',classListMenu[i]);
        }

        //Display previous score
    colorText(MENU_ROW0, menuColumnPos[4],textColour, textFontFace, 'left', 'middle',"Score: " );

        //Draw cursor
    canvasContext.drawImage(arrowPic,MENU_ROW1 -80 ,menuColumnPos[cursor1] - wobble - 8);
 };
})(); 