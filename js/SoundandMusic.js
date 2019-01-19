//****checking to see if the browser is Firefox. Due to CORS policy and browser specifications, Firefox is apparently the only
//browser that allows offline same origin calls in the same project folder. If the browser is Firefox, we can implement the
//web audio api and it's more advanced audio features during development. If not, we skip over it.

var use_web_audio_api = false;

//actual check
(function(){
    if (window.navigator.userAgent.match("Firefox")) {
      use_web_audio_api = true;
    };
})();

//create web audio api instance
if (use_web_audio_api) {
	//two web audio api contexts to work around hard left and hard right panning bug
  var web_audio_api_context1 = new (window.AudioContext || window.webkitAudioContext)();
  var web_audio_api_context2 = new (window.AudioContext || window.webkitAudioContext)();

  //the web audio api uses nodes to create a chain to connect the source audio to effects and then from the effects to the output,
  //these are panner nodes which should come after the source and before the output (speakers)
  var hard_left_dialogue_panner_node = web_audio_api_context1.createStereoPanner();
  hard_left_dialogue_panner_node.connect(web_audio_api_context1.destination);
  hard_left_dialogue_panner_node.pan.value = -1;//panning left for john's dialogue

  var hard_right_dialogue_panner_node = web_audio_api_context2.createStereoPanner();
  hard_right_dialogue_panner_node.connect(web_audio_api_context2.destination);
  hard_right_dialogue_panner_node.pan.value = 1;//panning right for npc's

  console.log("we're in Firefox and utilizing web audio api where desired");
  console.log("use_web_audio_api", use_web_audio_api);
  console.log("panner nodes created", hard_left_dialogue_panner_node, hard_right_dialogue_panner_node);
}

let audioFormat;


let dialogueChoiceSound = new Audio("./audio/snd_voice1.mp3");
let inventoryChoiceSound = new Audio("./audio/snd_voice3.mp3");
let selected = new Audio("./audio/selected.mp3");
selected.volume = 0.2;

//second parameter is soundType for web audio API hookups, ["general", 'johns voice', 'npc voice']
let voiceHigh2 = new SoundOverlapsClass("./audio/snd_voice2", 2);
// inventoryChoiceSound.volume = "0.35";
let voiceLow1 = new SoundOverlapsClass("./audio/snd_voice3", 1);
let voiceLow2 = new SoundOverlapsClass("./audio/snd_voice4", 0);


//how to add music: let bgMusic = "./audio/bgMusic";

let musicVolume;
let effectsVolume;
try {
	musicVolume = localStorage.getItem("musicVolume");
	effectsVolume = localStorage.getItem("effectsVolume");
	console.log(musicVolume + ", ", + effectsVolume);
}
catch {
	// default volumes
	musicVolume = 1;
	effectsVolume = 1;
}

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

/*
let stebs_warped_radar_song = new backgroundMusicClass();
stebs_warped_radar_song.loopSong("audio/stebs_warped_radar_song");
let currentBackgroundMusic = stebs_warped_radar_song;
setMusicVolume(0.4);
*/


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
		console.log("Now playing track: ", filenameWithPath + audioFormat);
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

function SoundOverlapsClass(filenameWithPath, soundTypeIndex) {
    setFormat();

    let arrayOfSoundTypes = ["general", 'johns voice', 'npc voice'];
    this.soundType = arrayOfSoundTypes[soundTypeIndex];
    console.log(this.soundType);
    let fullFilename = filenameWithPath;
		let soundIndex = 0;
    let sounds = [new Audio(fullFilename + audioFormat), new Audio(fullFilename + audioFormat)];

		//if using the web audio api in Firefox, create audio buffers for the overlap sounds and connect the audio tags to the web
		//audio api buffers to utilize the extra features of the web audio api
		if (use_web_audio_api && this.soundType === 'johns voice') {
				web_audio_api_source_nodes = [web_audio_api_context1.createMediaElementSource(sounds[0]),
																		  web_audio_api_context1.createMediaElementSource(sounds[1])];
				web_audio_api_source_nodes[0].connect(hard_left_dialogue_panner_node);
				web_audio_api_source_nodes[1].connect(hard_left_dialogue_panner_node);
		} else if (use_web_audio_api && this.soundType === 'npc voice') {
				web_audio_api_source_nodes = [web_audio_api_context2.createMediaElementSource(sounds[0]),
																		  web_audio_api_context2.createMediaElementSource(sounds[1])];
				web_audio_api_source_nodes[0].connect(hard_right_dialogue_panner_node);
				web_audio_api_source_nodes[1].connect(hard_right_dialogue_panner_node);
		}

		console.log("sounds in class initialization", sounds);

    this.play = function() {

				if(!sounds[soundIndex].paused) {
					var new_audio_tag = new Audio(fullFilename + audioFormat);

					if (use_web_audio_api && this.soundType === 'johns voice') {

						var new_web_audio_api_source_node = web_audio_api_context1.createMediaElementSource(new_audio_tag);
						new_web_audio_api_source_node.connect(hard_left_dialogue_panner_node);
						// new_audio_before_check.play();//****NOTE THIS LOGIC, playing original audio tag, NOT the new source node
					} else if (use_web_audio_api && this.soundType === 'npc voice') {
            var new_web_audio_api_source_node = web_audio_api_context2.createMediaElementSource(new_audio_tag);
						new_web_audio_api_source_node.connect(hard_right_dialogue_panner_node);
          }
					sounds.splice(soundIndex, 0, new_audio_tag);
				}
				// console.log("sounds within play method", sounds);
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
