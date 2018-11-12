const WORLD_W = 32;
const WORLD_H = 32;
const WORLD_COLS = 20;
const WORLD_ROWS = 15;
/*const WORLD_COLS = 50;
const WORLD_ROWS = 35;*/

const TILE_GROUND = 0;
const TILE_RANDOM = 1;
const TILE_ITEM_DOGCOLLAR = 2;
const TILE_ITEM_MEMBERSHIPCARD = 3;
const TILE_ITEM_SANDWICH = 4;
const TILE_ITEM_SUNGLASSES = 5;

var worldGrid = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                ];

function rowColToArrayIndex(col, row) {
    return col + WORLD_COLS * row;
}

function tileTypeHasTransparency(checkTileType) {
	return (checkTileType == TILE_ITEM_DOGCOLLAR ||
			checkTileType == TILE_ITEM_MEMBERSHIPCARD ||
			checkTileType == TILE_ITEM_SANDWICH ||
            checkTileType == TILE_ITEM_SUNGLASSES
           );
}

function drawWorld() {
    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
        for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
            var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
            var tileKindHere = worldGrid[arrayIndex];
            var useImg = worldPics[tileKindHere];
            if( tileTypeHasTransparency(tileKindHere) ) {
				scaledContext.drawImage(worldPics[TILE_GROUND], drawTileX, drawTileY);
			}
            scaledContext.drawImage(useImg, drawTileX, drawTileY);
            drawTileX += WORLD_W;
            arrayIndex++;
        } 
        drawTileY += WORLD_H;
        drawTileX = 0;
    } 
} 
