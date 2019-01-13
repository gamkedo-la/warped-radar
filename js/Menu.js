const Menu = new (function() {
    const MENU_PAGE = 0;
    const CONTINUE_PAGE = 1;
    const OPTIONS_PAGE = 2;
    const GUIDE_PAGE = 3;
    const CREDITS_PAGE = 4;
    const EPISODE_PAGE = 5;

    let itemsX = 340;
    let topItemY = 260;
    let itemsWidth = 300;
    let rowHeight = 40;

    let cursor1 = 0;
    let currentPage = 0;
    let keyRepeatWait = 0;

    let textFontFace = "30px Impact";
    let textColour = "pink" ;

    let menuList = ["Story", "Continue", "Options", "Guide" , "Credits"];
    let episodeList = ["Episode 1", "Episode 2", "Episode 3", "Back"];
    let continueList = ["Remember", "Episodes", "Back"];
    let optionsList = ["Volume", "Controls", "Back"];
    let guideList= ["Gameplay","Gamepad", "Back"];
    let creditsList =["Kise: Project lead", "BackSpace"];

    let menuPageText = [menuList, continueList, optionsList, guideList, creditsList, episodeList];
    // A super-janky menu input key repeat delay variable
    const KEY_REPEAT_FRAME_DELAY = 10;

    this.update = function() {
        //Wobble the cursors back and forth
        if (keyRepeatWait == 0) {
            if (keysPressed(KEY_SPACE) || keysPressed(KEY_ENTER)) {
                this.checkState();
                keyRepeatWait = KEY_REPEAT_FRAME_DELAY;
            } else if (keysPressed(KEY_BACKSPACE)) {
                currentPage = MENU_PAGE;
                cursor1 = 0;
            }            
            if(keysPressed(KEY_UP)) {
                cursor1--;
                if (cursor1 < 0) {
                    cursor1 = menuPageText[currentPage].length - 1;
                }
                keyRepeatWait = KEY_REPEAT_FRAME_DELAY;
            }
            if(keysPressed(KEY_DOWN)) {
                cursor1++;
                if (cursor1 >= menuPageText[currentPage].length) {
                    cursor1 = 0;
                }                
                keyRepeatWait = KEY_REPEAT_FRAME_DELAY;
            } 
        }
        keyRepeatWait = Math.max(0, keyRepeatWait - 1);
    };


    this.checkState = function() {
        switch (menuPageText[currentPage][cursor1]) {
            case "Story":
                gameIsStarted = true;
                cursor1 = 0;
                break;
            case "Continue":
                currentPage = CONTINUE_PAGE;
                cursor1 = 0;
                break;
            case "Options": 
                cursor1 = 0;
                currentPage = OPTIONS_PAGE; 
                break;
            case "Guide":
                cursor1 = 0;
                currentPage  = GUIDE_PAGE;
                break;
            case "Credits":
                cursor1 = 0;
                currentPage  = CREDITS_PAGE;    
                break;

            case "Volume":
                console.log("TODO implement volume changer");   
                break;
            case "Controls":
                console.log("TODO Added Controls changer");   
                break;
            case "How to play":
                console.log("TODO implement how to play");
                break;
            case "Control layout":
                console.log("TODO implement control layout");
                break;
            case "Back":
                currentPage  = MENU_PAGE; 
                cursor1 = 0;
                break;
            default:
                break;
            //if (cursor1 >= menuPageText[currentPage].length){//if we're going to shorter menu
            //   cursor1 = menuPageText[currentPage].length - 1;  
        }
    };

    this.redraw = function () {
        // Clear the screen
        // Note: according to the internet, this approach is faster than using
        // fillRect() or drawImage()
        // see, e.g., https://dzone.com/articles/how-you-clear-your-html5
        canvasContext.save();
        canvasContext.setTransform(1, 0, 0, 1, 0, 0);
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.restore(); 
    };


    this.draw = function() {
        this.redraw();
        //Draw cursor
        canvasContext.drawImage(arrowPic,itemsX -55 ,topItemY + (cursor1 * rowHeight) -42);
        if(currentPage == CREDITS_PAGE) {
            colorRect( 0, 0, gameCanvas.width, gameCanvas.height, "black", 0.2);
            let creditsX = 11;
            let creditsTopY = 25;
            let creditsLineSkipY = 55;
            for (let i = 0; i < creditsList.length; i++) {
                colorText(creditsList[i],creditsX, creditsTopY + creditsLineSkipY * i, textColour, textFontFace, 'left', 'top');
            }    
        } else {
            canvasContext.drawImage(logoPic, 0, 0);
            for (let i=0; i<menuPageText[currentPage].length; i++){
                colorText(menuPageText[currentPage][i], itemsX,topItemY + rowHeight * i,textColour, textFontFace, 'left', 'top');
            }   
        }  
    };       
})(); 