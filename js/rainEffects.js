
var isRainy = true;
var isFoggy = true;
var rainCounter = 0;
function drawRainEffects() {
    rainCounter++;
    var sx = 0;
    var sy = CANVAS_HEIGHT - ((rainCounter*8) % CANVAS_HEIGHT);

    if (isRainy) {
        canvasContext.drawImage(rainEffectImage,
            sx,sy,CANVAS_WIDTH,CANVAS_HEIGHT,
            -camPanX,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        sx = 64;

        sy = CANVAS_HEIGHT - ((rainCounter*2) % CANVAS_HEIGHT);
        canvasContext.drawImage(rainEffectImage,
            sx,sy,CANVAS_WIDTH,CANVAS_HEIGHT,
            -camPanX,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }

    if (isFoggy) {
        canvasContext.drawImage(fogEffectImage,
        ((-camPanX+rainCounter/2)%fogEffectImage.width),CANVAS_HEIGHT-fogEffectImage.height);
        canvasContext.drawImage(fogEffectImage,
        ((-camPanX+rainCounter/2)%fogEffectImage.width)-fogEffectImage.width,CANVAS_HEIGHT-fogEffectImage.height);
        canvasContext.drawImage(fogEffectImage,
        ((-camPanX+rainCounter/2)%fogEffectImage.width)+fogEffectImage.width,CANVAS_HEIGHT-fogEffectImage.height);
    }

}