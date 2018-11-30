let levelEditor = new(function () {
    this.isOn = false;

    let showNewGrid = false;
    let tileUnderMouse = null;
    let levelCol = 0;
    let levelRow = 0;
    let defaultSet = [TILE_GROUND, TILE_WALL, TILE_SWITCH_LOCATION, TILE_BROKEN_SKATEBOARD, TILE_BURNER_PHONE, TILE_CROWBAR, TILE_HOODIE, TILE_MEDICAL_NOTEBOOK, TILE_SEALED_TUBE, TILE_THUMB_DRIVE, TILE_TRAIN_TICKET]; //will switch out for different tiles later
    let tileSets = {
        sideWalks: [TILE_SIDEWLAK, TILE_SIDEWALK_VERTICAL, TILE_SIDEWALK_RIGHTCORNER],
        buildings: [TILE_TESTBUILDING_LEFT, TILE_TESTBUILDING_RIGHT, TILE_TESTBUILDING_BOTTOMLEFT, TILE_TESTBUILDING_BOTTOMRIGHT, TILE_TEST_CONVENIENCE_STORELEFT, TILE_TEST_CONVENIENCE_STOREMIDDLE, TILE_TEST_CONVENIENCE_STORERIGHT, TILE_TEST_CONVENIENCE_STOREBOTTOMLEFT, TILE_TEST_CONVENIENCE_STOREBOTTOMMIDDLE, TILE_TEST_CONVENIENCE_STOREBOTTOMRIGHT]
    }
    
    let currentlySelectedSet = defaultSet;
    let currentTileIndex = 0;

    this.pickASet = function (set) {
        currentlySelectedSet = set;
        currentTileIndex = 0;
    }

    this.editorKeyHandle = function (keyCode) {
        if (this.isOn) {
            if (keysPressed(KEY_A)) {
                currentTileIndex--;
                if (currentTileIndex <= 0) currentTileIndex = 0;
            } else if (keysPressed(KEY_D)) {
                currentTileIndex++;
                if (currentTileIndex >= currentlySelectedSet.length)
                    currentTileIndex = currentlySelectedSet.length - 1;
            } else if (keysPressed(KEY_ZERO)) {
                this.pickASet(defaultSet);
            } else if (keysPressed(KEY_ONE)) {
                this.pickASet(tileSets.sideWalks);
            } else if (keysPressed(KEY_TWO)) {
                this.pickASet(tileSets.buildings);
            } else if (keysPressed(KEY_THREE)) {

            } else if (keysPressed(KEY_SPACE)) {
                showNewGrid = true;
            }
        }
    }

    this.roomTileCoordinate = function () {
        if (this.isOn) {
            tileUnderMouse = getTileIndexAtPixelCoord(mouseX / PIXELS_PER_SCALE + camPanX, mouseY / PIXELS_PER_SCALE + camPanY);

            let levelCol = arrayIndexToCol(tileUnderMouse);
            let levelRow = arrayIndexToRow(tileUnderMouse);
            let tileX = (levelCol * WORLD_W) - camPanX;
            let tileY = (levelRow * WORLD_H) - camPanY;

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
            let tileKindHere = worldGrid[tileUnderMouse];
            if (currentlySelectedSet[currentTileIndex] == undefined) {
                console.log("undefined");
                return;
            }
            worldGrid[tileUnderMouse] = currentlySelectedSet[currentTileIndex];
        }
    }

    this.showNewGrid = function () {
        if (showNewGrid) {
            console.log("let " + locationList[locationNow].name + " = \n{ \n" + "layout: [" + worldGrid + "],\n" + "columns: " + locationList[locationNow].columns + ",\n" + "rows: " + locationList[locationNow].rows + ",\n" + "name: " + "\"" + locationList[locationNow].name + "\"" + "\n}");
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
