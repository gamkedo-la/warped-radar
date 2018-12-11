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

const KEY_Z = 90;
const KEY_X = 88;

const KEY_G = 71; //toggle grid

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

let mouseX, mouseY;

let interact_key = false;
let pressed_mbLeft = false;

let cursorUp = false;
let cursorDown = false;
let cursorKeyPresses = 0;

let keydownMap = {};

function setupInput() {
    canvas.addEventListener("mousemove", updateMousePos);
    canvas.addEventListener("mouseup", mouseReleased);
    document.addEventListener("keydown", keydownHandler);
    document.addEventListener("keyup", keydownHandler);
    player.setupInput(KEY_UP, KEY_RIGHT, KEY_DOWN, KEY_LEFT, KEY_W, KEY_D, KEY_S, KEY_A);
}

function updateMousePos(evt) {
    let root = document.documentElement;

    mouseX = evt.clientX - canvas.offsetLeft - root.scrollLeft;
    mouseY = evt.clientY - canvas.offsetTop - root.scrollTop;

    mouseX *= canvas.width / canvas.clientWidth;
    mouseY *= canvas.height / canvas.clientHeight;
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

    keySet(evt, player, isKeyPressed);

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
            obtainItemIfApplicable(); //in obtainableItems.js
            incrementTextPages();
            cursorKeyPresses = isKeyPressed ? cursorKeyPresses + 1 : 0;
        }
    } else if (keysPressed(KEY_X)) {

    } else if (keysPressed(KEY_Z)) {
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
    }else if (this.keysPressed(KEY_SHIFT, KEY_F)) {
        fastRadar();       
    }
    if (keysPressed(KEY_SHIFT, KEY_D) && debug) {
        debug = false;
    } else if (keysPressed(KEY_SHIFT, KEY_D) && !debug) {
        debug = true;
    }
    if (keysPressed(KEY_X)) {
        playTheScene = !playTheScene;
        console.log("Play cutscene? " + playTheScene);
    }
    if (keysPressed(KEY_SPACE)) {
        if (inventory.items[inventory.index] != undefined && inventory.isShowing && dialogueNotShowing()) {
            if (inventory.items[inventory.index].actions != undefined && (!inventory.showActions && !inventory.selectAction)) {
                setTimeout(function () {
                    inventory.showActions = true;
                }, 40);
            }
        }
    }
}

function keySet(keyEvent, whichEntity, setTo) {
    switch (keyEvent.keyCode) {
        case whichEntity.controlKeyLeft:
        case whichEntity.controlKeyLeft2:
            whichEntity.keyHeld_walkLeft = setTo;
            break;
        case whichEntity.controlKeyRight:
        case whichEntity.controlKeyRight2:
            whichEntity.keyHeld_walkRight = setTo;
            break;
        case whichEntity.controlKeyUp:
        case whichEntity.controlKeyUp2:
            whichEntity.keyHeld_walkUp = setTo;
            break;
        case whichEntity.controlKeyDown:
        case whichEntity.controlKeyDown2:
            whichEntity.keyHeld_walkDown = setTo;
            break;
    }
}
