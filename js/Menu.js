const Menu = new (function() {
    const MENU_PAGE = 0;
    const CONTINUE_PAGE = 1;
    const OPTIONS_PAGE = 2;
    const GUIDE_PAGE = 3;
    const CREDITS_PAGE = 4;
    const EPISODE_PAGE = 5;
    const PAUSED_PAGE = 6;
    const GAMEPLAY_PAGE = 7;

    let itemsX = 540;
    let topItemY = 240;
    let itemsWidth = 300;
    let rowHeight = 40;

    let cursor1 = 0;
    let currentPage = 0;
    let keyRepeatWait = 0;

    let textFontFace = "40px Kelly Slab";
    let creditsFontFace = "10px Kelly Slab";
    let textColour = "#5a8488" ;

    let menuList = ["Story", "Options", "Guide" , "Credits"];
    let episodeList = ["Episode 1", "Episode 2", "Episode 3", "Back"];
    let continueList = ["Remember", "Episodes", "Back"];
    let optionsList = ["Mute", "Back"];
    let guideList= ["Gameplay","Gamepad", "Back"]; //skip
    let pausedList =['resume', 'mute'];
    let creditsList =[
"                                                                                              WARPED RADAR TEAM",
" ",
"Kise - Main concept and project co-lead, base functionality for prototype, John character, dialog system code and original format, inventory code, pixel doubling,",
"  panning camera, room loading, dialog mouth animations, animation code, level editor, store front art, multiple choice dialog feature, cutscene code, John and Rose dialog portraits,",
"  fade effect, Julie's store song",
"Ryan Malm - Project co-lead, city tile and building art, decorative detail tiles art, overworld and interiors level design, depth layer layout, doorway arch effect, story revision,",
"  bloom implementation, Tiled integration, drawing optimization code, assorted bugfixes",
"H Trayford - Dialog editor (development authoring tool), tile and object culling render optimizations, character-to-character collisions, depth sorting implementation,",
"  enter/exit room functionality, Tiled integration, character integration (Rose, Julie, Uncle Dave, Agent Jen, Fusion, Cat Man, Cop, Detective Dan), event manager, bug fixes,",
"  conversation tweaks, obtainable and interactive item implementation, character motion fixes, NPC movement implementation, obtainable items improvements, accusation functionality",
"Stebs - City background song, inventory items including motherboard and memory chip (early design), web audio implementation, code reorganization, car horns and other",
"  ambient city noise, volume mixing, song integration, additional bug fixes",
"Jeff \"Axphin\" Hanlon - Character designer template, John directional animations, Rose directional animations, speed tuning, welcome sign, Dave sprite, cat portrait",
"  sprite, fusion character portrait, opening story",
"Vaan Hope Khani - Debug mode, pause, vehicle art, menu code, custom font selection, furniture art, mute functionality",
"Christer \"McFunkypants\" Kaitila - WASD and gamepad input, weather effects, agent portrait, animation bugfix, dust particles, diagonal wall sliding, collision optimizations, car",
"  movement, intro and endgame text scroller, talking text fade, tile gap fix",
"Randy Tan Shaoxian - responsive CSS, level editor improvements, input code improvements, additional refactoring and cutscene code organization, cutscene timing tuning",
"Jaime Rivas - Wall collision code, cat character sprite",
"Marc Silva - Agent sprite animations, Cop sprite animations, Cop portrait",
"Michelly Oliveira - Dialog starts when near character, pause when clicked away, in-game labels implementation, help screen, debug text",
"Chris Markle - End Scene/Credits roll song, Main Menu song, Mysterious-sounding song, mechanical grinding sounds",
"Charlene A. - Julie portrait, Julie sprite animations",
"Trolzie - Screen transition effects, main menu and game start music integration, cursor fixes",
"Praneil Kamat - Inventory text wrap, inventory audio fix, browser sound compatibility improvements",
"Klaim (A. Joël Lamotte) - John's room/intro song, and Dave's House song",
"Cecilia Borges - Serendipity song",
"Shaun Lindsley - Synthwave song, busy street sounds",
"Kirvee - Walking speed adjustments, text editing",
"Terrence McDonnell - Collision debugging visualization",
"Jeremy Jackson - Item pickup notification",
"Brian J. Boucher - Street lamp, fixed dialog/collision related bug",
"Rémy Lapointe - Additional word wrap fixes",
"Chris DeLeon - Title and ending voxel renders, compiled credits",
"  ",
"                              Game created by worldwide collaborators in Gamkedo Club -- for more info on joining or free games to play visit gamkedo.com",
"  ",
"                                                                               CLICK ANYWHERE TO RETURN TO MAIN MENU"
    ];
    let gameplayList = ["      Move John", "W/Up Arrow: up", "D/Right Arrow: right", "S/Down Arrow: down", "A/Left Arrow: left", "     Game Actions", "P: pause/resume", "Enter/Space: interact", "Z: inventory"];

    let menuPageText = [menuList, continueList, optionsList, guideList, creditsList, episodeList, pausedList, gameplayList];
    // A super-janky menu input key repeat delay variable
    const KEY_REPEAT_FRAME_DELAY = 10;

    this.menuMouse = function(){
     for (let i = 0; i < menuPageText[currentPage].length; i++) {
        if(mouseX > itemsX && mouseX < itemsX + itemsWidth
            && mouseY > topItemY + (i * rowHeight - 40) && mouseY < topItemY + (i+1) * rowHeight) {
            cursor1 = i;
        }
      }
    }
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
                navigationSound.play();
                if (cursor1 < 0) {
                    cursor1 = menuPageText[currentPage].length - 1;
                }
                keyRepeatWait = KEY_REPEAT_FRAME_DELAY;
            }
            if(keysPressed(KEY_DOWN)) {
                cursor1++;
                navigationSound.play();
                if (cursor1 >= menuPageText[currentPage].length) {
                    cursor1 = 0;
                }
                keyRepeatWait = KEY_REPEAT_FRAME_DELAY;
            }
        }
        keyRepeatWait = Math.max(0, keyRepeatWait - 1);
    };

    this.checkState = function() {
        if (currentPage == GAMEPLAY_PAGE || currentPage == CREDITS_PAGE) {
            currentPage = MENU_PAGE;
            cursor1 =0;
            return;
         }
        switch (menuPageText[currentPage][cursor1]) {
            case "Story":
                cursor1 = 0;
                delayedUIChoiceSound();
                let transitionDuration = 3000;
                PageTransition.init({
                    duration:transitionDuration,
                    pixelW: 100,
                    pixelH: 2,
                });
                setTimeout(() => {
                    gameIsStarted = true;

                }, transitionDuration*0.275); // show new scene halfway through duration, so it can be seen as transition is ending.
                // trigger intro cinematic
                setTimeout(Intros.start(introText),transitionDuration);
                warpedRadarBackgroundMusic.startOrStopMusic();
                johns_house_song.play();
                johns_house_song.fadingIn = true;


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
                currentPage = GAMEPLAY_PAGE;
                break;
            case "Credits":
                cursor1 = 0;
                currentPage  = CREDITS_PAGE;
                break;

            case "Mute":
                toggleMute();
                break;
            case "Controls":
//                console.log("TODO Added Controls changer");
                break;
            case "Gameplay":
                cursor1 = 0;
                currentPage = GAMEPLAY_PAGE;
                break;
            case "Control layout":
//                console.log("TODO implement control layout");
                break;
            case "Back":
                currentPage  = MENU_PAGE;
                cursor1 = 0;
                break;
            case 'resume':
                 paused = false;
                break;
            case 'mute':
            toggleMute();
                break;
            case 'record':
//            console.log('savegame');
            break;
            default:
            break;
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

    this.alpha = 1;
    this.draw = function() {

        if (transitioning) {
          this.alpha -= 0.02;
          canvasContext.globalAlpha = this.alpha;
        }

        if(gameIsStarted === false){
        if(currentPage == PAUSED_PAGE){
          currentPage = MENU_PAGE;
        }
        this.redraw();
        canvasContext.drawImage(logoPic, 0, 0);
        }else {
        currentPage = PAUSED_PAGE;
        canvasContext.clearRect(itemsX -50,topItemY - rowHeight,
        itemsWidth, rowHeight * menuPageText[currentPage].length + rowHeight  );
    }
        if(currentPage == CREDITS_PAGE) {
            colorRect( 0, 0, gameCanvas.width, gameCanvas.height, "black", 0.2);
            let creditsX = 5;
            let creditsTopY = 25;
            let creditsLineSkipY = 15;

            for (let i = 0; i < creditsList.length; i++) {
                colorText(creditsList[i],creditsX, creditsTopY + creditsLineSkipY * i, textColour, creditsFontFace, 'left', 'top');
            }
            return;
        }
            for (let i=0; i<menuPageText[currentPage].length; i++){
                colorText(menuPageText[currentPage][i], itemsX - (currentPage == GAMEPLAY_PAGE ? 275 : 0),topItemY + rowHeight * i,textColour, textFontFace, 'left', 'top');
                }
                if(currentPage != GAMEPLAY_PAGE){
                 //Draw cursor after background image
                 canvasContext.drawImage(arrowPic,itemsX -55 ,topItemY + (cursor1 * rowHeight) -42);
                }

        //canvasContext.globalAlpha = 1;
    };
})();
