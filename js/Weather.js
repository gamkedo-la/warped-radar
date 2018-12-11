
let isRainy = false;
let isFoggy = true;
let rainCounter = 0;
function drawWeatherEffects() {
    rainCounter++;
    let sx = 0;
    let sy = CANVAS_HEIGHT - ((rainCounter*8) % CANVAS_HEIGHT);

    if (isRainy) {
        canvasContext.drawImage(rainEffectImage,
            sx,sy,CANVAS_WIDTH,CANVAS_HEIGHT,
            -mainCamera.camPanX,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        sx = 64;

        sy = CANVAS_HEIGHT - ((rainCounter*2) % CANVAS_HEIGHT);
        canvasContext.drawImage(rainEffectImage,
            sx,sy,CANVAS_WIDTH,CANVAS_HEIGHT,
            -mainCamera.camPanX,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }

    if (isFoggy) {
        canvasContext.drawImage(fogEffectImage,
        ((-mainCamera.camPanX+rainCounter/2)%fogEffectImage.width),CANVAS_HEIGHT-fogEffectImage.height);
        canvasContext.drawImage(fogEffectImage,
        ((-mainCamera.camPanX+rainCounter/2)%fogEffectImage.width)-fogEffectImage.width,CANVAS_HEIGHT-fogEffectImage.height);
        canvasContext.drawImage(fogEffectImage,
        ((-mainCamera.camPanX+rainCounter/2)%fogEffectImage.width)+fogEffectImage.width,CANVAS_HEIGHT-fogEffectImage.height);

        //canvasContext.globalAlpha = 0.5;
        canvasContext.drawImage(fogEffectImage,
            ((-mainCamera.camPanX-rainCounter)%fogEffectImage.width),CANVAS_HEIGHT-fogEffectImage.height+32);
            canvasContext.drawImage(fogEffectImage,
            ((-mainCamera.camPanX-rainCounter)%fogEffectImage.width)-fogEffectImage.width,CANVAS_HEIGHT-fogEffectImage.height+32);
            canvasContext.drawImage(fogEffectImage,
            ((-mainCamera.camPanX-rainCounter)%fogEffectImage.width)+fogEffectImage.width,CANVAS_HEIGHT-fogEffectImage.height+32);
        //canvasContext.globalAlpha = 1;
    }

}