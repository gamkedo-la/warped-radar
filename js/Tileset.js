//Tileset
function Tileset(image, tileWidth, tileHeight) {
    this.image = image;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.width = this.image.width;
    this.height = this.image.height;
    const tilesPerRow = Math.floor(this.width / this.tileWidth);

    this.drawTileAt = function(context, index, drawX, drawY, drawWidth = this.tileWidth, drawHeight = this.tileHeight) {
        const tilePosition = this.positionForIndex(index);

        context.drawImage(this.image, tilePosition.x, tilePosition.y, 
                                      this.tileWidth, this.tileHeight, 
                                      drawX, drawY, drawWidth, drawHeight);
    };

    this.positionForIndex = function(index) {
        const xPos = this.tileWidth * Math.floor(index % tilesPerRow);
        const yPos = this.tileHeight * Math.floor(index / tilesPerRow);

        return {x:xPos, y:yPos};
    };
};