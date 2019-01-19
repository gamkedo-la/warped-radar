const WORLD_W = 40;
const WORLD_H = 40;

const TILE = {
    //Basic Overworld tiles 
    GROUND:1,
    WALL:2,
    PLAYER_START:3,
    SIDEWALK:4,
    SIDEWALK_RIGHT_CORNER:5,
    SIDEWALK_VERTICAL:6,

    //BUILDING tiles
    BUILDING_LEFT:7,
    BUILDING_RIGHT:8,
    BUILDING_BOTTOM_LEFT:9,
    BUILDING_BOTTOM_RIGHT:10,
    CONVENIENCE_STORE_LEFT:11,
    CONVENIENCE_STORE_MIDDLE:12,
    CONVENIENCE_STORE_RIGHT:13,
    CONVENIENCE_STORE_BOTTOM_LEFT:14,
    CONVENIENCE_STORE_BOTTOM_MIDDLE:15,
    CONVENIENCE_STORE_BOTTOM_RIGHT:16,

    //PLACEHOLDER items for inventory
    BROKEN_SKATEBOARD:17,
    BURNER_PHONE:18,
    CROWBAR:19,
    HOODIE:20,
    MEDICAL_NOTEBOOK:21,
    SEALED_TUBE:22,
    THUMB_DRIVE:23,
    TRAIN_TICKET:24,
    SWITCH_LOCATION:25,

    //CITY TILES
    CITY_1:26,
    CITY_2:27,
    CITY_3:28,
    CITY_4:29,
    CITY_5:30,
    CITY_6:31,
    CITY_7:32,
    CITY_8:33,
    CITY_9:34,
    CITY_10:35,
    CITY_11:36,
    CITY_12:37,
    CITY_13:38,
    CITY_14:39,
    CITY_15:40,
    CITY_16:41,
    CITY_17:42,
    CITY_18:43,
    CITY_19:44,
    CITY_20:45,
    CITY_21:46,
    CITY_22:47,
    CITY_23:48,
    CITY_24:49,
    CITY_25:50,
    CITY_26:51,
    CITY_27:52,
    CITY_28:53,
    CITY_29:54,
    CITY_30:55,
    CITY_31:56,
    CITY_32:57,
    CITY_33:58,
    CITY_34:59,
    CITY_35:60,  
    CITY_36:61,
    CITY_37:62,
    CITY_38:63,
    CITY_39:64,
    CITY_40:65,
    CITY_41:66,
    CITY_42:67,
    CITY_43:68,
    CITY_44:69,
    CITY_45:70,  
    CITY_46:71,
    CITY_47:72,
    CITY_48:73,
    CITY_49:74,
    CITY_50:75,
    CITY_51:76,
    CITY_52:77,

    BLANK:576
};

let tileSet;// = new Tileset(worldTiles, 40, 40);

//const TILE_CITY_TILES = 40;

let solidTiles = [2];

let locationList = [theCity, johnsRoom, johnsHallway, johnsKitchen];
let locationNow = 0;

    window.locations = locationList
//--------------------------------------

let worldCols = locationList[locationNow].columns;
let worldRows = locationList[locationNow].rows;

//let worldGrid = [];

console.log("Current location: " + locationNow + " size: " + worldCols + 'x' + worldRows);

//worldGrid = locationList[locationNow].layers[Layer.Ground];
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

function drawLayer(layer) {
    let drawTileX = 0;
    let drawTileY = 0;
    const minColSize = locationList[locationNow].columns;
    const minRowSize = locationList[locationNow].rows;

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
                tileKindHere = layer[arrayIndex];
            } else {
                tileKindHere = 0; // or whatever default/black to fill in with
            }
                        
            tileSet.drawTileAt(scaledContext, tileKindHere, drawTileX, drawTileY);
            drawGrid(drawTileX, drawTileY);
            drawTileX += WORLD_W;

        } //end of inner part of nested for loop (just drew an entire row, move to the next row)
        drawTileY += WORLD_H;
        drawTileX = 0;
    }
}

function drawInteractionLayer(nonTileObjs) {
    let arrayIndex = 0;
    let drawTileX = 0;
    let drawTileY = 0;
    const minColSize = locationList[locationNow].columns;
    const minRowSize = locationList[locationNow].rows;

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
                tileKindHere = locationList[locationNow].layers[Layer.Interaction][arrayIndex];
            } else {
                tileKindHere = 0; // or whatever default/black to fill in with
            }
            if(tileKindHere == TILE.WALL
                || tileKindHere == TILE.PLAYER_START
                || tileKindHere == TILE.SWITCH_LOCATION){
                tileSet.drawTileAt(scaledContext, TILE.BLANK, drawTileX, drawTileY);
            } //don't draw the collision tiles or action tiles
            else{
                tileSet.drawTileAt(scaledContext, tileKindHere, drawTileX, drawTileY);
            }
            
            //assignXAndYCoordinatesOfItems(tileKindHere, drawTileX,drawTileY);
            drawGrid(drawTileX, drawTileY);

            drawTileX += WORLD_W;

        } //end of inner part of nested for loop (just drew an entire row, move to the next row)
        drawTileY += WORLD_H;
        drawTileX = 0;

        //draw anything which appears on top of the tiles and whose Y-Pos is closer to the top
        //of the screen than the top of the next row of tiles
        const objectsToDraw = [];
        for(let i = 0; i < nonTileObjs.length; i++) {
            if(nonTileObjs[i] != null) {
                if(nonTileObjs[i].y + nonTileObjs[i].h < drawTileY) {
                    if(isInViewPort(scaledCanvas, nonTileObjs[i].x, nonTileObjs[i].y)) {
                        objectsToDraw.push(nonTileObjs[i]);
                    }

                    nonTileObjs[i] = null;
                }//end of if object bottom < drawTileY
            }//end of if not null
        }//end of for loop through nonTileObjs

        //sort the objects to draw array so the objects closer to the bottom
        //of the screen are at the end of the array and are drawn last
        objectsToDraw.sort((a, b) => ((a.y + a.h) > (b.y + b.h)) ? 1 : -1);

        //Finally actually draw these objects (NPCs, cell phones, etc.)
        for(let i = 0; i < objectsToDraw.length; i++) {
            objectsToDraw[i].draw();
        }

    } //end of outer part of nested for loop (just finished all rows)
}

function drawWorld(nonTileObjs) {
    drawLayer(locationList[locationNow].layers[Layer.Ground]);
    drawInteractionLayer(nonTileObjs);
    drawLayer(locationList[locationNow].layers[Layer.Overhead]);
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
        return locationList[locationNow].layers[Layer.Interaction][worldIndexUnderCoord];
    } else {
        return TILE.WALL;
    }
}

function returnTileTypeAtColRowInLayer(col, row, layer) {
    if (col >= 0 && col < worldCols &&
        row >= 0 && row < worldRows) {
        let worldIndexUnderCoord = rowColToArrayIndex(col, row);
        return layer[worldIndexUnderCoord];
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
