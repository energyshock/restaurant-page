import loadPage from './modules/page-load';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

init();

function addNavbarEvents() {
  const homeButtons = document.querySelectorAll('#home');
  if (homeButtons.length > 0) {
    homeButtons.forEach(function(item) {
      item.addEventListener('click', loadHome);
    })
  }

  const menuButtons = document.querySelectorAll('#menu');
  if (menuButtons.length > 0) {
    menuButtons.forEach(function(item) {
      item.addEventListener('click', loadMenu);
    })
  }

  const contactButtons = document.querySelectorAll('#contact');
  if (contactButtons.length > 0) {
    contactButtons.forEach(function(item) {
      item.addEventListener('click', loadContact);
    })
  }
}

function init() {
  loadPage();
  loadHome();
  addNavbarEvents();
}