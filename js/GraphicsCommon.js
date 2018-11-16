//Graphics Common
function drawRect(x, y, w, h, color,opacity = 1) {
	drawRectToContext(canvasContext, x, y, w, h, color,opacity);
}

function drawRectToContext(whichContext, x, y, w, h, color,opacity = 1) {
	whichContext.fillStyle = color;
	whichContext.globalAlpha = opacity;
	whichContext.fillRect(x, y, w, h);
	//canvasContext.globalAlpha = 1.0; // Needs to be reset back to 1, or the whole canvas will use the same opacity
}

function colorText(showWords, textX, textY, fillColor, fontface, textAlign = 'left', opacity = 1) {
	canvasContext.save();
	canvasContext.textAlign = textAlign;
	canvasContext.font = fontface;
	canvasContext.globalAlpha = opacity;
	canvasContext.fillStyle = fillColor;
	canvasContext.fillText(showWords, textX, textY);
	canvasContext.restore();
}

function outlineCircle(centerX, centerY, radius, strokeColor, lineWidth = 1) {
    canvasContext.strokeStyle = strokeColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.lineWidth = lineWidth;
    canvasContext.stroke();
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function drawBitmapCenteredWithRotation(useBitmap, atX,atY, withAng) {
	canvasContext.save();
	canvasContext.translate(atX, atY);
	canvasContext.rotate(withAng);
	canvasContext.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2);
	canvasContext.restore();
}

function drawStrokeRect(whichContext, topLeftX, topLeftY, boxWidth, boxHeight, strokeColor) {
  whichContext.strokeStyle = strokeColor;
  whichContext.strokeRect(topLeftX, topLeftY, boxWidth, boxHeight);
}
