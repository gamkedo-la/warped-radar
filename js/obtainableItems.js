function assignXAndYCoordinatesOfItems() {
  let arrayIndex = 0;
  let tileX = 0;
  let tileY = 0;
  for (let eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (let eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
          let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
          let tileKindHere = worldGrid[arrayIndex];
           switch (tileKindHere) {
               case TILE_BROKEN_SKATEBOARD:
                   brokenSkateBoard.x = tileX;
                   brokenSkateBoard.y = tileY;
                   break;
               case TILE_BURNER_PHONE:
                   burnerPhone.x = tileX;
                   burnerPhone.y = tileY;
                   break;
               case TILE_CROWBAR:
                   crowbar.x = tileX;
                   crowbar.y = tileY;
                   break;
               case TILE_HOODIE:
                   hoodie.x = tileX;
                   hoodie.y = tileY;
                   break;
               case TILE_MEDICAL_NOTEBOOK:
                   medicalNotebook.x = tileX;
                   medicalNotebook.y = tileY;
                   break;
               case TILE_SEALED_TUBE:
                   sealedTube.x = tileX;
                   sealedTube.y = tileY;
                   break;
               case TILE_THUMB_DRIVE:
                   thumbDrive.x = tileX;
                   thumbDrive.y = tileY;
                   break;
               case TILE_TRAIN_TICKET:
                   trainTicket.x = tileX;
                   trainTicket.y = tileY;
                   break;
          }
          tileX += WORLD_W;
   }
   tileY += WORLD_H;
   tileX = 0;
 }
}

let brokenSkateBoard = new colliderClass(undefined,undefined, WORLD_W,WORLD_H, 0,0);
let burnerPhone = new colliderClass(undefined,undefined, WORLD_W,WORLD_H, 0,0);
let crowbar = new colliderClass(undefined,undefined, WORLD_W,WORLD_H, 0,0);
let hoodie = new colliderClass(undefined,undefined, WORLD_W,WORLD_H, 0,0);
let medicalNotebook = new colliderClass(undefined,undefined, WORLD_W,WORLD_H, 0,0);
let sealedTube = new colliderClass(undefined,undefined, WORLD_W,WORLD_H, 0,0);
let thumbDrive = new colliderClass(undefined,undefined, WORLD_W,WORLD_H, 0,0);
let trainTicket = new colliderClass(undefined,undefined, WORLD_W,WORLD_H, 0,0);

let arrayOfObtainableItems = [brokenSkateBoard, burnerPhone, crowbar, hoodie, medicalNotebook, sealedTube, thumbDrive, trainTicket];
