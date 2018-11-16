const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

const KEY_O = 79;

const KEY_Z = 90;
const KEY_X = 88;

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

var mouseX, mouseY;

var pressed_space = false;
var pressed_mbLeft = false;

var cursorUp = false;
var cursorDown = false;
var cursorKeyPresses = 0;

function setupInput() {
    canvas.addEventListener("mousemove", updateMousePos);
    canvas.addEventListener("mouseup", mouseReleased);
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
    player.setupInput(KEY_UP, KEY_RIGHT, KEY_DOWN, KEY_LEFT);
}

function updateMousePos(evt) {
    var rect = scaledCanvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
}

function mouseReleased(evt) {
    levelEditor.editTileOnMouseClick();
}

function keyPressed(evt) {
    switch (evt.keyCode) {
        case KEY_SPACE:
            if (!levelEditor.isOn) {
                pressed_space = true;
                incrementTextPages();
                cursorKeyPresses++;
            }
            break;
        case KEY_X:
            break;
        case KEY_Z:
            inventory.toggle();
            break;
        case KEY_UP:
            cursorUp = true;
            cursorKeyPresses++;
            break;
        case KEY_DOWN:
            cursorDown = true;
            cursorKeyPresses++;
            break;
        case KEY_O:
            levelEditor.toggle();
            break;
    }
    keySet(evt, player, true);
    levelEditor.editorKeyHandle(evt.keyCode);
    inventory.navigate(evt.keyCode);
    evt.preventDefault();

}

function keyReleased(evt) {
    switch (evt.keyCode) {
        case KEY_SPACE:
            pressed_space = false;
            cursorKeyPresses = 0;
            break;
        case KEY_UP:
            cursorUp = false;
            cursorKeyPresses = 0;
            break;
        case KEY_DOWN:
            cursorDown = false;
            cursorKeyPresses = 0;
            break;
    }
    keySet(evt, player, false);
}

function keySet(keyEvent, whichEntity, setTo) {
    switch (keyEvent.keyCode) {
        case whichEntity.controlKeyLeft:
            whichEntity.keyHeld_walkLeft = setTo;
            break;
        case whichEntity.controlKeyRight:
            whichEntity.keyHeld_walkRight = setTo;
            break;
        case whichEntity.controlKeyUp:
            whichEntity.keyHeld_walkUp = setTo;
            break;
        case whichEntity.controlKeyDown:
            whichEntity.keyHeld_walkDown = setTo;
            break;
    }
}
