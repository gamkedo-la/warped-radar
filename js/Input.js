const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

const KEY_O = 79;
const KEY_P = 80;
const KEY_E = 69;
const KEY_F = 70;
const KEY_I = 73;

const KEY_Z = 90;
const KEY_X = 88;

const KEY_G = 71; //toggle grid
const KEY_B = 66; //beat the game hack

const KEY_ONE = 49;
const KEY_TWO = 50;
const KEY_THREE = 51;
const KEY_FOUR = 52;
const KEY_FIVE = 53;
const KEY_SIX = 54;
const KEY_SEVEN = 55;
const KEY_EIGHT = 56;
const KEY_NINE = 57;
const KEY_ZERO = 48;

const KEY_TILDE = 192;

const KEY_SPACE = 32;
const KEY_ENTER = 13;
const KEY_SHIFT = 16;
const KEY_CTRL = 17;
const KEY_BACKSPACE = 8;
let mouseX, mouseY;

let interact_key = false;
let pressed_mbLeft = false;

let cursorUp = false;
let cursorDown = false;
let cursorKeyPresses = 0;

let keydownMap = {};

function setupInput() {
    document.addEventListener('click', event => {
        if(gameIsBeat) {
            gameIsBeat = false;
//            resetAll(); //This method doesn't work
            location.reload(); //This is the nuclear option, reloads the game
        }
        Menu.checkState();
    });
    canvas.addEventListener("mousemove", updateMousePos);
    canvas.addEventListener("mouseup", mouseReleased);
    document.addEventListener("keydown", keydownHandler);
    document.addEventListener("keyup", keydownHandler);
    player.setupInput(KEY_UP, KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_W, KEY_S, KEY_A, KEY_D); // UP DOWN LEFT RIGHT
}

function updateMousePos(evt) {
    let root = document.documentElement;

    mouseX = evt.clientX - canvas.offsetLeft - root.scrollLeft;
    mouseY = evt.clientY - canvas.offsetTop - root.scrollTop;

    mouseX *= canvas.width / canvas.clientWidth;
    mouseY *= canvas.height / canvas.clientHeight;

    Menu.menuMouse();
}

function mouseReleased(evt) {
    levelEditor.editTileOnMouseClick();
}

function keydownHandler(evt) {
    keydownMap[evt.keyCode] = evt.type == "keydown";
    evt.preventDefault();
    keydownControl(evt, keydownMap);
}

function keysPressed() {
    let keysToPress = arguments;

    for (let i = 0; i < keysToPress.length; i++) {
        if (!keydownMap[keysToPress[i]]) { // if any key in arguments is not pressed
            return false;
        }
    }

    return true;
}

function keydownControl(evt, keydownMap) {
    let isKeyPressed = evt.type == "keydown";

    keySet(player);

    if (isKeyPressed) {
        levelEditor.editorKeyHandle(evt.keyCode);
        inventory.navigate(evt.keyCode);
    }

    if (!levelEditor.isOn) {
        interact_key = (keysPressed(KEY_SPACE) || keysPressed(KEY_ENTER)) && isKeyPressed;
    }

    cursorUp = (keysPressed(KEY_UP) || keysPressed(KEY_W)) && isKeyPressed;
    cursorDown = (keysPressed(KEY_DOWN) || keysPressed(KEY_S)) && isKeyPressed;

    // Supports multiple simultaneous key presses:
    //      e.g. Shift + I: if (keysPressed(KEY_SHIFT, KEY_I)) { do_something(); }
    //      e.g. Ctrl + S: if (keysPressed(KEY_CTRL, KEY_S)) { save_file(); }
    //
    // When a key is both used on its own and in a combination, check the combination first:
    //      e.g. If Shift does something and Shift + I does something,
    //           check for Shift + I first:
    //              if (keysPressed(KEY_SHIFT, KEY_I)) { do_something(); }
    //              else if (keysPressed(KEY_SHIFT)) { do_something_else(); }
    //
   if (keysPressed(KEY_SPACE) || keysPressed(KEY_ENTER)) {
        if (!levelEditor.isOn) {
            if(gameIsBeat) {return;}
            obtainItemIfApplicable(); //in obtainableItems.js
            incrementTextPages();
            incrementOBJTextPages();
            cursorKeyPresses = isKeyPressed ? cursorKeyPresses + 1 : 0;
        }
    } else if (keysPressed(KEY_Z) || keysPressed(KEY_I) ) {
        if(gameIsBeat) {return;}
        if (!inventory.showActions && !inventory.selectAction && currentlyPlayingCutscene == null) {
            inventory.toggle();
        }
    } else if (keysPressed(KEY_UP) || keysPressed(KEY_W)) {
        cursorKeyPresses = isKeyPressed ? cursorKeyPresses + 1 : 0;
    } else if (keysPressed(KEY_DOWN) || keysPressed(KEY_S)) {
        cursorKeyPresses = isKeyPressed ? cursorKeyPresses + 1 : 0;
    } else if (keysPressed(KEY_CTRL, KEY_E)) {
        levelEditor.toggle();
    } else if (keysPressed(KEY_G)) {
        toggleGrid();
    }else if (this.keysPressed(KEY_P)) {
        pauseRadar();
    }else if (keysPressed(KEY_B)) {
      gameIsBeat = true;
      for (let i = 0; i < array_of_fadable_songs.length - 1; i++) {
        array_of_fadable_songs[i].pause();
      }

      end_game_song.play();
      end_game_song.fadingIn = true;
    }
    if (keysPressed(KEY_SHIFT, KEY_D) && debug) {
        debug = false;
    } else if (keysPressed(KEY_SHIFT, KEY_D) && !debug) {
        debug = true;
    }
    if (keysPressed(KEY_SPACE)) {
        if (inventory.items[inventory.index] != undefined && inventory.isShowing && dialogueNotShowing() && dialogueOBJNotShowing()) {
            if (inventory.items[inventory.index].actions != undefined && (!inventory.showActions && !inventory.selectAction)) {
                setTimeout(function () {
                    inventory.showActions = true;
                }, 40);
            }
        }
    }
}

function keySet(whichEntity) {
    whichEntity.keyHeld_walkLeft = keysPressed(whichEntity.controlKeyLeft) || keysPressed(whichEntity.controlKeyLeft2);
    whichEntity.keyHeld_walkRight = keysPressed(whichEntity.controlKeyRight) || keysPressed(whichEntity.controlKeyRight2);
    whichEntity.keyHeld_walkUp = keysPressed(whichEntity.controlKeyUp) || keysPressed(whichEntity.controlKeyUp2);
    whichEntity.keyHeld_walkDown = keysPressed(whichEntity.controlKeyDown) || keysPressed(whichEntity.controlKeyDown2);
}
