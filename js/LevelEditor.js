var levelEditor = new(function () {
    this.isOn = false;

    var showNewGrid = false;
    var tileUnderMouse = null;
    var levelCol = 0;
    var levelRow = 0;
    var defaultSet = [TILE_GROUND, TILE_WALL]; //will switch out for different tiles later
    var tileSets = {
        sideWalks: [TILE_SIDEWLAK, TILE_SIDEWALK_VERTICAL, TILE_SIDEWALK_RIGHTCORNER],
        buildings: [TILE_TESTBUILDING_LEFT, TILE_TESTBUILDING_RIGHT, TILE_TESTBUILDING_BOTTOMLEFT, TILE_TESTBUILDING_BOTTOMRIGHT, TILE_TEST_CONVENIENCE_STORELEFT, TILE_TEST_CONVENIENCE_STOREMIDDLE, TILE_TEST_CONVENIENCE_STORERIGHT, TILE_TEST_CONVENIENCE_STOREBOTTOMLEFT, TILE_TEST_CONVENIENCE_STOREBOTTOMMIDDLE, TILE_TEST_CONVENIENCE_STOREBOTTOMRIGHT]
    }
    
    var currentlySelectedSet = defaultSet;
    var currentTileIndex = 0;

    this.pickASet = function (set) {
        currentlySelectedSet = set;
        currentTileIndex = 0;
    }

    this.editorKeyHandle = function (keyCode) {
        if (this.isOn) {
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
        if (this.isOn) {
            tileUnderMouse = getTileIndexAtPixelCoord(mouseX / PIXELS_PER_SCALE + camPanX, mouseY / PIXELS_PER_SCALE + camPanY);

            var levelCol = arrayIndexToCol(tileUnderMouse);
            var levelRow = arrayIndexToRow(tileUnderMouse);
            var tileX = (levelCol * WORLD_W) - camPanX;
            var tileY = (levelRow * WORLD_H) - camPanY;

            mouseOverTileIdx = rowColToArrayIndex(levelCol, levelRow);
            scaledContext.strokeRect(tileX, tileY, WORLD_W, WORLD_H);
            scaledContext.strokeStyle = "orange";
            scaledContext.lineWidth = 2;
            scaledContext.drawImage(worldPics[currentlySelectedSet[currentTileIndex]], tileX, tileY, WORLD_W, WORLD_H);
        }
    }

    this.editTileOnMouseClick = function () {
        if (this.isOn) {
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
            if (newGridName == null) {
                showNewGrid = false;
                return;
            }
            if (newGridName == "") newGridName = "worldGrid";
            console.log("var " + newGridName + " = \n[ \n" + worldGrid + "\n];");
            showNewGrid = false;
            this.isOn = false;
        }
    }

    this.showInstructions = function () {
        if (this.isOn) {
            console.log("Welcome to the editor!");
            console.log("[A] and [D] to change tile");
            console.log("[SPACE] to output the new grid");
            console.log("Note: replacing the tile under the player will change his start point");
            console.log("---------------------------")
            console.log("[1] Sidewalk Tiles");
            console.log("[2] Building Tiles");
            console.log("[0] Default Tiles");
        }
    }

    this.toggle = function () {
        if (dialogueNotShowing() && !inventory.isShowing) {
            this.isOn = !this.isOn;
            this.showInstructions();
        }
    }

})();
