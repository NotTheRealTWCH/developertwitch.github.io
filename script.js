// SET LANDING PAGE MAX HEIGHT
const editorPane = document.getElementById('backgroundCodeEditor__pane');
const editorLine = document.getElementsByClassName('backgroundCodeEditor__pane__line');
const landingPage = document.getElementById('landingPage');
const header = document.getElementById('header-C');

let browserWidth = window.innerWidth;
let paneHeight;
let panePadding;
let extraSpace;

function setMaxHeight() {
	paneHeight = editorLine[0].clientHeight * 40;
	panePadding = window.innerWidth * 1.25 / 100 * 40 / 100;
	extraSpace = editorPane.offsetHeight - paneHeight - panePadding;
	
	if (extraSpace >= 94.6) {
		let maxHeight = landingPage.offsetHeight - extraSpace + 94.6 + "px";
		landingPage.style.maxHeight = maxHeight;
	}
}

setMaxHeight();

window.addEventListener('resize', function() {
	if (window.innerWidth !== browserWidth) {
		setMaxHeight();
	}
});

const homeButton = document.getElementById('logo--big');
const topOfSite = document.getElementsByTagName('body')[0];

homeButton.addEventListener('click', function() {
	event.preventDefault();

	smoothScroll( topOfSite, {
		offset: 2
	});
});
