let audioFormat;

let voiceHigh1 = new SoundOverlapsClass("./audio/snd_voice1");
let voiceHigh2 = new SoundOverlapsClass("./audio/snd_voice2");
let voiceLow1 = new SoundOverlapsClass("./audio/snd_voice3");
let voiceLow2 = new SoundOverlapsClass("./audio/snd_voice4");
let selected = new SoundOverlapsClass("./audio/selected");

//how to add music: let bgMusic = "./audio/bgMusic";

let musicVolume = localStorage.getItem("musicVolume");
let effectsVolume = localStorage.getItem("effectsVolume");

if(musicVolume === null){
	musicVolume = 1;
}
if(effectsVolume === null){
	effectsVolume = 1;
}

let isMuted = false;
const VOLUME_INCREMENT = 0.05;

function setFormat() {
    let audio = new Audio();
    if (audio.canPlayType("audio/mp3")) {
        audioFormat = ".mp3";
    } else {
        audioFormat = ".ogg";
    }
}

let stebs_warped_radar_song = new backgroundMusicClass();
stebs_warped_radar_song.loopSong("audio/stebs_warped_radar_song");
let currentBackgroundMusic = stebs_warped_radar_song;
setMusicVolume(0.4);


function backgroundMusicClass() {

    let musicSound = null;

    this.loopSong = function(filenameWithPath) {
        setFormat(); // calling this to ensure that audioFormat is set before needed

        if (musicSound != null) {
            musicSound.pause();
            musicSound = null;
        }
        musicSound = new Audio(filenameWithPath + audioFormat);
        musicSound.loop = true;
        this.setVolume(musicVolume);
    }

    this.pauseSound = function() {
        musicSound.pause();
    }

    this.resumeSound = function() {
        musicSound.play();
    }

    this.startOrStopMusic = function() {
        if (musicSound.paused) {
            musicSound.play();
        } else {
            musicSound.pause();
        }
    }

	this.setVolume = function(volume) {
		// Multipliction by a boolean serves as 1 for true and 0 for false
		musicSound.volume = Math.pow(volume * !isMuted, 2);

		if(musicSound.volume == 0) {
			musicSound.pause();
		} else if (musicSound.paused) {
			musicSound.play();
		}
	}
}

function SoundOverlapsClass(filenameWithPath) {
    setFormat();

    let fullFilename = filenameWithPath;
		let soundIndex = 0;
    let sounds = [new Audio(fullFilename + audioFormat), new Audio(fullFilename + audioFormat)];

    this.play = function() {
				if(!sounds[soundIndex].paused) {
					sounds.splice(soundIndex, 0, new Audio(fullFilename + audioFormat));
				}
        sounds[soundIndex].currentTime = 0;
        sounds[soundIndex].volume = Math.pow(getRandomVolume() * effectsVolume * !isMuted, 2);
        sounds[soundIndex].play();

        soundIndex = (++soundIndex) % sounds.length;
    }
}

function getRandomVolume(){
	let min = 0.9;
	let max = 1;
	let randomVolume = Math.random() * (max - min) + min;
	return randomVolume.toFixed(2);
}

function toggleMute() {
	isMuted = !isMuted;
	currentBackgroundMusic.setVolume(musicVolume);
}

function setEffectsVolume(amount)
{
	effectsVolume = amount;
	if(effectsVolume > 1.0) {
		effectsVolume = 1.0;
	} else if (effectsVolume < 0.0) {
		effectsVolume = 0.0;
	}
}

function setMusicVolume(amount){
	musicVolume = amount;
	if(musicVolume > 1.0) {
		musicVolume = 1.0;
	} else if (musicVolume < 0.0) {
		musicVolume = 0.0;
	}
	currentBackgroundMusic.setVolume(musicVolume);
}

function turnVolumeUp() {
	setMusicVolume(musicVolume + VOLUME_INCREMENT);
	setEffectsVolume(effectsVolume + VOLUME_INCREMENT);
}

function turnVolumeDown() {
	setMusicVolume(musicVolume - VOLUME_INCREMENT);
	setEffectsVolume(effectsVolume - VOLUME_INCREMENT);
}
