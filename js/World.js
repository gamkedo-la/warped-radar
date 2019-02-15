const WORLD_W = 40;
const WORLD_H = 40;

// experiment to stop seams when scrolling
// snap tiles to integer positions
const SNAP_TILES_TO_INTEGER_POSITIONS = true;

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

    JULIE:114,
    ROSE:115,
    DAVE:116,
    NPC:117,

    WALL_OUTLET: 139,

    FAMILY_PHOTO:149,

    COP:202,
    CAT:205,
    FUSION:207,

    BLANK:576
};

let tileSet;

let solidTiles = [2];

const Switch = {
    TheCityToJohnsRoom:             getTileIndex(theCity, 42, 22),
    TheCityFromJohnsRoom:           getTileIndex(theCity, 42, 23),
    TheCityToJuliesStore:           getTileIndex(theCity, 26, 22),
    TheCityFromJuliesStore:         getTileIndex(theCity, 26, 23),
    TheCityToDavesHouse:            getTileIndex(theCity, 17, 22),
    TheCityFromDavesHouse:          getTileIndex(theCity, 17, 23),
    JohnsRoomToTheCity:             getTileIndex(johnsRoom, 6, 23),
    JohnsRoomFromTheCity:           getTileIndex(johnsRoom, 6, 22),
    JuliesStoreToTheCity:           getTileIndex(juliesStore, 8, 13),
    JuliesStoreFromTheCity:         getTileIndex(juliesStore, 8, 12),
    DavesHouseToTheCity:            getTileIndex(davesHouse, 6, 11),
    DavesHouseFromTheCity:          getTileIndex(davesHouse, 6, 10)
};
const Place = {
    TheCity:0,
    JohnsRoom:1,
    DavesHouse:2,
    JuliesStore:3
};
let locationList = [theCity, johnsRoom, davesHouse, juliesStore];
let locationNow = 0;

//Look for where the PLAYER_START tile is so we can load the
//correct part of the map to start the game.
let foundStart = false;
for(let i = 0; i < locationList.length; i++) {
    const dataArray = locationList[i].layers[Layer.Interaction];
    for(let j = 0; j < dataArray.length; j++) {
        if(dataArray[j] == TILE.PLAYER_START) {
            locationNow = i;
            foundStart = true;
            break;
        }
    }
    if(foundStart) {break;}
}


    window.locations = locationList
//--------------------------------------

let worldCols = locationList[locationNow].columns;
let worldRows = locationList[locationNow].rows;

console.log("Current location: " + locationNow + " size: " + worldCols + 'x' + worldRows);

let visibleGrid = false;

/**
 * 
 * @param {object} location a location object from locations.js
 * @param {int} col map coordinate in tiles
 * @param {int} row map coordinate in tiles
 */
function getTileIndex(location, col, row){
    let cols = location.columns;
    return col + cols * row;
}

function rowColToArrayIndex(col, row) {
    return col + worldCols * row;
}

function arrayIndexToRowCol(arrayIndex) {
    const thisCol = arrayIndex % worldCols;
    const thisRow = Math.floor(arrayIndex / worldCols);

    return {row:thisRow, col:thisCol};
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
    let drawTileX = mainCamera.camPanX / WORLD_W; 
    let drawTileY = mainCamera.camPanY / WORLD_H;

    if (SNAP_TILES_TO_INTEGER_POSITIONS) {
        drawTileX = Math.ceil(drawTileX);
        drawTileY = Math.ceil(drawTileY);
    }
    
    const minColSize = drawTileX + 10;//locations.locationNow.columns;
    const minRowSize = drawTileY + 8;//locations.locationNow.columns;

    
    //let startTile = rowColToArrayIndex(cameraTileOffsetX, cameraTileOffsetY);

    for (let eachRow = 0; eachRow < minRowSize; eachRow++) {
        for (let eachCol = 0; eachCol < minColSize; eachCol++) {
            
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

function drawDepthSorted(nonTileObjs) {
    let drawTileX =  mainCamera.camPanX / WORLD_W; 
    let drawTileY = mainCamera.camPanY / WORLD_H;
    
    if (SNAP_TILES_TO_INTEGER_POSITIONS) {
        drawTileX = Math.ceil(drawTileX);
        drawTileY = Math.ceil(drawTileY);
    }

    const minColSize = drawTileX + 10;//locations.locationNow.columns;
    const minRowSize = drawTileY + 8;//locations.locationNow.columns;
    const layer = locationList[locationNow].layers[Layer.Depth_Sorted];
    const heightMap = locationList[locationNow].layers[Layer.Heightmap];
    let groundValue = locationList[locationNow].groundValue;//may not be zero because Tiled...
    // const minColSize = locationList[locationNow].columns;
    // const minRowSize = locationList[locationNow].rows;

    //objects closer to the top of the screen have
    //index values closer to zero 
    const sortedObjectsToDraw = findAndSortObjectsToDraw(nonTileObjs);
    const tilesToDrawLater = [];

    for (let eachRow = 0; eachRow < minRowSize; eachRow++) {
        for (let eachCol = 0; eachCol < minColSize; eachCol++) {
            //This is where actual depth sorting and drawing logic starts
            const arrayIndex = rowColToArrayIndex(eachCol, eachRow);
            let tileKindHere = layer[arrayIndex];

            if(!shouldDrawTile(tileKindHere))
/*            if((tileKindHere == TILE.WALL) ||
               (tileKindHere == TILE.PLAYER_START) ||
               (tileKindHere == TILE.SWITCH_LOCATION)) */{//don't draw the collision tiles or action tiles
                    tileSet.drawTileAt(scaledContext, TILE.BLANK, drawTileX, drawTileY);
            } else {
                //Need to find out if this tile has a height above the ground
                if(heightMap[arrayIndex] - groundValue >= 0) {
                    //this tile should be drawn later because it is not at the ground level
                    //Fortunately, it is already sorted with the tiles closest to the top of the screen 
                    //having smaller indexes
                    tilesToDrawLater.push({kind:tileKindHere, height:(heightMap[arrayIndex] - groundValue), x:drawTileX, y:drawTileY});
                } else {
                    //this tile is at the ground level, need to find out if there are any sortedObjectsToDraw on this tile
                    for(let i = 0; i < sortedObjectsToDraw.length; i++) {
                        if(sortedObjectsToDraw[i] != null) {//these objects will be set to null once they are drawn
                            const thisObj = sortedObjectsToDraw[i];

                            if(thisObj.y + thisObj.h > drawTileY + WORLD_H) {break;}//this is too far down to draw and all other objects will be further down

                            if(thisObj.y + thisObj.h < drawTileY + WORLD_H) {
                                //the bottom of thisObj is closer to the top of the screen 
                                //than the bottom of this row of tiles => draw thisObj
                                thisObj.draw();
                                sortedObjectsToDraw[i] = null;
                            }//end of ifthisObj effective y pos < tile effective y pos
                        }//end of if sortedObjects[i] != null
                    }//end of for loop through sortedObjectsToDraw

                    //if(isInViewPort(scaledCanvas, drawTileX, drawTileY)) {
                        tileSet.drawTileAt(scaledContext, tileKindHere, drawTileX, drawTileY);
                   // }

                }//end of if-else heightMap data is > 0
            }//end if-else for not drawing TILE.WALL etc

            for(let j = 0; j < tilesToDrawLater.length; j++) {
                const aLaterTile = tilesToDrawLater[j];
                if(aLaterTile != null) {
                    if(aLaterTile.y + WORLD_H * aLaterTile.height < drawTileY) {
                        //if(isInViewPort(scaledCanvas, aLaterTile.x, aLaterTile.y)) {
                            tileSet.drawTileAt(scaledContext, aLaterTile.kind, aLaterTile.x, aLaterTile.y);
                            tilesToDrawLater[j] = null;
                        //}
                    }//end of if effective y pos < bottom of current row
                }//end of if aLaterTile != null
            }//end of for loop through the tilesToDrawLater

            drawGrid(drawTileX, drawTileY);
            drawTileX += WORLD_W;
        }//end of inner loop (done drawing a row)

        drawTileY += WORLD_H;
        drawTileX = 0;
    }//end of outer loop (done drawing from tile map)

    for(let i = 0; i < tilesToDrawLater.length; i++) {
        if(tilesToDrawLater[i] != null) {
            const aLaterTile = tilesToDrawLater[i];
            //if(isInViewPort(scaledCanvas, aLaterTile.x, aLaterTile.y)) {
                tileSet.drawTileAt(scaledContext, aLaterTile.kind, aLaterTile.x, aLaterTile.y);
           //}
        }
    }
}//End of drawDepthSorted function

function findAndSortObjectsToDraw(objArray) {
    const resultArray = [];
    for(let i = 0; i < objArray.length; i++) {
        const thisObj = objArray[i];

        //Is this object on screen?
        if(isInViewPort(scaledCanvas, thisObj.x, thisObj.y)) {
            resultArray.push(thisObj);
        }
    }

    //sort the result array so the objects closer to the bottom
    //of the screen are at the end of the array
    resultArray.sort((a, b) => ((a.y + a.h) > (b.y + b.h)) ? 1 : -1);

    return resultArray;
}

function shouldDrawTile(tileKind) {
    if((tileKind == TILE.BROKEN_SKATEBOARD) ||
    (tileKind == TILE.BURNER_PHONE) ||
    (tileKind == TILE.CROWBAR) ||
    (tileKind == TILE.HOODIE) ||
    (tileKind == TILE.MEDICAL_NOTEBOOK) ||
    (tileKind == TILE.SEALED_TUBE) ||
    (tileKind == TILE.THUMB_DRIVE) ||
    (tileKind == TILE.TRAIN_TICKET) ||
    (tileKind == TILE.SWITCH_LOCATION) ||
    (tileKind == TILE.WALL) ||
    (tileKind == TILE.PLAYER_START))  {
        return false;
    }

    return true;
}

function drawWorld(nonTileObjs) {
    drawLayer(locationList[locationNow].layers[Layer.Ground]);
    //drawLayer(locationList[locationNow].layers[Layer.Depth_Sorted]);
    //findAndSortObjectsToDraw(nonTileObjs).forEach(o=>{o.draw()});
    drawTraffic(true);
    drawDepthSorted(nonTileObjs);
    drawTraffic(false);
} //end of draw world

function isInViewPort(aCanvas, x, y) {
    return (
        x < mainCamera.camPanX + aCanvas.width &&
        x > mainCamera.camPanX - WORLD_W &&
        y < mainCamera.camPanY + aCanvas.height &&
        y > mainCamera.camPanY - WORLD_H
    )
    
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
    let playerWorldRow = Math.floor(1 + whichEntity.y / WORLD_H);
    let arrayIndexUnderPlayer = rowColToArrayIndex(playerWorldCol, playerWorldRow);

    if (playerWorldCol >= 0 && playerWorldCol < worldCols &&
        playerWorldRow >= 0 && playerWorldRow < worldRows) {
        let tileHere = returnTileTypeAtColRow(playerWorldCol, playerWorldRow);

        if (tileHere == TILE.SWITCH_LOCATION) {
            goToDestinationFor(arrayIndexUnderPlayer);
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
