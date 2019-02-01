function initializeObtainableItems() {
  let tileX = 0;
  let tileY = 0;
  for(let eachLocation = 0; eachLocation < locationList.length; eachLocation++) {
    const thisLocation = locationList[eachLocation];
    const rows = thisLocation.rows;
    const cols = thisLocation.columns;

    for (let eachRow = 0; eachRow < rows; eachRow++) {
      for (let eachCol = 0; eachCol < cols; eachCol++) {
        let arrayIndex = rowColToArrayIndex(eachCol, eachRow, cols);
        let tileKindHere = thisLocation.layers[Layer.Depth_Sorted][arrayIndex];

        for(let i = 0; i < arrayOfObtainableItems.length; i++) {
          if(tileKindHere == arrayOfObtainableItems[i].tileType) {
            arrayOfObtainableItems[i].drawTileX = tileX;
            arrayOfObtainableItems[i].drawTileY = tileY;
            arrayOfObtainableItems[i].x = tileX;
            arrayOfObtainableItems[i].y = tileY;
            arrayOfObtainableItems[i].leftEdge = arrayOfObtainableItems[i].drawTileX;
            arrayOfObtainableItems[i].rightEdge = arrayOfObtainableItems[i].drawTileX + WORLD_W;
            arrayOfObtainableItems[i].topEdge = arrayOfObtainableItems[i].drawTileY;
            arrayOfObtainableItems[i].bottomEdge = arrayOfObtainableItems[i].drawTileY + WORLD_H;
            arrayOfObtainableItems[i].location = eachLocation;
          }
        }

        tileX += WORLD_W;
      }
      tileY += WORLD_H;
      tileX = 0;
    }

    tileY = 0;
  }
}

function ObtainableItem(drawTileX,drawTileY, tileWidth,tileHeight, name, description, image, tileType, location) {
  this.drawTileX = drawTileX;
  this.drawTileY = drawTileY;
  this.tileWidth = tileWidth;
  this.tileHeight = tileHeight;
  this.leftEdge = drawTileX;
  this.rightEdge = drawTileX + WORLD_W;
  this.topEdge = drawTileY;
  this.bottomEdge = drawTileY + WORLD_H;
  this.h = WORLD_H;
  this.x = drawTileX;
  this.y = drawTileY;

  this.obtainable = false;
  this.obtained = false;

  this.name = name;
  this.description = description;
  this.image = image;
  this.tileType = tileType;
  this.location = location;

  this.draw = function() {
    if(!this.obtained) {
      tileSet.drawTileAt(scaledContext, this.tileType, this.drawTileX, this.drawTileY);
    }
  }
}

let brokenSkateBoard = new ObtainableItem(undefined,undefined, WORLD_W,WORLD_H, "brokenSkateBoard", "Broken Skateboard", null, TILE.BROKEN_SKATEBOARD, locationNow);
let burnerPhone = new ObtainableItem(undefined,undefined, WORLD_W,WORLD_H, "burnerPhone", "Burner Phone", null, TILE.BURNER_PHONE, locationNow);
let crowbar = new ObtainableItem(undefined,undefined, WORLD_W,WORLD_H, "crowbar", "Crowbar", null, TILE.CROWBAR, locationNow);
let hoodie = new ObtainableItem(undefined,undefined, WORLD_W,WORLD_H, "hoodie", "Hoodie", null, TILE.HOODIE, locationNow);
let medicalNotebook = new ObtainableItem(undefined,undefined, WORLD_W,WORLD_H, "medicalNotebook", "Medical Notebook", null, TILE.MEDICAL_NOTEBOOK, locationNow);
let sealedTube = new ObtainableItem(undefined,undefined, WORLD_W,WORLD_H, "sealedTube", "Sealed Tube", null, TILE.SEALED_TUBE, locationNow);
let thumbDrive = new ObtainableItem(undefined,undefined, WORLD_W,WORLD_H, "thumbDrive", "Thumb Drive", null, TILE.THUMB_DRIVE, locationNow);
let trainTicket = new ObtainableItem(undefined,undefined, WORLD_W,WORLD_H, "trainTicket", "Train Ticket", null, TILE.TRAIN_TICKET, locationNow);

let arrayOfObtainableItems = [brokenSkateBoard, burnerPhone, crowbar, hoodie, medicalNotebook, sealedTube, thumbDrive, trainTicket];

function checkForObtainableItems() {
  for (let obtainableItemsIndex = 0; obtainableItemsIndex < arrayOfObtainableItems.length; obtainableItemsIndex++) {
    let itemTile = arrayOfObtainableItems[obtainableItemsIndex];
    if(itemTile.location != locationNow) {continue;}//only include obtainableItems in the current location
    if(!eventManager.canShowObtainableItem(itemTile)) {continue;}//don't show items until the right events have transpired

    if (player.x > itemTile.leftEdge && player.x < itemTile.rightEdge &&  player.y + 30 > itemTile.topEdge && player.y < itemTile.bottomEdge) {
      itemTile.obtainable = true;
      player.nearObjOrNPC = arrayOfObtainableItems[obtainableItemsIndex];
      console.log(itemTile.name + " obtainable");
    } else {
      itemTile.obtainable = false;
    }
  }
}

function obtainItemIfApplicable() {
  for (let i = 0; i < arrayOfObtainableItems.length; i++) {
    if (arrayOfObtainableItems[i].obtainable) {
      console.log(arrayOfObtainableItems[i].name + " obtained");
      arrayOfObtainableItems[i].obtained = true;
      eventManager.obtainedItem(arrayOfObtainableItems[i]);
      
      notificationWindow.setMessage('You picked up: ' + arrayOfObtainableItems[i].name + '!');

      arrayOfObtainableItems[i].leftEdge = undefined;
      arrayOfObtainableItems[i].rightEdge = undefined;
      arrayOfObtainableItems[i].topEdge = undefined;
      arrayOfObtainableItems[i].bottomEdge = undefined;
      for (let eachRow = 0; eachRow < worldRows; eachRow++) {//replace item tile with ground tile
          for (let eachCol = 0; eachCol < worldCols; eachCol++) {
              let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
              if (locationList[locationNow].layers[Layer.Depth_Sorted][arrayIndex] === arrayOfObtainableItems[i].tileType) {
                locationList[locationNow].layers[Layer.Depth_Sorted][arrayIndex] = TILE.BLANK;
              }//end of change item tile to ground tile
            }//end of column loop
          }//end of row loop

      inventory.items.push(
        {
          name: arrayOfObtainableItems[i].name,
          description: arrayOfObtainableItems[i].description,
          image: arrayOfObtainableItems[i].tileType
        }
      )//end of push item to inventory.items
    }//end of if itemIsObtainable
  }//end of loop through arrayOfObtainableItems
}//end of obtainItemIfApplicable()

let note, motherboard, memoryChip;

function initializeDefaultItems() {
  note = {
    name: "Note",
    description: "It's missing a piece",
    image: notePic,
    actions: [["Read", "I can't read it just yet"], ["Talk to", "Hello note. You're the only one that understands me"], ["Give to", "Give to who?"]]
  };

  inventory.items.push(note);

  motherboard = {
    name: "Motherboard",
    description: "It's a Motherboard",
    image: motherboardPic,
    actions: [["Look at", "...I feel like I should be doing something more important"], ["Throw away", "No, I can't litter!"], ["Eat", "I'm hungry, but not THAT hungry!"]]
  }

  inventory.items.push(motherboard);

  memoryChip = {
    name: "Memory Chip",
    description: "It's a Memory Chip",
    image: memoryChipPic,
    actions: [["Use", "It's too old to use anywhere"], ["Install into self", "Sadly, this chip is outdated by at least a millenia."]]
  }

  inventory.items.push(memoryChip);
}
