const DEGREES_TO_RADIANS = Math.PI / 180;

function getRandomNumberBetweenMinMax(min, max) {
  return Math.random() * (max - min) + min;
}

function getRoundedRandomNumberBetweenMinMax(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function checkIfNumberIsInRange(lowerNumber, numberToCheckIfInRange, higherNumber) {
	return lowerNumber <= numberToCheckIfInRange && numberToCheckIfInRange <= higherNumber;
}

const clamp = function(n, min, max) {
    return Math.min(Math.max(n, min), max);
};

function getTextWidth(txt, font) {
	canvasContext.save();
	canvasContext.font = font;

	let width = canvasContext.measureText(txt).width;

	canvasContext.restore();

	return width;
}

function rowColToArrayIndex(col, row, currentWorldCols = worldCols) {
	return col + currentWorldCols * row;
	//
}

function rowColFromArrayIndex(currentWorldCols = worldCols, arrayIndex){
	return {
		x: arrayIndex % worldCols,
		y: Math.floor(ArrayIndex / worldCols)
	}
}

function getTileTypesAtRectInLayer(x, y, width, height, layer) {
	const upperLeft = getTileTypeAtPixelCoordInLayer(x, y, layer);
	const upperRight = getTileTypeAtPixelCoordInLayer(x + width, y, layer);
	const lowerLeft = getTileTypeAtPixelCoordInLayer(x, y + height, layer);
	const lowerRight = getTileTypeAtPixelCoordInLayer(x + width, y + height, layer);

	return {upperLeft:upperLeft, upperRight:upperRight, lowerLeft:lowerLeft, lowerRight:lowerRight};
}

function getNextTileTypesAtRectInLayer(rect, deltaX, deltaY, layer) {
	const newX = rect.x + deltaX;
	const fudge = (rect.y / WORLD_H) - rect.height;//accounts for proportional offset in yDirection
	const newY = rect.y + deltaY - fudge;

	return getTileTypesAtRectInLayer(newX, newY, rect.width, rect.height, layer);
}

function getTileTypeAtPixelCoord(x, y) {
	let arrayIndex = getTileIndexAtPixelCoord(x, y);
	let tileKindHere = locationList[locationNow].layers[Layer.Ground][arrayIndex];
	return tileKindHere;
}

function getTileTypeAtPixelCoordInLayer(x, y, layer) {
	let arrayIndex = getTileIndexAtPixelCoord(x, y);
	let tileKindHere = layer[arrayIndex];
	return tileKindHere;
}

function getTileIndexAtPixelCoord(x, y) {
	let colFromX = Math.floor(x / WORLD_W);
	let rowFromY = Math.floor(y / WORLD_H);
	let arrayIndex = rowColToArrayIndex(colFromX, rowFromY);
	return arrayIndex;
}

function arrayIndexToCol(index) {
	return index % worldCols;
}

function arrayIndexToRow(index) {
	return Math.floor(index / worldCols);
}

function colToCenteredX(col) {
	return (col * WORLD_W) + WORLD_W/2;
}

function rowToCenteredY(row) {
	return (row * WORLD_H) + WORLD_H/2;
}

function indexToCenteredXY(index) {
	let colIndex = arrayIndexToCol(index);
	let rowIndex = arrayIndexToRow(index);
	return {
			x: colToCenteredX(colIndex),
			y: rowToCenteredY(rowIndex)
		};
}

function moveOntoTileIfAble(tileType) {
	for(let i = 0; i < solidTiles.length; i++) {
		if(tileType == solidTiles[i]) {return false;}
	}
	return true;
}

function doRectsIntersect(rect1, rect2, deltaX, deltaY) {//assume axis aligned bounding boxes
	//check each corner of rect1.  If there is an intersection at least one
	//corner of rect1 will be inside rect2.

	const result = {
		topLeft:false,
		topRight:false,
		bottomLeft:false,
		bottomRight:false
	}

	if((rect1.x + deltaX >= rect2.x) && (rect1.x + deltaX <= rect2.x + rect2.width)) {
	//left edge of rect 1 is between the left & right edges of rect 2

		if((rect1.y + deltaY >= rect2.y) && (rect1.y + deltaY <= rect2.y + rect2.height)) {
		//top edge of rect 1 is between the top & bottom edges of rect 2

			//top left corner intersects
			result.topLeft = true;
		}
		
		if((rect1.y + deltaY + rect1.height >= rect2.y) && (rect1.y + deltaY + rect1.height <= rect2.y + rect2.height)) {
		//bottom edge of rect 1 is between the top & bottom edges of rect 2

			//bottom left corner intersects
			result.bottomLeft = true;
		}
	}
	
	if((rect1.x + deltaX + rect1.width >= rect2.x) && (rect1.x + deltaX + rect1.width <= rect2.x + rect2.width)) {
	//right edge of rect 1 is between the left & right edges of rect 2

		if((rect1.y + deltaY >= rect2.y) && (rect1.y + deltaY <= rect2.y + rect2.height)) {
		//top edge of rect 1 is between the top & bottom edges of rect 2

			//top right corner intersects
			result.topRight = true;
		}
		
		if((rect1.y + deltaY + rect1.height >= rect2.y) && (rect1.y + deltaY + rect1.height <= rect2.y + rect2.height)) {
		//bottom edge of rect 1 is between the top & bottom edges of rect 2

			//bottom right corner intersects
			result.bottomRight = true;
		}
	}

	return result;
}