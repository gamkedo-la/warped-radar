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

let worldGrid = 
[ 
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,6,11,12,13,0,0,0,0,0,0,
1,1,0,0,0,0,0,0,6,14,15,16,0,0,0,0,0,
0,1,1,4,4,4,4,4,4,5,0,0,0,0,0,0,0,0,
0,1,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
];
function rowColToArrayIndex(col, row) {
    return col + WORLD_COLS * row;
}

function tileTypeHasTransparency(checkTileType) {
    return;
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
            
            /*if( tileTypeHasTransparency(tileKindHere) ) {
				scaledContext.drawImage(worldPics[TILE_GROUND], drawTileX, drawTileY);
			}*/
            
            scaledContext.drawImage(useImg, drawTileX, drawTileY);
            drawTileX += WORLD_W;
            arrayIndex++;
        } 
        drawTileY += WORLD_H;
        drawTileX = 0;
    } 
} 
