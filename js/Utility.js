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

function rowColToArrayIndex(col, row) {
    return col + worldCols * row;
}

function getTileTypeAtPixelCoord(x, y) {
	let arrayIndex = getTileIndexAtPixelCoord(x, y);
	let tileKindHere = worldGrid[arrayIndex];
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

function moveCharIfAble(tileType)
{
	for(var i = 0; i < solidTiles.length; i++)
	{
		if(tileType == solidTiles[i])
			return false;
	}
	return true;
}