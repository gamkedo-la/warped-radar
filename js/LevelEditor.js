function LevelEditor () {
    this.isOn = false;

    let showNewGrid = false;
    let tileUnderMouse = null;
    let levelCol = 0;
    let levelRow = 0;
    let defaultSet = Object.values(TILE);
//    let defaultSet = [TILE.GROUND, TILE.WALL, TILE.SWITCH_LOCATION, TILE.BROKEN_SKATEBOARD, TILE.BURNER_PHONE, TILE.CROWBAR, TILE.HOODIE, TILE.MEDICAL_NOTEBOOK, TILE.SEALED_TUBE, TILE.THUMB_DRIVE, TILE.TRAIN_TICKET]; //will switch out for different tiles later
    console.log("Default Set length: " + defaultSet.length);
    let tileSets = {
        sideWalks: [TILE.SIDEWALK, TILE.SIDEWALK_VERTICAL, TILE.SIDEWALK_RIGHT_CORNER],
        buildings: [TILE.BUILDING_LEFT, TILE.BUILDING_RIGHT, TILE.BUILDING_BOTTOM_LEFT, TILE.BUILDING_BOTTOM_RIGHT, TILE.CONVENIENCE_STORE_LEFT, TILE.CONVENIENCE_STORE_MIDDLE, TILE.CONVENIENCE_STORE_RIGHT, TILE.CONVENIENCE_STORE_BOTTOM_LEFT, TILE.CONVENIENCE_STORE_BOTTOM_MIDDLE, TILE.CONVENIENCE_STORE_BOTTOM_RIGHT]
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
                if (currentTileIndex <= 0) {
                      currentTileIndex = currentlySelectedSet.length - 1;
//                    currentTileIndex = 0;
                }
            } else if (keysPressed(KEY_D)) {
                currentTileIndex++;
                if (currentTileIndex >= currentlySelectedSet.length)
                      currentTileIndex = 0;
//                    currentTileIndex = currentlySelectedSet.length - 1;
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
            tileUnderMouse = getTileIndexAtPixelCoord(mouseX / PIXELS_PER_SCALE + mainCamera.camPanX, mouseY / PIXELS_PER_SCALE + mainCamera.camPanY);

            let levelCol = arrayIndexToCol(tileUnderMouse);
            let levelRow = arrayIndexToRow(tileUnderMouse);
            let tileX = (levelCol * WORLD_W) - mainCamera.camPanX;
            let tileY = (levelRow * WORLD_H) - mainCamera.camPanY;

            mouseOverTileIdx = rowColToArrayIndex(levelCol, levelRow);
            scaledContext.strokeRect(tileX, tileY, WORLD_W, WORLD_H);
            scaledContext.strokeStyle = "orange";
            scaledContext.lineWidth = 2;
            tileSet.drawTileAt(scaledContext, currentTileIndex, tileX, tileY, WORLD_W, WORLD_H);
        }
    }

    this.editTileOnMouseClick = function () {
        console.log("Current Tile Index: " + currentTileIndex);
        if (this.isOn) {
            scaledContext.lineWidth = 7;
            if (currentlySelectedSet[currentTileIndex] == undefined) {
                console.log("undefined");
                return;
            }
            locationList[locationNow].layers[Layer.Ground][tileUnderMouse] = currentlySelectedSet[currentTileIndex];
        }
    }

    this.showNewGrid = function () {
        if (showNewGrid) {
            console.log("let " + locationList[locationNow].name + " = \n{ \n" + "layer: [" + locationList[locationNow].layers[Layer.Ground] + "],\n" + "columns: " + locationList[locationNow].columns + ",\n" + "rows: " + locationList[locationNow].rows + ",\n" + "name: " + "\"" + locationList[locationNow].name + "\"" + "\n}");
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

}
