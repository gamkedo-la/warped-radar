var editorMode = false;
var levelEditor = new(function () {
    var showNewGrid = false;
    var tileUnderMouse = null;
    var levelCol = 0;
    var levelRow = 0;
    var defaultSet = [TILE_GROUND, TILE_WALL]; //will switch out for different tiles later
    var tileSets = {
        sideWalks: [TILE_SIDEWLAK, TILE_SIDEWALK_VERTICAL, TILE_SIDEWALK_RIGHTCORNER],
        buildings: [TILE_TESTBUILDING_LEFT, TILE_TESTBUILDING_RIGHT, TILE_TESTBUILDING_BOTTOMLEFT, TILE_TESTBUILDING_BOTTOMRIGHT]
    }
    var currentlySelectedSet = defaultSet;
    var currentTileIndex = 0;

    this.pickASet = function (set) {
        currentlySelectedSet = set;
        currentTileIndex = 0;
    }

    this.editorKeyHandle = function (keyCode) {
        if (editorMode) {
            switch (keyCode) {
                case KEY_A:
                    currentTileIndex--;
                    if (currentTileIndex <= 0) currentTileIndex = 0;
                    break;
                case KEY_D:
                    currentTileIndex++;
                    if (currentTileIndex >= currentlySelectedSet.length)
                        currentTileIndex = currentlySelectedSet.length - 1;
                    break;
                case KEY_ZERO:
                    this.pickASet(defaultSet);
                    break;
                case KEY_ONE:
                    this.pickASet(tileSets.sideWalks);
                    break;
                case KEY_TWO:
                    this.pickASet(tileSets.buildings);
                    break;
                case KEY_THREE:
                    break;
                case KEY_SPACE:
                    showNewGrid = true;
                    break;
            }
        }
    }

    this.roomTileCoordinate = function () {
        if (editorMode) {
            tileUnderMouse = getTileIndexAtPixelCoord(mouseX / PIXELS_PER_SCALE + camPanX, mouseY / PIXELS_PER_SCALE + camPanY);

            var levelCol = arrayIndexToCol(tileUnderMouse);
            var levelRow = arrayIndexToRow(tileUnderMouse);
            var tileX = (levelCol * WORLD_W) - camPanX;
            var tileY = (levelRow * WORLD_H) - camPanY;

            mouseOverTileIdx = rowColToArrayIndex(levelCol, levelRow);

            colorText("X: " + levelCol + "," + " Y: " + levelRow, mouseX, mouseY, "yellow", "15px Arial", "left", 1);
            
            scaledContext.strokeRect(tileX, tileY, WORLD_W, WORLD_H);
            scaledContext.strokeStyle = "orange";
            scaledContext.lineWidth = 2;
            scaledContext.drawImage(worldPics[currentlySelectedSet[currentTileIndex]], tileX, tileY, WORLD_W, WORLD_H);
        }
    }

    this.editTileOnMouseClick = function () {
        if (editorMode) {
            scaledContext.lineWidth = 7;
            var tileKindHere = worldGrid[tileUnderMouse];
            if (currentlySelectedSet[currentTileIndex] == undefined) {
                console.log("undefined");
                return;
            }
            worldGrid[tileUnderMouse] = currentlySelectedSet[currentTileIndex];
        }
    }

    this.showNewGrid = function () {
        if (showNewGrid) {
            var newGridName = prompt("What do you name this grid?");
            if (newGridName == "") newGridName = "worldGrid";
            console.log("var " + newGridName + " = \n[ \n" + worldGrid + "\n];");
            showNewGrid = false;
            editorMode = false;
        }
    }

    this.showInstructions = function () {
        if (editorMode) {
            console.log("Welcome to the editor!");
            console.log("[A] and [D] to change tile");
            console.log("[SPACE] to output the new grid");
            console.log("---------------------------")
            console.log("[1] Sidewalk Tiles");
            console.log("[2] Building Tiles");
            console.log("[0] Default Tiles");
        }
    }

})();
