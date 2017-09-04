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

const bigLogo = document.getElementById('logo--big');
const smallLogo = document.getElementById('logo--small');
const topOfSite = document.getElementsByTagName('body')[0];

bigLogo.addEventListener('click', function() {
	event.preventDefault();

	smoothScroll( topOfSite, {
		offset: 2
	});
});

smallLogo.addEventListener('click', function () {
	event.preventDefault();

	smoothScroll();
});

// CONTACT FORM INPUT ON FOCUS EFFECTS
const textInputs = document.getElementsByClassName('contactForm__textInput');
const textInputContainer = document.getElementsByClassName('contactForm__input');
const subjectInput = document.getElementById('contactForm__subject');
const messageInput = document.getElementById('contactForm__message');
const messageInputContainer = document.getElementById('contactForm__input__message');
const contactFormLabels = document.getElementsByClassName('contactForm__input__label');

textInputs[0].addEventListener('focus', function () {
	contactFormLabels[0].style.display = 'block';
	textInputContainer[0].style.borderColor = '#419be2';
	textInputs[0].placeholder = '';
});

textInputs[0].addEventListener('blur', function () {
	if (!textInputs[0].value) {
		contactFormLabels[0].style.display = 'none';
	}
	textInputContainer[0].style.borderColor = 'grey';
	textInputs[0].placeholder = 'Name';
});

textInputs[1].addEventListener('focus', function () {
	contactFormLabels[1].style.display = 'block';
	textInputContainer[1].style.borderColor = '#419be2';
	textInputs[1].placeholder = '';
});

textInputs[1].addEventListener('blur', function () {
	if (!textInputs[1].value) {
		contactFormLabels[1].style.display = 'none';
	}
	textInputContainer[1].style.borderColor = 'grey';
	textInputs[1].placeholder = 'Email';
});

subjectInput.addEventListener('click', function() {
	if (subjectInput.value) {
		subjectInput.style.paddingTop = '16px';
		contactFormLabels[2].style.display = 'block';
	}
});

messageInput.addEventListener('focus', function() {
	contactFormLabels[3].style.display = 'block';
	messageInputContainer.style.borderColor = '#419be2';
	messageInput.style.paddingTop = '0';
	messageInput.placeholder = '';
});

messageInput.addEventListener('blur', function () {
	if (!messageInput.value) {
		contactFormLabels[3].style.display = 'none';
		messageInput.style.paddingTop = '7px';
	}
	messageInputContainer.style.borderColor = 'grey';
	messageInput.placeholder = 'Message';
});

// FORMSPREE FORM AJAX POST
const request = new XMLHttpRequest();
request.open('POST', 'https://formspree.io/ian@developetwitch.com', true);
request.setRequestHeader('accept', 'application/json');

const form = document.forms[0];

form.addEventListener('submit', function(evt) {
	evt.preventDefault();

	const formData = new FormData(form);
	request.send(formData);

	request.onreadystatechange = function () {
		// <4 =  waiting on response from server
		if (request.readyState < 4)
			console.log('loading');
		// 4 = Response from server has been completely loaded.
		else if (request.readyState === 4) {
			// 200 - 299 = successful
			if (request.status == 200 && request.status < 300)
				console.log('sent');
			else
				console.log('fail');
		}
	}
});
