var debugMode = false;

var levelEditor = new(function () {
    var tileUnderMouse = null;
    var levelCol = 0;
    var levelRow = 0;

    this.roomTileCoordinate = function () {
        if (debugMode) {
            tileUnderMouse = getTileIndexAtPixelCoord(mouseX/PIXELS_PER_SCALE + camPanX, mouseY/PIXELS_PER_SCALE + camPanY);

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
