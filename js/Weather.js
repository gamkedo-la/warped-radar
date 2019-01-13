
let isDusty = false; // motes of dust in the air
let isRainy = false; // pouring rain
let isFoggy = true; // clouds of rolling fog

let rainCounter = 0;
let perlinByteArray = null;

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

    if (isDusty) {

        if (!perlinByteArray) {
            // this gives us semi-random "fades"
            var tempcanvas = document.createElement('canvas');
            var tempcontext = tempcanvas.getContext('2d');
            tempcontext.drawImage(perlinNoiseImage, 0, 0 );
            perlinByteArray = tempcontext.getImageData(0, 0, perlinNoiseImage.width, perlinNoiseImage.height).data;
            console.log("Perlin noise data generated...");
        }

        // fade in and out randonly, irregularly
        canvasContext.globalAlpha = perlinByteArray[Math.round((rainCounter / 10) % perlinByteArray.length)] / 255 * 0.25; // never very opaque

        // near the player?
        //canvasContext.drawImage(dustEffectImage,-mainCamera.camPanX*2,-mainCamera.camPanY*2);
        canvasContext.drawImage(dustEffectImage,player.x,player.y);

        canvasContext.drawImage(dustEffectImage,
            ((-mainCamera.camPanX+rainCounter/8)%CANVAS_WIDTH),CANVAS_HEIGHT/2-dustEffectImage.height);
            canvasContext.drawImage(fogEffectImage,
            ((-mainCamera.camPanX+rainCounter/7)%CANVAS_WIDTH)-fogEffectImage.width,CANVAS_HEIGHT/2-dustEffectImage.height);
            canvasContext.drawImage(fogEffectImage,
            ((-mainCamera.camPanX+rainCounter/6)%CANVAS_WIDTH)+fogEffectImage.width,CANVAS_HEIGHT/2-dustEffectImage.height);

        canvasContext.drawImage(dustEffectImage,
            ((-mainCamera.camPanX-rainCounter/8)%CANVAS_WIDTH),CANVAS_HEIGHT/2-dustEffectImage.height+32);
            canvasContext.drawImage(dustEffectImage,
            ((-mainCamera.camPanX-rainCounter/7)%CANVAS_WIDTH)-fogEffectImage.width,CANVAS_HEIGHT/2-dustEffectImage.height+32);
            canvasContext.drawImage(dustEffectImage,
            ((-mainCamera.camPanX-rainCounter/6)%dustEffectImage.width)+fogEffectImage.width,CANVAS_HEIGHT/2-dustEffectImage.height+32);



        canvasContext.globalAlpha = 1;
    }

}