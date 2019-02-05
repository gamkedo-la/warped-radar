// Intros.js - a simplistic text intro / endgame scroller
// for multi-step cutscenes with NPCs that move and dialog, use Cutscene.js

const introText = [
"It's a dark time in a dark city.",
"The future is now but it's not all",
"flying cars and happy endings.",
"",
"The lust for technology has infiltrated",
"every facet of life to the point where",
"sometimes life isn't even recognizable.",
"For most people living in Ohm City, the",
"rush of tech upgrades is the only thing",
"that keeps them going.  But it's a short",
"lived high that only leaves them wanting more.",
"",
"Searching for more.",
"",
"I'm one of the few citizens left without upgrades",
"but it's getting harder and harder to resist the",
"temptation to make a few changes to my less than",
"perfect body.  But I've seen the tech destroy",
"more lives than it helps.  Maybe one day I can",
"figure out how to solve the problem of living",
"with technology and being happy.",
"",
"Who am I?",
"The name's John. For the last couple of years",
"I've been working with my Uncle Dave on an implant",
"that will hopefully restore the tech/life balance.",
"But more on that later.  I'm on my way to his apartment",
"to get the latest news on his experiment.  He left me",
"a message late last night saying that he found something",
"amazing and that I should head over as soon as I get my",
"beta butt out of bed."
];

let Intros = new function() {
    
    let frameCount = 0;
    let framesPerLine = 80;
    let currentLine = 0;
    let active = false;
    
    let currentTxt = [""];
    let txtX = 0;
    let txtY = 0;
    let txtOpacity = 1.0;

    const txtColor = "white";
    const txtFont = "18px Tahoma";
    const txtAlign = "center";
    const lineHeight = 28;

    this.start = function(txt) {
        console.log("Intro start:"+txt);
        currentTxt = txt;
        txtX = Math.round(canvas.width/2);
        txtY = Math.round(canvas.height/3);
        active = true;
        frameCount = 0;
    } 

    this.draw = function() {
        if (!active) return;
        frameCount++;
        
        // current line
        txtOpacity = 1;
        colorText(currentTxt[currentLine],txtX+1,txtY+1-frameCount/4,"black",txtFont,txtAlign,txtOpacity);
        colorText(currentTxt[currentLine],txtX,txtY-frameCount/4,txtColor,txtFont,txtAlign,txtOpacity);

        // prev line fades out and floats away
        if (currentLine>0) {
            txtOpacity = 1 - (frameCount / framesPerLine);
            colorText(currentTxt[currentLine-1],txtX+1,txtY+1-((framesPerLine+frameCount)/4),"black",txtFont,txtAlign,txtOpacity);
            colorText(currentTxt[currentLine-1],txtX,txtY-((framesPerLine+frameCount)/4),txtColor,txtFont,txtAlign,txtOpacity);
        }

        if (frameCount >= framesPerLine) {
            currentLine++;
            frameCount = 0;
        }
        
        // draw everything in one go
        /*
        for (let line=0; line<currentTxt.length; line++) {
            txtOpacity = 1 - (frameCount*2 / framesPerLine) + 0.25*line;
            if (txtOpacity>1)txtOpacity=1;
            if (txtOpacity<0)txtOpacity=0;
            colorText(currentTxt[line],txtX+1,txtY+1+(line*lineHeight)-frameCount/3,"black",txtFont,txtAlign,txtOpacity);
            colorText(currentTxt[line],txtX,txtY+(line*lineHeight)-frameCount/3,txtColor,txtFont,txtAlign,txtOpacity);
        }
        active = (frameCount < framesPerLine);
        */

        active = (currentLine < currentTxt.length);
        
    }

}();