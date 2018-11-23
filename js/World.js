const WORLD_W = 80;
const WORLD_H = 80;
const WORLD_COLS = 18;
const WORLD_ROWS = 16;

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

let worldGrid =
[
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,6,11,12,13,0,0,0,0,0,0,
1,1,0,0,0,0,0,0,6,14,15,16,0,0,0,0,0,
0,1,1,4,4,4,4,4,4,5,0,0,0,0,0,0,0,0,
0,1,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,
0,1,1,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,19,0,0,0,0,20,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,21,0,0,0,0,22,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,23,0,0,0,0,0,24,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
];
function rowColToArrayIndex(col, row) {
    return col + WORLD_COLS * row;
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
    for (let eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
        for (let eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
            let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
            let tileKindHere = worldGrid[arrayIndex];
            let useImg = worldPics[tileKindHere];

            if( tileTypeHasTransparency(tileKindHere) ) {//draw tile with inventory item
      				scaledContext.drawImage(worldPics[TILE_GROUND], drawTileX, drawTileY);
            } //draw tile without inventory item
              scaledContext.drawImage(useImg, drawTileX, drawTileY);
              //assignXAndYCoordinatesOfItems(tileKindHere, drawTileX,drawTileY);
              drawGrid(drawTileX,drawTileY);

              drawTileX += WORLD_W;
              arrayIndex++;

        }//end of inner part of nested for loop (columns)
        drawTileY += WORLD_H;
        drawTileX = 0;
    }//end of outer part of nested for loop (rows)
}//end of draw world

let visibleGrid = false;

function drawGrid(drawTileX,drawTileY) {//placed in drawWorld(); above this
  if (visibleGrid) {
    let currentRightSideX = drawTileX + WORLD_W;
    let currentBottomSideY = drawTileY + WORLD_H;
    scaledContext.strokeStyle = 'white';
    scaledContext.strokeRect(drawTileX,drawTileY, WORLD_W,WORLD_H)
    scaledContext.fillText(drawTileX + "," + drawTileY, drawTileX,drawTileY + 10);
    scaledContext.fillText(currentRightSideX + "," + currentBottomSideY ,drawTileX + 40,drawTileY + 78);
  }
}

function toggleGrid() {//placed in input.js
  if (visibleGrid === true) {
    visibleGrid = false;
  } else {
    visibleGrid = true;
  }
}
