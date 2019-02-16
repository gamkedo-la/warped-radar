let johnMouthMove;
let johnAngryMouthMove;
let roseMouthMove;
let alexMouthMove;
let johnIdle;
let johnWalkUp; //North
let johnWalkDown; //South
let johnWalkSide; //West and East (flip)
let johnWalkUpDiag; //NorthWest and NorthEast(flip)
let johnWalkDownDiag; //SouthWest and SouthEast(flip)

//let johnWalkSide45Deg;
let frameDelayWalk = framesPerSecond / 6; //higher number equals slower walk cycle speed

let roseIdle, roseWalkUp, /*North*/ roseWalkDown, /*South*/ roseWalkSide; /*West and East (flip);*/
let julieIdle;

function makeAnimatedSprites() {
	//Mouth Movement Animations
	//John
    johnMouthMove = new AnimatedSpriteClass({
		name: "johnAnimatedMouth",
		spriteSheet: johnMouthAnimatedSheet,
		animationColFrames: 18,
		framesUntilNext: 4,
	});

    johnAngryMouthMove = new AnimatedSpriteClass({
		name: "johnAnimatedMouth2",
		spriteSheet: johnMouthAnimationAngrySheet,
		animationColFrames: 18,
		framesUntilNext: 4,
	});

	//Rose
    roseMouthMove = new AnimatedSpriteClass({
		name: "roseAnimatedMouth",
		spriteSheet: roseMouthAnimatedSheet,
		animationColFrames: 18,
		framesUntilNext: 4,
	});

	//Fusion
	fusionMouthMove = new AnimatedSpriteClass({
		name: "fusionAnimatedMouth",
		spriteSheet: fusionMouthAnimatedSheet,
		animationColFrames: 18,
		framesUntilNext: 4,
	});

	//Alex
	alexMouthMove = new AnimatedSpriteClass({
		name: "alexAnimatedMouth",
		spriteSheet: alexMouthAnimatedSheet,
		animationColFrames: 18,
		framesUntilNext: 4,
	});

	//Overworld Animations
	//John
    johnWalkUp = new AnimatedSpriteClass({
		name: "johnWalkAnimationUp",
		spriteSheet: johnAnimationUp,
		animationColFrames: 4,
		framesUntilNext: frameDelayWalk,
	});

	johnWalkDown = new AnimatedSpriteClass({
		name: "johnWalkAnimationDown",
		spriteSheet: johnAnimationDown,
		animationColFrames: 4,
		framesUntilNext: frameDelayWalk,
	});

    johnIdle = new AnimatedSpriteClass({
		name: "johnIdleAnimaton",
		spriteSheet: johnAnimationIdle,
		animationColFrames: 26,
		framesUntilNext: frameDelayWalk,
	});

    johnWalkSide = new AnimatedSpriteClass({
		name: "johnWalkSideAnimaton",
		spriteSheet: johnAnimationSide,
		animationColFrames: 4,//24,
		framesUntilNext: frameDelayWalk,//4,
	});

    johnWalkDownDiag = new AnimatedSpriteClass({
		name: "johnWalkDownDiagAnimaton",
		spriteSheet: johnAnimationDownDiag,
		animationColFrames: 4,
		framesUntilNext: frameDelayWalk,
	});
	
	johnWalkUpDiag = new AnimatedSpriteClass({
		name: "johnWalkUpDiagAnimaton",
		spriteSheet: johnAnimationUpDiag,
		animationColFrames: 4,
		framesUntilNext: frameDelayWalk,
	});

	//Rose
	roseIdle = new AnimatedSpriteClass({
		name: "roseAnimationIdle",
		spriteSheet: roseAnimationIdle,
		animationColFrames: 40,
		framesUntilNext: frameDelayWalk,
	});

	roseWorry = new AnimatedSpriteClass({
		name: "roseAnimationWorry",
		spriteSheet: roseAnimationWorry,
		animationColFrames: 43,
		framesUntilNext: frameDelayWalk,
	});

	roseWalkUp = new AnimatedSpriteClass({
		name: "roseUpAnimation",
		spriteSheet: roseAnimationUp,
		animationColFrames: 4,
		framesUntilNext: frameDelayWalk,
	});

	roseWalkDown = new AnimatedSpriteClass({
		name: "roseDownAnimation",
		spriteSheet: roseAnimationDown,
		animationColFrames: 4,
		framesUntilNext: frameDelayWalk,
	});

	roseWalkSide = new AnimatedSpriteClass({
		name: "roseSideAnimation",
		spriteSheet: roseAnimationSide,
		animationColFrames: 4,
		framesUntilNext: frameDelayWalk,
	});

	//Julie
	julieIdle = new AnimatedSpriteClass({
		name: "julieAnimationIdle",
		spriteSheet: julieAnimationIdle,
		animationColFrames: 26,
		framesUntilNext: frameDelayWalk,
	});

	//Cat Man
	catManIdle = new AnimatedSpriteClass({
		name: "catManAnimationIdle",
		spriteSheet: catManAnimationIdle,
		animationColFrames: 1,
		framesUntilNext: frameDelayWalk,
	});

	//Dave
	daveIdle = new AnimatedSpriteClass({
		name: "daveAnimationIdle",
		spriteSheet: daveIdle,
		animationColFrames: 1,
		framesUntilNext: frameDelayWalk,
	});

	//Agent
	agentIdle = new AnimatedSpriteClass({
		name: "agentAnimationIdle",
		spriteSheet: agentAnimationIdle,
		animationColFrames: 24,
		framesUntilNext: frameDelayWalk,
	});

	//Fusion
	fusionIdle = new AnimatedSpriteClass({
		name: "fusionAnimationIdle",
		spriteSheet: fusionAnimationIdle,
		animationColFrames: 42,
		framesUntilNext: frameDelayWalk,
	});

	//Alex
	alexIdle = new AnimatedSpriteClass({
		name: "alexAnimationIdle",
		spriteSheet: alexAnimationIdle,
		animationColFrames: 34,
		framesUntilNext: frameDelayWalk,
	});

	//Cop
	copIdle = new AnimatedSpriteClass({
		name: "copAnimationIdle",
		spriteSheet: copAnimationIdle,
		animationColFrames: 24,
		framesUntilNext: frameDelayWalk,
	});
};

function AnimatedSpriteClass(data) {
	this.data = data;
	this.name = data.name;
	this.spriteSheet = data.spriteSheet;
	this.animationColFrames = data.animationColFrames;
	this.framesUntilNext = data.framesUntilNext;
	this.loops = (data.loops == undefined) ? true : data.loops;
	this.paused = false;
	this.currentFrameIndex = (data.currentFrameIndex == undefined) ? 0 : data.currentFrameIndex;
	this.framesMoveSideways = (data.framesMoveSideways == undefined) ? true : data.framesMoveSideways;
	this.framesBetweenLoops = (data.framesBetweenLoops == undefined) ? 0 : data.framesBetweenLoops;
	this.animationRowFrames = (data.animationRowFrames == undefined) ? 1 : data.animationRowFrames;
	this.numberOfColFrameIndexes = data.animationColFrames - 1;
	this.numberOfRowFrameIndexes = data.animationRowFrames - 1;
	this.currentPauseFramesLeft = 0;
	this.reversing = false;
	this.x = data.x;
	this.y = data.y;
	this.arrayIndex = data.arrayIndex;
	this.tileType = data.tileType;
	this.makesNoise = (data.makesNoise == undefined) ? false : data.makesNoise;
	this.noise = (data.makesNoise == false) ? null : data.noise;

	this.setFrame = function(frame) {
		this.currentFrameIndex = frame;
	}

	this.getFrame = function(frame) {
		return this.currentFrameIndex;
	}

	this.draw = function (whichContext, x,y, currentAxisIndexOfAnimation = 1,
							flipped = false, rotated = false, degrees,
							offsetInRelationToRotationX,offsetInRelationToRotationY,
	 						opacity = whichContext.globalAlpha, streched = false, strechX = 1, strechY = 1,
	 						loopsToEndAndBack = false) {
		let additionalWidth;
		let additionalHeight;
		whichContext.save();
        whichContext.globalAlpha = opacity;
        if (rotated) {
			whichContext.translate(x, y);
			whichContext.rotate(degrees*DEGREES_TO_RADIANS);
		}
		if (flipped) {
			if (rotated) {
				whichContext.scale(-1,1);
			} else {
			whichContext.translate(x + (this.spriteSheet.width / this.animationColFrames), y);
			whichContext.scale(-1,1);
			}
		}
		if (this.loops && !this.paused) {
			if(this.currentPauseFramesLeft <= 0) {
                if (framesFromGameStart % this.framesUntilNext == 0) {
                	if (loopsToEndAndBack) {
                    	if (!this.reversing) {
	                    		this.currentFrameIndex++;
	                    		if (this.framesMoveSideways) {
	                    			if (this.currentFrameIndex == this.numberOfColFrameIndexes) {
	                    				this.reversing = true;
	                    			}
	                    		} else {
	                    			if (this.currentFrameIndex == this.numberOfRowFrameIndexes) {
	                    				this.reversing = true;
	                    			}
	                    		}
                    	} else if (this.reversing) {
                    		this.currentFrameIndex--;
                    		if (this.currentFrameIndex == 0) {
                    			this.reversing = false;
                    		}
                    	}
                    } else {
	                    this.currentFrameIndex++;
	                    if (this.framesMoveSideways) {
		                    if (this.currentFrameIndex > this.numberOfColFrameIndexes) {
		                        this.currentFrameIndex = 0;
		                        this.currentPauseFramesLeft = this.framesBetweenLoops;
		                    }
		                } else {
		                	if (this.currentFrameIndex > this.numberOfRowFrameIndexes) {
		                        this.currentFrameIndex = 0;
		                        this.currentPauseFramesLeft = this.framesBetweenLoops;
		                    } // end of reset currentFrameIndex if > numberOfRowFrameIndexes
		                } // end of else check when sprite sheet isn't orientated sideways
                    } // end of else if loopsToEndAndBack is false
                } // end of framesFromGameStart % this.framesUntilNext == 0;
            } else {
				this.currentPauseFramesLeft--;
			}
		}
		if (streched) {
			additionalWidth = this.spriteSheet.width;
			additionalHeight = this.spriteSheet.height;
		} else {
			additionalWidth = 0;
			additionalHeight = 0;
		}
		if (this.framesMoveSideways) { //The frames in the source image are arranged left to right, all using the same height
			if (rotated) {
				whichContext.drawImage(this.spriteSheet,
									this.currentFrameIndex * this.spriteSheet.width/this.animationColFrames,
									(currentAxisIndexOfAnimation - 1) * this.spriteSheet.height/this.animationRowFrames,
									this.spriteSheet.width/this.animationColFrames,
									this.spriteSheet.height/this.animationRowFrames,
									offsetInRelationToRotationX, offsetInRelationToRotationY,
									(this.spriteSheet.width/this.animationColFrames),
									this.spriteSheet.height/this.animationRowFrames);
			} else if (flipped) {
				whichContext.drawImage(this.spriteSheet,
									this.currentFrameIndex * this.spriteSheet.width/this.animationColFrames,
									(currentAxisIndexOfAnimation - 1) * this.spriteSheet.height/this.animationRowFrames,
									this.spriteSheet.width/this.animationColFrames,
									this.spriteSheet.height/this.animationRowFrames,
									(this.spriteSheet.width / this.animationColFrames) / 2,
									-this.spriteSheet.height / 2,
									this.spriteSheet.width/this.animationColFrames + (additionalWidth * strechX),
									this.spriteSheet.height/this.animationRowFrames * strechY);
			} else {
				whichContext.drawImage(this.spriteSheet,
									this.currentFrameIndex * this.spriteSheet.width/this.animationColFrames,
									(currentAxisIndexOfAnimation - 1) * this.spriteSheet.height/this.animationRowFrames,
									this.spriteSheet.width/this.animationColFrames,
									this.spriteSheet.height/this.animationRowFrames,
									x - (this.spriteSheet.width / this.animationColFrames) / 2,
									y - (this.spriteSheet.height / this.animationRowFrames) / 2,
									this.spriteSheet.width/this.animationColFrames + (additionalWidth * strechX),
									(this.spriteSheet.height/this.animationRowFrames) * strechY);
			}
		} else {
			if (rotated) { //The frames in the source image are arranged top to bottom, all using the same width
				whichContext.drawImage(this.spriteSheet,
									(currentAxisIndexOfAnimation - 1) * this.spriteSheet.width/this.animationColFrames,
									this.currentFrameIndex * this.spriteSheet.width/this.animationRowFrames,
									this.spriteSheet.width, this.spriteSheet.height/this.animationRowFrames,
									offsetInRelationToRotationX, offsetInRelationToRotationY,
									this.spriteSheet.width, this.spriteSheet.height/this.animationRowFrames);
			} else if (flipped) {
				whichContext.drawImage(this.spriteSheet,
									(currentAxisIndexOfAnimation - 1) * this.spriteSheet.width/this.animationColFrames,
									this.currentFrameIndex * this.spriteSheet.height/this.animationRowFrames,
									this.spriteSheet.width, this.spriteSheet.height/this.animationRowFrames,
									0, 0,
									this.spriteSheet.width * strechX,
									this.spriteSheet.height/this.animationRowFrames + (additionalHeight * strechY));
			} else {
				whichContext.drawImage(this.spriteSheet,
									(currentAxisIndexOfAnimation - 1) * this.spriteSheet.width/this.animationColFrames,
									this.currentFrameIndex * this.spriteSheet.height/this.animationRowFrames,
									this.spriteSheet.width, this.spriteSheet.height/this.animationRowFrames,
									x - (this.spriteSheet.width / this.animationColFrames) / 2,
									y - (this.spriteSheet.height / this.animationRowFrames) / 2,
									this.spriteSheet.width * strechX,
									this.spriteSheet.height/this.animationRowFrames + (additionalHeight * strechY));
			}
		}
	whichContext.restore();
	} // end of draw function
}; //end of Animated Sprite Class
