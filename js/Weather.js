
var isRainy = false;
var isFoggy = true;
var rainCounter = 0;
function drawWeatherEffects() {
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

        //canvasContext.globalAlpha = 0.5;
        canvasContext.drawImage(fogEffectImage,
            ((-camPanX-rainCounter)%fogEffectImage.width),CANVAS_HEIGHT-fogEffectImage.height+32);
            canvasContext.drawImage(fogEffectImage,
            ((-camPanX-rainCounter)%fogEffectImage.width)-fogEffectImage.width,CANVAS_HEIGHT-fogEffectImage.height+32);
            canvasContext.drawImage(fogEffectImage,
            ((-camPanX-rainCounter)%fogEffectImage.width)+fogEffectImage.width,CANVAS_HEIGHT-fogEffectImage.height+32);
        //canvasContext.globalAlpha = 1;
    }

}