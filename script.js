const searchInput = document.getElementById('searchInput');
// const searchBtn = document.querySelector('button.search');
const button = document.querySelector('.search-container > button');
const form = document.querySelector('form.search-container');

// get the --transition-timing css variable, delete "ms" from it, and convert it to a number
const transitionTiming = +getComputedStyle(document.documentElement)
	.getPropertyValue('--transition-timing')
	.replace('ms', '');

button.addEventListener('click', showInput);

/* trigger button click when 'enter' or spacebar is pressed, when button has focus */
form.addEventListener('keyup', e => {
	if (
		(e.keyCode === 13 || e.keyCode === 32) &&
		button.getAttribute('type') === 'button'
	) {
		console.log('clicked');
		button.click();
	}
});

form.addEventListener('submit', e => {
	if (searchInput.value.length > 0) {
		button.setAttribute('type', 'button');

		// add search below
		alert('Searching for ' + searchInput.value);
	} else {
		e.preventDefault();
	}
});

function showInput() {
	if (searchInput.classList.contains('hide')) {
		searchInput.classList.remove('hide');
		searchInput.focus();
		searchInput.value = '';
		setTimeout(() => {
			button.setAttribute('type', 'submit');
		}, transitionTiming + 5);
	}
}
