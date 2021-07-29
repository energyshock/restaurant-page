import setButtonActive from './check-button';

function createSection(title) {
	const home = document.createElement('div');
	home.classList.add('home');

	const titleForPage = document.createElement('h2');
	titleForPage.textContent = title;
	
	const paragraph = document.createElement('p');
	paragraph.textContent =
	'Enjoy the pizzas and have a nice stay.';
	
	const img = document.createElement('img');
	img.setAttribute('src', 'images/pizza home.jpg');
	img.setAttribute('alt', 'making pizza dough');
	
	home.appendChild(titleForPage);
	home.appendChild(paragraph);
	home.appendChild(img);
	
	return home;
}

function loadHome() {
	const content = document.getElementById('tab-content');
	content.textContent = '';

	const homeSection = createSection('Welcome to my restaurant page!');

	setButtonActive('home');

	content.appendChild(homeSection);
}

export default loadHome;