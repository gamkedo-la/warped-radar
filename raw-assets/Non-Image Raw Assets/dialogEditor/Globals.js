//Globals
let canvas;
let canvasContext;
let dialogEditor;
const CLEAR_COLOR = '#350034';
const FRAMES_PER_SECOND = 30;
const CONVERSATION = ATestDialog;
const ChildState = {
	Normal:'normal',
	Hover:'hover',
	Active:'active'
};
const ButtonFont = {
	XSmall:'12px Tahoma',
	Small:'16px Tahoma',
	Medium:'20px Tahoma',
	Large:'24px Tahoma',
	XLarge:'28px Tahoma'
};
const LabelFont = {
	XSmall:'12px Tahoma',
	Small:'16px Tahoma',
	Medium:'20px Tahoma',
	Large:'24px Tahoma',
	XLarge:'28px Tahoma'
};
const ButtonStyle = {
	Normal:'normal',
	Rounded:'rounded',
};
const ChildType = {
	DialogButton:"dialog button",
	DialogLine:"dialog line",
	DialogLabel:"dialog label",
	DialogDropDown:"dialog drop down",
	DialogTextBox:"dialog text box",
	DialogImage:"dialog image",
	DialogTransitionOrigin:"dialog transition origin",
	DialogTransitionDestination:"dialog transition destination"
};
const LineWidth = {
	Normal:4,
	Hover:6,
	Active: 10	
};
//List all characters who participate in dialog here
const Speaker = {
	John:'John',
	Rose:'Rose',
	Julie:'Julie',
	Jen:'Jen',
	Cat:'Cat',
	Fusion:'Fusion',
	Alex: 'Alex',
	NPC: 'NPC'
};
//JohnColor is special, don't need to call out other colors separately
const JohnColor = {
	Fill:'lightBlue',
	Line:'darkBlue'
};
//Provide a background (fill) and outline (line) color for each character
function colorsForSpeaker(speaker) {
	let colors = {bkgd:'darkGray', line:'white'};
	switch(speaker) {
		case Speaker.John:
			colors.bkgd = JohnColor.Fill;
			colors.line = JohnColor.Line;
		break;
		case Speaker.Rose:
			colors.bkgd = 'pink';
			colors.line = 'red';
		break;
		case Speaker.Julie:
			colors.bkgd = 'white';
			colors.line = '#b12f0c';
		break;
		case Speaker.Jen:
			colors.bkgd = '#ee00aa';
			colors.line = '#223344';
		break;
		case Speaker.Cat:
			colors.bkgd = 'yellow';
			colors.line = 'darkBlue';
		break;
		case Speaker.Fusion:
			colors.bkgd = '#440055';
			colors.line = '#b09145';
		break;
		case Speaker.Alex:
			colors.bkgd = '#c26682';
			colors.line = '#5f0a00';
		break;
		case Speaker.NPC:
			colors.bkgd = '#aa9977';
			colors.line = '#440055';
		break;
	}
	
	return colors;
};