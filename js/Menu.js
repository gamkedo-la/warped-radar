const Menu = new (function() {
//-----BEGIN GLOBAL SETTINGS-----//
    
    let MENU_ROW = [340, 330, 340, 333];
    let menuColumnPos = [250, 300, 350, 400];

    let wobble = 10;
    let wobbleSpeed = 0.25;
    let cursor1 = 0;
    let currentPage = 0;
    let keyRepeatWait = 0;

    let classListMenu = ["Play", "Settings", "Help" , "Credits"];
    let classListGame = ["New Game", "Continue", "Select Chapter", "Back"];
    let classListLevels = ["Chapter 1", "Chapter 2", "Chapter 3", "Back"];
    let classListSettings = ["Volume", "Speed", "Controls", "Back"];
    let classListHelp= ["How to play","Control layout", "Shopping", "Back"];
    let classListCredits= ['Kise' , "Back"];


    const MENU_PAGE = 0;
    const SETTINGS_PAGE = 1;
    const HELP_PAGE = 2;
    const CREDITS_PAGE = 3;
    const LEVELS_PAGE = 4;

    let menuPageText = [classListMenu, classListSettings, classListHelp, classListCredits, classListLevels];
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
            //this.cycle();
            this.checkState();
            
        }

    if(keysPressed(KEY_UP)) {
            if (keyRepeatWait == 0) {
                cursor1--;
               if (cursor1 < 0){
                    cursor1 = 0;
                }
                keyRepeatWait = KEY_REPEAT_FRAME_DELAY;
            }console.log("cursor UP", classListMenu[cursor1]);
        }
    if(keysPressed(KEY_DOWN)) {
            if (keyRepeatWait == 0) {
                cursor1++;
                 if (cursor1 >= menuPageText[currentPage].length){
                    cursor1 = menuPageText[currentPage].length - 1;
                }
                keyRepeatWait = KEY_REPEAT_FRAME_DELAY;
            }console.log("cursor DOWN", classListMenu[cursor1]);
        }

    keyRepeatWait = Math.max(0, keyRepeatWait - 1);
}


this.checkState = function(){
    if (classListMenu[cursor1] === "Play"){
        gameIsStarted = true;
    }  
    if (classListMenu[cursor1] === "Settings"){
        currentPage = SETTINGS_PAGE;
        //INDEX_PAGE = SETTINGS_PAGE;
    } 
    if (classListMenu[cursor1] === "Help"){
        currentPage  = HELP_PAGE;
         //INDEX_PAGE = HELP_PAGE;;
    } 
    if (classListMenu[cursor1] === "Credits"){
        currentPage  = CREDITS_PAGE;
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
    if (classListSettings[cursor1] === "Back"){
        currentPage  = MENU_PAGE;
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
    if (classListSettings[cursor1] === "Back"){
        currentPage  = MENU_PAGE;
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

    for (let i=0; i<menuPageText[currentPage].length; i++){
     colorText(menuPageText[currentPage][i],MENU_ROW[i], menuColumnPos[i],textColour, textFontFace, 'left', 'middle'); 
    }
    //Draw menu options
    /*
    canvasContext.drawImage(playPic,MENU_ROW[0] ,menuColumnPos[0]);
    canvasContext.drawImage(settingsPic,MENU_ROW[1],menuColumnPos[1]);
    canvasContext.drawImage(helpPic,MENU_ROW[2] ,menuColumnPos[2]);
    canvasContext.drawImage(creditsPic,MENU_ROW[3] ,menuColumnPos[3]);
    */
        //Display previous score only if  player has lost
    //colorText("Score: ",MENU_ROW[0], menuColumnPos[4],textColour, textFontFace, 'left', 'middle' );
        
        //Draw cursor
    canvasContext.drawImage(arrowPic,MENU_ROW[0] -80 ,menuColumnPos[cursor1] - wobble - 8);
 }



})(); 