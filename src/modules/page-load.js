function createNavbar() {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'navbar');

  const span = document.createElement('span');
  span.setAttribute('class', 'open-slide');
  span.innerHTML = `
  <a href="#" id="openSlideMenu">
      <svg width="30" height="30">
          <path d="M0,7.5 30,7.5" stroke="#fff" stroke-width="5"/>
          <path d="M0,15 30,15" stroke="#fff" stroke-width="5"/>
          <path d="M0,22.5 30,22.5" stroke="#fff" stroke-width="5"/>
      </svg>
  </a>
  `;

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'navbar-nav');
  createListElement('home', ul);
  createListElement('menu', ul);
  createListElement('contact', ul);

  nav.appendChild(span);
  nav.appendChild(ul);

  return nav;
}

function createSlideMenu() {
  const div = document.createElement('div');
  div.setAttribute('id', 'side-menu');
  div.setAttribute('class', 'side-nav');
  div.innerHTML = `
  <a href="#" class="btn-close" id="closeSlideMenu">&times;</a>
  <a href="#" id='home' class="tab">Home</a>
  <a href="#" id='menu' class="tab">Menu</a>
  <a href="#" id='contact' class="tab">Contact</a>
  `;

  return div;
}

function createListElement(id, unorderedList) {
  const li = document.createElement('li');
  li.classList.add('tab');
  li.setAttribute('id', id);
  li.innerHTML = `
  <a href="#" id="navLinks">${id}</a>
  `;
  
  unorderedList.appendChild(li);

  return li;
}

function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'tab-content');

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const paragraph = document.createElement('p');
  paragraph.textContent =
  'Made by Manuel';

  footer.appendChild(paragraph);

  return footer;
}

function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('tab-content').style.marginLeft = '250px';
}

function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('tab-content').style.marginLeft = '0';
}

function loadPage() {
  const content = document.getElementById('content');

  const nav = createNavbar();
  content.appendChild(nav);

  const slideMenu = createSlideMenu()
  content.appendChild(slideMenu);

  const tabContent = createMain();
  content.appendChild(tabContent);

  const footer = createFooter();
  content.appendChild(footer);

  const openSlideBar = document.getElementById('openSlideMenu');
  openSlideBar.addEventListener('click', openSlideMenu);

  const closeSlideBar = document.getElementById('closeSlideMenu');
  closeSlideBar.addEventListener('click', closeSlideMenu);
}

export default loadPage;