const Menu = new (function() {
//-----BEGIN GLOBAL SETTINGS-----//
    
    let MENU_ROW = [330, 320, 320, 330, 330];
    let menuColumnPos = [250, 300, 350, 400, 450];

    let cursor1 = 0;
    let currentPage = 0;
    let keyRepeatWait = 0;

    let classListMenu = ["Story", "Continue", "Options", "Guide" , "Credits"];
    let classListLevels = ["Episode 1", "Episode 2", "Episode 3", "Back"];
    let classListContinue = ["Load", "Save", "Episodes", "Back"];
    let classListSettings = ["Volume", "Controls", "Back"];
    let classListHelp= ["How to play","Control layout", "Back"];
    let classListCredits= ['Kise' , "Back"];


    const MENU_PAGE = 0;
    //const CONTINUE_PAGE = 1;
    const OPTIONS_PAGE = 2;
    const GUIDE_PAGE = 3;
    const CREDITS_PAGE = 4;

    let menuPageText = [classListMenu, classListContinue, classListSettings, classListHelp, classListCredits, classListLevels];
    let textColour = "pink" ;
    let textFontFace = "30px Impact";

// A super-janky menu input key repeat delay variable
    const KEY_REPEAT_FRAME_DELAY = 10;
//-----END GLOBAL SETTINGS-----//
this.update = function(){
      //Wobble the cursors back and forth
    if (keyRepeatWait == 0){
       if (keysPressed(KEY_SPACE) || keysPressed(KEY_ENTER)) {
            this.checkState();
             keyRepeatWait = KEY_REPEAT_FRAME_DELAY;
        }

        if(keysPressed(KEY_UP)) {
            cursor1--;
           if (cursor1 < 0){
                cursor1 = 0;
            }
            keyRepeatWait = KEY_REPEAT_FRAME_DELAY;
        }
        if(keysPressed(KEY_DOWN)) {
            cursor1++;
            if (cursor1 >= menuPageText[currentPage].length){
                cursor1 = menuPageText[currentPage].length - 1;
            }
            keyRepeatWait = KEY_REPEAT_FRAME_DELAY;
        } 
    }
    keyRepeatWait = Math.max(0, keyRepeatWait - 1);
}


this.checkState = function(){
    if (menuPageText[currentPage][cursor1] === "Story"){
        gameIsStarted = true;
    }  
    if (menuPageText[currentPage][cursor1] === "Options"){
        cursor1 = 0;
        currentPage = OPTIONS_PAGE; 
    } 
    if (menuPageText[currentPage][cursor1] === "Guide"){
        cursor1 = 0;
        currentPage  = GUIDE_PAGE;
    } 
    if (menuPageText[currentPage][cursor1] === "Credits"){
        cursor1 = 0;
        currentPage  = CREDITS_PAGE;    
    } 

    if (menuPageText[currentPage][cursor1] === "Volume"){
        console.log("TODO implement volume change");   
    } 
    if (menuPageText[currentPage][cursor1] === "Controls"){ 
        console.log("TODO Added Controls change"); 
    } 
    if (menuPageText[currentPage][cursor1] === "Back"){
        currentPage  = MENU_PAGE;
    }    

    if (menuPageText[currentPage][cursor1] === "How to play"){ 
        //Handle help screen differently;
    }  
    if (menuPageText[currentPage][cursor1] === "Control layout"){
        //Handle Control layout screen differently;
    }

    if (cursor1 >= menuPageText[currentPage].length){//if we're going to shorter menu
        cursor1 = menuPageText[currentPage].length - 1;
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
    canvasContext.drawImage(arrowPic,MENU_ROW[0] -80 ,menuColumnPos[cursor1] - 40);
    
 }



})(); 