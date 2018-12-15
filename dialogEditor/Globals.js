//Globals
let canvas;
let canvasContext;
let dialogEditor;
const CLEAR_COLOR = '#350034';
const FRAMES_PER_SECOND = 30;
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
	DialogImage:"dialog image"
};
const LineWidth = {
	Normal:4,
	Hover:6,
	Active: 10	
};
const Speaker = {
	John:'John',
	Rose:'Rose'
};
const NeutralColor = {
	Fill:'darkGray',
	Line:'white'
};
const JohnColor = {
	Fill:'lightBlue',
	Line:'darkBlue'
};
const RoseColor = {
	Fill:'pink',
	Line:'red'
};