const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

const KEY_Z = 90;
const KEY_X = 88;

const KEY_SPACE = 32;
const KEY_ENTER = 13;

var pressed_space = false;
var pressed_mbLeft = false;

function setupInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
    document.addEventListener("mousedown", mousePressed);
    document.addEventListener("mouseup", mouseReleased);
    player.setupInput(KEY_UP, KEY_RIGHT, KEY_DOWN, KEY_LEFT);
}

function keyPressed(evt) {
    switch (evt.keyCode) {
        case KEY_SPACE:
            pressed_space = true;
            incrementTextPages();
            break;
        case KEY_X:
            john.pressedX = true;
            break;
        case KEY_Z:
            bob.pressedZ = true;
            break;
    }
    keySet(evt, player, true);
    evt.preventDefault();

}

function keyReleased(evt) {
    switch (evt.keyCode) {
        case KEY_SPACE:
            pressed_space = false;
            break;
    }
    keySet(evt, player, false);
}

function mousePressed(evt) {
    incrementTextPages();
    pressed_mbLeft = true;
}

function mouseReleased(evt) {
    pressed_mbLeft = false;
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
