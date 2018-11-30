function initializeObtainableItems() {
  let arrayIndex = 0;
  let tileX = 0;
  let tileY = 0;
  for (let eachRow = 0; eachRow < worldRows; eachRow++) {
      for (let eachCol = 0; eachCol < worldCols; eachCol++) {
          let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
          let tileKindHere = worldGrid[arrayIndex];
           switch (tileKindHere) {
               case TILE_BROKEN_SKATEBOARD:
                   brokenSkateBoard.drawTileX = tileX;
                   brokenSkateBoard.drawTileY = tileY;
                   brokenSkateBoard.leftEdge = brokenSkateBoard.drawTileX;
                   brokenSkateBoard.rightEdge = brokenSkateBoard.drawTileX + WORLD_W;
                   brokenSkateBoard.topEdge = brokenSkateBoard.drawTileY;
                   brokenSkateBoard.bottomEdge = brokenSkateBoard.drawTileY + WORLD_H;
                   brokenSkateBoard.image = worldPics[17];
                   break;
               case TILE_BURNER_PHONE:
                   burnerPhone.drawTileX = tileX;
                   burnerPhone.drawTileY = tileY;
                   burnerPhone.leftEdge = burnerPhone.drawTileX;
                   burnerPhone.rightEdge = burnerPhone.drawTileX + WORLD_W;
                   burnerPhone.topEdge = burnerPhone.drawTileY;
                   burnerPhone.bottomEdge = burnerPhone.drawTileY + WORLD_H;
                   burnerPhone.image = worldPics[18];
                   break;
               case TILE_CROWBAR:
                   crowbar.drawTileX = tileX;
                   crowbar.drawTileY = tileY;
                   crowbar.leftEdge = crowbar.drawTileX;
                   crowbar.rightEdge = crowbar.drawTileX + WORLD_W;
                   crowbar.topEdge = crowbar.drawTileY;
                   crowbar.bottomEdge = crowbar.drawTileY + WORLD_H;
                   crowbar.image = worldPics[19];
                   break;
               case TILE_HOODIE:
                   hoodie.drawTileX = tileX;
                   hoodie.drawTileY = tileY;
                   hoodie.leftEdge = hoodie.drawTileX;
                   hoodie.rightEdge = hoodie.drawTileX + WORLD_W;
                   hoodie.topEdge = hoodie.drawTileY;
                   hoodie.bottomEdge = hoodie.drawTileY + WORLD_H;
                   hoodie.image = worldPics[20];
                   break;
               case TILE_MEDICAL_NOTEBOOK:
                   medicalNotebook.drawTileX = tileX;
                   medicalNotebook.drawTileY = tileY;
                   medicalNotebook.leftEdge = medicalNotebook.drawTileX;
                   medicalNotebook.rightEdge = medicalNotebook.drawTileX + WORLD_W;
                   medicalNotebook.topEdge = medicalNotebook.drawTileY;
                   medicalNotebook.bottomEdge = medicalNotebook.drawTileY + WORLD_H;
                   medicalNotebook.image = worldPics[21];
                   break;
               case TILE_SEALED_TUBE:
                   sealedTube.drawTileX = tileX;
                   sealedTube.drawTileY = tileY;
                   sealedTube.leftEdge = sealedTube.drawTileX;
                   sealedTube.rightEdge = sealedTube.drawTileX + WORLD_W;
                   sealedTube.topEdge = sealedTube.drawTileY;
                   sealedTube.bottomEdge = sealedTube.drawTileY + WORLD_H;
                   sealedTube.image = worldPics[22];
                   break;
               case TILE_THUMB_DRIVE:
                   thumbDrive.drawTileX = tileX;
                   thumbDrive.drawTileY = tileY;
                   thumbDrive.leftEdge = thumbDrive.drawTileX;
                   thumbDrive.rightEdge = thumbDrive.drawTileX + WORLD_W;
                   thumbDrive.topEdge = thumbDrive.drawTileY;
                   thumbDrive.bottomEdge = thumbDrive.drawTileY + WORLD_H;
                   thumbDrive.image = worldPics[23];
                   break;
               case TILE_TRAIN_TICKET:
                   trainTicket.drawTileX = tileX;
                   trainTicket.drawTileY = tileY;
                   trainTicket.leftEdge = trainTicket.drawTileX;
                   trainTicket.rightEdge = trainTicket.drawTileX + WORLD_W;
                   trainTicket.topEdge = trainTicket.drawTileY;
                   trainTicket.bottomEdge = trainTicket.drawTileY + WORLD_H;
                   trainTicket.image = worldPics[24];
                   break;
          }
          tileX += WORLD_W;
   }
   tileY += WORLD_H;
   tileX = 0;
 }
}

function obtainableItemClass(drawTileX,drawTileY, tileWidth,tileHeight, name, description, image, tileType) {
  this.drawTileX = drawTileX;
  this.drawTileY = drawTileY;
  this.tileWidth = tileWidth;
  this.tileHeight = tileHeight;
  this.leftEdge = drawTileX;
  this.rightEdge = drawTileX + WORLD_W;
  this.topEdge = drawTileY;
  this.bottomEdge = drawTileY + WORLD_H;

  this.obtainable = false;

  this.name = name;
  this.description = description;
  this.image = image;
  this.tileType = tileType;
}

let brokenSkateBoard = new obtainableItemClass(undefined,undefined, WORLD_W,WORLD_H, "brokenSkateBoard", "Broken Skateboard", worldPics[17], TILE_BROKEN_SKATEBOARD);
let burnerPhone = new obtainableItemClass(undefined,undefined, WORLD_W,WORLD_H, "burnerPhone", "Burner Phone",worldPics[18], TILE_BURNER_PHONE);
let crowbar = new obtainableItemClass(undefined,undefined, WORLD_W,WORLD_H, "crowbar", "Crowbar",worldPics[19], TILE_CROWBAR);
let hoodie = new obtainableItemClass(undefined,undefined, WORLD_W,WORLD_H, "hoodie", "Hoodie",worldPics[20], TILE_HOODIE);
let medicalNotebook = new obtainableItemClass(undefined,undefined, WORLD_W,WORLD_H, "medicalNotebook", "Medical Notebook",worldPics[21], TILE_MEDICAL_NOTEBOOK);
let sealedTube = new obtainableItemClass(undefined,undefined, WORLD_W,WORLD_H, "sealedTube", "Sealed Tube",worldPics[22], TILE_SEALED_TUBE);
let thumbDrive = new obtainableItemClass(undefined,undefined, WORLD_W,WORLD_H, "thumbDrive", "Thumb Drive",worldPics[23], TILE_THUMB_DRIVE);
let trainTicket = new obtainableItemClass(undefined,undefined, WORLD_W,WORLD_H, "trainTicket", "Train Ticket",worldPics[24], TILE_TRAIN_TICKET);

let arrayOfObtainableItems = [brokenSkateBoard, burnerPhone, crowbar, hoodie, medicalNotebook, sealedTube, thumbDrive, trainTicket];

function checkForObtainableItems() {
  for (let obtainableItemsIndex = 0; obtainableItemsIndex < arrayOfObtainableItems.length; obtainableItemsIndex++) {
    let itemTile = arrayOfObtainableItems[obtainableItemsIndex];
    if (player.x > itemTile.leftEdge && player.x < itemTile.rightEdge &&  player.y + 30 > itemTile.topEdge && player.y < itemTile.bottomEdge) {
      itemTile.obtainable = true;
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
      arrayOfObtainableItems[i].leftEdge = undefined;
      arrayOfObtainableItems[i].rightEdge = undefined;
      arrayOfObtainableItems[i].topEdge = undefined;
      arrayOfObtainableItems[i].bottomEdge = undefined;
      for (let eachRow = 0; eachRow < worldRows; eachRow++) {//replace item tile with ground tile
          for (let eachCol = 0; eachCol < worldCols; eachCol++) {
              let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
              if (worldGrid[arrayIndex] === arrayOfObtainableItems[i].tileType) {
                worldGrid[arrayIndex] = TILE_GROUND;
              }//end of change item tile to ground tile
            }//end of column loop
          }//end of row loop

      inventory.inventoryItems.push(
        {
          name: arrayOfObtainableItems[i].name,
          description: arrayOfObtainableItems[i].description,
          image: arrayOfObtainableItems[i].image
        }
      )//end of push item to inventory.inventoryItems
    }//end of if itemIsObtainable
  }//end of loop through arrayOfObtainableItems
}//end of obtainItemIfApplicable()

let note, motherboard, memoryChip;

function initializeDefaultItems() {
  note = {
    name: "Note",
    description: "Uncle Dave's Note",
    image: notePic
  };

  inventory.inventoryItems.push(note);

  motherboard = {
    name: "Motherboard",
    description: "Motherboard",
    image: motherboardPic
  }

  inventory.inventoryItems.push(motherboard);

  memoryChip = {
    name: "Memory Chip",
    description: "Memory Chip",
    image: memoryChipPic
  }

  inventory.inventoryItems.push(memoryChip);
}
