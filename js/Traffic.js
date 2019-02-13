const trafficXMin = -1920; // start before being visible
const trafficXMax = 2400; // go past the end of the map
const trafficY = 24*40; // where the street is
const trafficDepthNudge = 10; // so it looks right

let trafficX = 0;

// this function is called twice, but we only render
// when appropriate based on player y pos
// so that cars are drawn in front or behind player
function drawTraffic(drawingUnderPlayer) {

    if (locationNow != 0) return; // must be in main city

    trafficX++;

    let playerInTrafficStreet = false;
    if (player.y > 950 && player.y < 1033) {
      playerInTrafficStreet = true;
    }

    let playerXCloseToFirstCar = false;
    if ( ( Math.floor(player.x) - trafficX >= 800 ) &&  ( Math.floor(player.x) - trafficX <= 803 ) ) {
      playerXCloseToFirstCar = true;
    }
    let playerXClosetoSecondCar = false;
    if ( ( Math.floor(player.x) - trafficX >= 425 ) && ( Math.floor(player.x) - trafficX <= 428 ) ) {
      playerXClosetoSecondCar = true;
    }
    let playerXCloseToThirdCar = false;
    if ( ( Math.floor(player.x) - trafficX >= 325 ) &&  ( Math.floor(player.x) - trafficX <= 328 ) ) {
      playerXCloseToThirdCar = true;
    }

    if ( playerXCloseToFirstCar && playerInTrafficStreet ) {
      horn_2_trimmed.play();
    }
    if ( playerXClosetoSecondCar && playerInTrafficStreet ) {
      horn_1_trimmed.play();
    }
    if ( playerXCloseToThirdCar && playerInTrafficStreet ) {
      horn_3_trimmed.play();
    }


    if (drawingUnderPlayer && player.y<=trafficY+trafficDepthNudge) return; // player not in front of cars - don't draw

    if (!drawingUnderPlayer && player.y>trafficY+trafficDepthNudge) return; // player not behind cars - don't draw

    if (trafficX > trafficXMax) trafficX = trafficXMin; // scroll and loop

    scaledContext.drawImage(trafficEffectImage,trafficX,trafficY);
}
