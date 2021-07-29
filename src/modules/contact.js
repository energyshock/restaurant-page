import setButtonActive from './check-button';

function createSection() {
  const section = document.createElement('section');
  section.classList.add('section');

  const title = document.createElement('h2');
  title.classList.add('section-title');
  title.textContent = 'Contact us!';
  
  const description = document.createElement('p');
  description.innerHTML = `
  E-Mail: <a href="mailto:office@restaurant.com">office@restaurant.com</a>
  <br>
  Phone: <a href="tel:+43-008-6448869">+43-008-6448869</a>
  <br>
  Address: Schulerstraße 18, 1010 Wien
  `;

  section.appendChild(title);
  section.appendChild(description);

  return section;
}

function loadContact() {
  const content = document.getElementById('tab-content');
  content.textContent = '';

  const contactSection = createSection();

  setButtonActive('contact');
  
  content.appendChild(contactSection);
}

export default loadContact;