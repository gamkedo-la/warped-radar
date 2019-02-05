// Intros.js - a simplistic text intro / endgame scroller
// for multi-step cutscenes with NPCs that move and dialog, use Cutscene.js

const introText = [
    "This is a simple intro",
    "and endgame text scroller",
    "that might work for credits too"
];

let Intros = new function() {
    
    let counter = 0;
    let maxframes = 500;
    let active = false;
    
    let currentTxt = [""];
    let txtX = 0;
    let txtY = 0;
    let txtOpacity = 1.0;

    const txtColor = "white";
    const txtFont = "24px Tahoma";
    const txtAlign = "center";
    const lineHeight = 28;

    this.start = function(txt) {
        console.log("Intro start:"+txt);
        currentTxt = txt;
        txtX = Math.round(canvas.width/2);
        txtY = Math.round(canvas.height/3);
        active = true;
        counter = 0;
    } 

    this.draw = function() {
        if (!active) return;
        counter++;
        for (let line=0; line<currentTxt.length; line++) {
            txtOpacity = 1 - (counter*2 / maxframes) + 0.25*line;
            if (txtOpacity>1)txtOpacity=1;
            if (txtOpacity<0)txtOpacity=0;
            colorText(currentTxt[line],txtX+1,txtY+1+(line*lineHeight)-counter/3,"black",txtFont,txtAlign,txtOpacity);
            colorText(currentTxt[line],txtX,txtY+(line*lineHeight)-counter/3,txtColor,txtFont,txtAlign,txtOpacity);
        }
        active = (counter < maxframes);
    }

}();