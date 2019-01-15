const WORLD_W = 40;
const WORLD_H = 40;

const TILE = {
    //Basic Overworld tiles 
    GROUND:0,
    WALL:1,
    PLAYER_START:2,
    SIDEWALK:3,
    SIDEWALK_RIGHT_CORNER:4,
    SIDEWALK_VERTICAL:5,

    //BUILDING tiles
    BUILDING_LEFT:6,
    BUILDING_RIGHT:7,
    BUILDING_BOTTOM_LEFT:8,
    BUILDING_BOTTOM_RIGHT:9,
    CONVENIENCE_STORE_LEFT:10,
    CONVENIENCE_STORE_MIDDLE:11,
    CONVENIENCE_STORE_RIGHT:12,
    CONVENIENCE_STORE_BOTTOM_LEFT:13,
    CONVENIENCE_STORE_BOTTOM_MIDDLE:14,
    CONVENIENCE_STORE_BOTTOM_RIGHT:15,

    //PLACEHOLDER items for inventory
    BROKEN_SKATEBOARD:16,
    BURNER_PHONE:17,
    CROWBAR:18,
    HOODIE:19,
    MEDICAL_NOTEBOOK:20,
    SEALED_TUBE:21,
    THUMB_DRIVE:22,
    TRAIN_TICKET:23,
    SWITCH_LOCATION:24,

    //CITY TILES
    CITY_1:25,
    CITY_2:26,
    CITY_3:27,
    CITY_4:28,
    CITY_5:29,
    CITY_6:30,
    CITY_7:31,
    CITY_8:32,
    CITY_9:33,
    CITY_10:34,
    CITY_11:35,
    CITY_12:36,
    CITY_13:37,
    CITY_14:38,
    CITY_15:39,
    CITY_16:40,
    CITY_17:41,
    CITY_18:42,
    CITY_19:43,
    CITY_20:44,
    CITY_21:45,
    CITY_22:46,
    CITY_23:47,
    CITY_24:48,
    CITY_25:49,
    CITY_26:50,
    CITY_27:51,
    CITY_28:52,
    CITY_29:53,
    CITY_30:54,
    CITY_31:55,
    CITY_32:56,
    CITY_33:57,
    CITY_34:58,
    CITY_35:59,  
    CITY_36:60,
    CITY_37:61,
    CITY_38:62,
    CITY_39:63,
    CITY_40:64,
    CITY_41:65,
    CITY_42:66,
    CITY_43:67,
    CITY_44:68,
    CITY_45:69,  
    CITY_46:70,
    CITY_47:71,
    CITY_48:72,
    CITY_49:73,
    CITY_50:74,
    CITY_51:75,
    CITY_52:76,
};

let tileSet;// = new Tileset(worldTiles, 40, 40);

//const TILE_CITY_TILES = 40;

let solidTiles = [
                1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
                35 ,36, 37, 38, 39, 40, 41, 42, 43, 44,
                45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
                55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
                65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
                75, 76];

let locationList = [theCity, johnsRoom, johnsHallway, johnsKitchen];
let locationNow = 0;

//importing 1-indexed tiled maps, temporary hacky fix to make map data 0-indexed.
    locationList.forEach(location=>{
        location.layout.forEach( (tile, index, arr)=>{
            arr[index] = tile-1;
        })
    });

    window.locations = locationList
//--------------------------------------

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

        TILE.BROKEN_SKATEBOARD ||
        TILE.BURNER_PHONE ||
        TILE.CROWBAR ||
        TILE.HOODIE ||
        TILE.MEDICAL_NOTEBOOK ||
        TILE.SEALED_TUBE ||
        TILE.THUMB_DRIVE ||
        TILE.TRAIN_TICKET

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
    let minColSize = 60; //current largest map. 
    let minRowSize = 60;
    for (let eachRow = 0; eachRow < minRowSize; eachRow++) {
        for (let eachCol = 0; eachCol < minColSize; eachCol++) {
            //do not draw if outside viewport, but still need to increment draw position
            if(!isInViewPort(scaledCanvas, drawTileX, drawTileY)) {
                drawTileX += WORLD_W;
                continue;
            }

            let tileKindHere;
            if (eachCol < worldCols && eachRow < worldRows) {
                let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                tileKindHere = worldGrid[arrayIndex];
            } else {
                tileKindHere = 0; // or whatever default/black to fill in with
            }
            
            if (tileTypeHasTransparency(tileKindHere)) { //draw tile with inventory item                
                tileSet.drawTileAt(scaledContext, TILE.GROUND, drawTileX, drawTileY);
            } //draw tile without inventory item
            
            tileSet.drawTileAt(scaledContext, tileKindHere, drawTileX, drawTileY);

            //assignXAndYCoordinatesOfItems(tileKindHere, drawTileX,drawTileY);
            drawGrid(drawTileX, drawTileY);

            drawTileX += WORLD_W;

        } //end of inner part of nested for loop (columns)
        drawTileY += WORLD_H;
        drawTileX = 0;
    } //end of outer part of nested for loop (rows)

} //end of draw world

function isInViewPort(aCanvas, x, y) {
    if(x > mainCamera.camPanX + aCanvas.width) {return false;}
    if(x < mainCamera.camPanX - WORLD_W) {return false;}
    if(y > mainCamera.camPanY + aCanvas.height) {return false;}
    if(y < mainCamera.camPanY - WORLD_H) {return false;}

    return true;
}

function returnTileTypeAtColRow(col, row) {
    if (col >= 0 && col < worldCols &&
        row >= 0 && row < worldRows) {
        let worldIndexUnderCoord = rowColToArrayIndex(col, row);
        return worldGrid[worldIndexUnderCoord];
    } else {
        return TILE.WALL;
    }
}

function playerWorldHandling(whichEntity) {
    let playerWorldCol = Math.floor(whichEntity.x / WORLD_H);
    let playerWorldRow = Math.floor(whichEntity.y / WORLD_H);
    let trackIndexUnderCar = rowColToArrayIndex(playerWorldCol, playerWorldRow);

    if (playerWorldCol >= 0 && playerWorldCol < worldCols &&
        playerWorldRow >= 0 && playerWorldRow < worldRows) {
        let tileHere = returnTileTypeAtColRow(playerWorldCol, playerWorldRow);

        if (tileHere == TILE.SWITCH_LOCATION) {
            goToNextLevel();
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
