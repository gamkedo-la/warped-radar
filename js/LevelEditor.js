var levelEditor = new(function () {
    var tileUnderMouse = null;
    var levelCol = 0;
    var levelRow = 0;
    var defaultSet = [TILE_GROUND, TILE_RANDOM];

    var tileSets = [
        [TILE_SIDEWLAK, TILE_SIDEWALK_VERTICAL, TILE_SIDEWALK_RIGHTCORNER],
        [TILE_TESTBUILDING_LEFT, TILE_TESTBUILDING_RIGHT, TILE_TESTBUILDING_BOTTOMLEFT, TILE_TESTBUILDING_BOTTOMRIGHT]
    ]
    var currentlySelectedSet = defaultSet;
    var currentTileIndex = 0;

    this.pickASet = function (set) {
        currentlySelectedSet = set;
        currentTileIndex = 0;
    }

    this.editorKeyHandle = function (keyCode) {
        if (debugMode) {
            switch (keyCode) {
                case KEY_Q:
                    currentTileIndex--;
                    if (currentTileIndex <= 0) currentTileIndex = 0;
                    break;
                case KEY_W:
                    currentTileIndex++;
                    if (currentTileIndex >= currentlySelectedSet.length)
                        currentTileIndex = currentlySelectedSet.length - 1;
                    break;
                case KEY_ONE:
                    this.pickASet(defaultSet);
                    break;
                case KEY_TWO:
                    this.pickASet(tileSets[0]);
                    break;
                case KEY_THREE:
                    this.pickASet(tileSets[1]);
                    break;
            }
        }
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
            canvasContext.drawImage(worldPics[currentlySelectedSet[currentTileIndex]], mouseX, mouseY, WORLD_W, WORLD_H);
        }
    }

    this.editTileOnMouseClick = function () {
        if (debugMode) {
            var tileKindHere = worldGrid[tileUnderMouse];
            if (currentlySelectedSet[currentTileIndex] == undefined) {
                console.log("undefined");
                return;
            }
            worldGrid[tileUnderMouse] = currentlySelectedSet[currentTileIndex];
            //allLevels[currentLevelIndex].layout[tileUnderMouse] = currentlySelectedSet[currentSetIndex];
        }
    }

})();
