import setButtonActive from './check-button';

function createFood(src, title, description, price, alt) {
  const food = document.createElement('div');
  food.classList.add('food-item');

  const foodName = document.createElement('h3');
  foodName.textContent = title;
  
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);

  const div = document.createElement('div');
  div.classList.add('desc');
  
  const foodDescription = document.createElement('h4');
  foodDescription.textContent = description;

  const foodPrice = document.createElement('h2');
  foodPrice.textContent = price;

  food.appendChild(foodName);
  food.appendChild(img);
  div.appendChild(foodDescription)
  div.appendChild(foodPrice);
  food.appendChild(div);

  return food;
}

function loadMenu() {
  const content = document.getElementById('tab-content');
  content.textContent = '';

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const foods = [
    createFood(
      'images/pizza 1.jpg',
      'Pizza Diavola',
      'Cheese, Tomato Sauce, Hot Salami',
      '7,90 €',
      'Pizza Diavola'
    ),
    createFood(
      'images/pizza 2.jpg',
      'Pizza Pepperoni',
      'Cheese, Tomato Sauce, Salami, Pepperoni',
      '10,90 €',
      'Pizza Pepperoni'
    ),
    createFood(
      'images/pizza 3.jpg',
      'Pizza Hawaii',
      'Cheese, Tomato Sauce, Pineapple, Ham',
      '10,50 €',
      'Pizza Hawaii'
    ),
    createFood(
      'images/pizza 4.jpg',
      'Pizza Veggie',
      'Cheese, Tomato Sauce, Paprika, Onions',
      '9,90 €',
      'Pizza Veggie'
    )
  ];

  foods.forEach((food) => {
    menu.appendChild(food);
  });

  setButtonActive('menu');

  content.appendChild(menu);
}

export default loadMenu;