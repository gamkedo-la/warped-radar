var debugMode = false;

var levelEditor = new(function () {
    var tileUnderMouse = null;
    var levelCol = 0;
    var levelRow = 0;
    var roomTileGroup = 0;

    /*var nothingSet = [TILE_TERRAIN, TILE_MOON_TERRAIN, TILE_MOON_TERRAIN_2, TILE_NEXT_LEVEL];
    var groundSet = arrayWithRange(100, startAt = 100); // 100 to 199
    var treeSet = arrayWithRange(100, startAt = 200); // 200 to 299
    var cliffSet = arrayWithRange(100, startAt = 300); // 300 to 399
    var waterSet = arrayWithRange(100, startAt = 400); // 400 to 499
    var pathSet = arrayWithRange(100, startAt = 500); // 500 to 599
    var moonSet = arrayWithRange(100, startAt = 700); // 700 to 799
    var animalSet = arrayWithRange(100, startAt = 800); // 800 to 899
*/
    //var currentlySelectedSet = nothingSet;

    this.editorKeyHandle = function () {

    }

    this.roomTileCoordinate = function () {
        if (debugMode) {
            tileUnderMouse = getTileIndexAtPixelCoord(mouseX / PIXELS_PER_SCALE + camPanX, mouseY / PIXELS_PER_SCALE + camPanY);

            var levelCol = arrayIndexToCol(tileUnderMouse);
            var levelRow = arrayIndexToRow(tileUnderMouse);
            var tileX = (levelCol * WORLD_W) - camPanX;
            var tileY = (levelRow * WORLD_H) - camPanY;

            mouseOverTileIdx = rowColToArrayIndex(levelCol, levelRow);

            colorText("X: " + levelCol + "," + " Y: " + levelRow, mouseX, mouseY, "yellow", "15px Arial", "left", 1);

            drawStrokeRect(scaledContext, tileX, tileY, WORLD_W, WORLD_H, 'red');
        }
    }

})();
