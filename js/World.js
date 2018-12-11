const WORLD_W = 80;
const WORLD_H = 80;

const TILE_GROUND = 0;
const TILE_WALL = 1;
const TILE_PLAYER_START = 2;
const TILE_PLAYERS_TILE = 3;
const TILE_SIDEWLAK = 4;
const TILE_SIDEWALK_RIGHTCORNER = 5;
const TILE_SIDEWALK_VERTICAL = 6;

const TILE_TESTBUILDING_LEFT = 7;
const TILE_TESTBUILDING_RIGHT = 8;
const TILE_TESTBUILDING_BOTTOMLEFT = 9;
const TILE_TESTBUILDING_BOTTOMRIGHT = 10;
const TILE_TEST_CONVENIENCE_STORELEFT = 11;
const TILE_TEST_CONVENIENCE_STOREMIDDLE = 12;
const TILE_TEST_CONVENIENCE_STORERIGHT = 13;
const TILE_TEST_CONVENIENCE_STOREBOTTOMLEFT = 14;
const TILE_TEST_CONVENIENCE_STOREBOTTOMMIDDLE = 15;
const TILE_TEST_CONVENIENCE_STOREBOTTOMRIGHT = 16;

//PLACEHOLDER items for inventory
const TILE_BROKEN_SKATEBOARD = 17;
const TILE_BURNER_PHONE = 18;
const TILE_CROWBAR = 19;
const TILE_HOODIE = 20;
const TILE_MEDICAL_NOTEBOOK = 21;
const TILE_SEALED_TUBE = 22;
const TILE_THUMB_DRIVE = 23;
const TILE_TRAIN_TICKET = 24;

const TILE_SWITCH_LOCATION = 25;

let solidTiles = [1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let locationList = [johnsRoom, johnsHallway, johnsKitchen, theCity];
let locationNow = 0;

let worldCols = locationList[locationNow].columns;
let worldRows = locationList[locationNow].rows;

let worldGrid = [];

console.log("Current location: " + locationNow + " size: " + worldCols + 'x' + worldRows);

worldGrid = Array.from(locationList[locationNow].layout);

let visibleGrid = false;

function rowColToArrayIndex(col, row) {
    return col + worldCols * row;
}

function tileTypeHasTransparency(tileToCheck) {
    let hasTransparency;

    if (tileToCheck ===

        TILE_BROKEN_SKATEBOARD ||
        TILE_BURNER_PHONE ||
        TILE_CROWBAR ||
        TILE_HOODIE ||
        TILE_MEDICAL_NOTEBOOK ||
        TILE_SEALED_TUBE ||
        TILE_THUMB_DRIVE ||
        TILE_TRAIN_TICKET

    ) {
        hasTransparency = true
    } else {
        hasTransparency = false
    }
    return hasTransparency;
    
}

function drawWorld() {
    let arrayIndex = 0;
    let drawTileX = 0;
    let drawTileY = 0;
    let minColSize = 18;
    let minRowSize = 16;

    for (let eachRow = 0; eachRow < minRowSize; eachRow++) {
        for (let eachCol = 0; eachCol < minColSize; eachCol++) {
            let tileKindHere;
            if (eachCol < worldCols && eachRow < worldRows) {
                let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                tileKindHere = worldGrid[arrayIndex];
            } else {
                tileKindHere = 0; // or whatever default/black to fill in with
            }
            let useImg = worldPics[tileKindHere];
            if (tileTypeHasTransparency(tileKindHere)) { //draw tile with inventory item
                scaledContext.drawImage(worldPics[TILE_GROUND], drawTileX, drawTileY);
            } //draw tile without inventory item

            scaledContext.drawImage(useImg, drawTileX, drawTileY);

            //assignXAndYCoordinatesOfItems(tileKindHere, drawTileX,drawTileY);
            drawGrid(drawTileX, drawTileY);

            drawTileX += WORLD_W;

        } //end of inner part of nested for loop (columns)
        drawTileY += WORLD_H;
        drawTileX = 0;
    } //end of outer part of nested for loop (rows)

} //end of draw world


function returnTileTypeAtColRow(col, row) {
    if (col >= 0 && col < worldCols &&
        row >= 0 && row < worldRows) {
        let worldIndexUnderCoord = rowColToArrayIndex(col, row);
        return worldGrid[worldIndexUnderCoord];
    } else {
        return TILE_WALL;
    }
}

function playerWorldHandling(whichEntity) {
    let playerWorldCol = Math.floor(whichEntity.x / WORLD_H);
    let playerWorldRow = Math.floor(whichEntity.y / WORLD_H);
    let trackIndexUnderCar = rowColToArrayIndex(playerWorldCol, playerWorldRow);

    if (playerWorldCol >= 0 && playerWorldCol < worldCols &&
        playerWorldRow >= 0 && playerWorldRow < worldRows) {
        let tileHere = returnTileTypeAtColRow(playerWorldCol, playerWorldRow);

        if (tileHere == TILE_SWITCH_LOCATION) {
            nextLevel();
        }
    }
}

function drawGrid(drawTileX, drawTileY) { //placed in drawWorld(); above this
    if (visibleGrid) {
        let currentRightSideX = drawTileX + WORLD_W;
        let currentBottomSideY = drawTileY + WORLD_H;
        scaledContext.strokeStyle = 'white';
        scaledContext.strokeRect(drawTileX, drawTileY, WORLD_W, WORLD_H)
        scaledContext.fillText(drawTileX + "," + drawTileY, drawTileX, drawTileY + 10);
        scaledContext.fillText(currentRightSideX + "," + currentBottomSideY, drawTileX + 40, drawTileY + 78);
    }
}

function toggleGrid() { //placed in input.js
    if (visibleGrid === true) {
        visibleGrid = false;
    } else {
        visibleGrid = true;
    }
}
