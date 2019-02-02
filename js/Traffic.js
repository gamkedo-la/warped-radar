const trafficXMin = -1920;
const trafficXMax = 1920;
const trafficY = 555;
const trafficDepthNudge = 10;

let trafficX = 0;

// this function is called twice, but we only render
// when appropriate based on player y pos
// so that cars are drawn in front or behind player
function drawTraffic(drawingUnderPlayer) {

    if (locationNow != 0) return; // must be in main city

    trafficX++;

    if (drawingUnderPlayer && player.y<=trafficY+trafficDepthNudge) return; // player not in front of cars - don't draw

    if (!drawingUnderPlayer && player.y>trafficY+trafficDepthNudge) return; // player not behind cars - don't draw

    if (trafficX > trafficXMax) trafficX = trafficXMin; // scroll and loop

    scaledContext.drawImage(trafficEffectImage,trafficX,trafficY);  
}

