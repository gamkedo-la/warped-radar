var buttonX = [192,110,149,160];
var buttonY = [100,140,180,220];
var buttonWidth = [96,260,182,160];
var buttonHeight = [40,40,40,40];

var backgroundY = 0;
var speed = 1;

var mouseX;
var mouseY;

var arrowX = [0,0];
var arrowY = [0,0];
var arrowWidth = 35;
var arrowHeight = 40;
 
var arrowVisible = false;
var arrowSize = arrowWidth;
var arrowRotate = 0;

bgImage.onload = function(){
    context.drawImage(bgPic, 0, 0);
};
logoImage.onload = function(){
    context.drawImage(logoPic, 50, -10);
}
playImage.onload = function(){
    context.drawImage(playPic, buttonX[0], buttonY[0]);
}
instructImage.onload = function(){
    context.drawImage(helpPic, buttonX[1], buttonY[1]);
}
settingsImage.onload = function(){
    context.drawImage(settingsPic, buttonX[2], buttonY[2]);
}
creditsImage.onload = function(){
    context.drawImage(creditsPic, buttonX[3], buttonY[3]);
}

var frames = 30;
var timerId = 0;

timerId = setInterval(update, 1000/frames);

function update() {
    clear();
    move();
    draw();
}

funcion clear(){
    context.clearRect(0, 0, width, height);
}

function move(){
    backgroundY -= speed;
    if(backgroundY == -1 * height){
        backgroundY = 0;
    }
}

context.drawImage(bgPic, 0, backgroundY);
context.drawImage(logoPic, 50,-10);
context.drawImage(playPic, buttonX[0], buttonY[0]);
context.drawImage(helpPic, buttonX[1], buttonY[1]);
context.drawImage(settingsPic, buttonX[2], buttonY[2]);
context.drawImage(creditsPic, buttonX[3], buttonY[3]);

function checkPos(mouseEvent){
    mouseX = mouseEvent.pageX - this.offsetLeft;
    mouseY = mouseEvent.pageY - this.offsetTop;
}

if(mouseEvent.pageX || mouseEvent.pageY == 0){
    mouseX = mouseEvent.pageX - this.offsetLeft;
    mouseY = mouseEvent.pageY - this.offsetTop;
}else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
    mouseX = mouseEvent.offsetX;
    mouseY = mouseEvent.offsetY;
}

for(i = 0; i < buttonX.length; i++){
    if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
        if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
             
        }
    }else{
         
    }
}

arrowX[0] = buttonX[i] - (arrowWidth/2) - 2;
arrowY[0] = buttonY[i] + 2;
arrowX[1] = buttonX[i] + buttonWidth[i] + (arrowWidth/2); 
arrowY[1] = buttonY[i] + 2;

if(arrowSize == arrowWidth){
    arrowRotate = -1;
}
if(arrowSize == 0){
    arrowRotate = 1;
}
arrowSize += arrowRotate;

if(arrowVisible == true){
    context.drawImage(arrowPic, arrowX[0] - (arrowSize/2), arrowY[0], arrowSize, arrowHeight);
    context.drawImage(arrowPic, arrowX[1] - (arrowSize/2), arrowY[1], arrowSize, arrowHeight);
}

var fadeId = 0;
canvas.addEventListener("mouseup", checkClick);

function checkClick(mouseEvent){
    for(i = 0; i < buttonX.length; i++){
        if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
            if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
                 
            }
        }
    }
}

fadeId = setInterval("fadeOut()", 1000/frames);
clearInterval(timerId);
canvas.removeEventListener("mousemove", checkPos);
canvas.removeEventListener("mouseup", checkClick);

var time = 0.0;

function fadeOut(){
    context.fillStyle = "rgba(0,0,0, 0.2)";
    context.fillRect (0, 0, width, height);
    time += 0.1;
    if(time >= 2){
        clearInterval(fadeId);
        time = 0;
        timerId = setInterval("update()", 1000/frames);
        canvas.addEventListener("mousemove", checkPos);
        canvas.addEventListener("mouseup", checkClick);
    }
}

