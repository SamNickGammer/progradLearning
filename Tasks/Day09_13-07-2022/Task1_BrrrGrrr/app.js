const btnPatty = document.querySelector('.btn-patty');
const btnTomatoes = document.querySelector('.btn-tomatoes');
const btnCheese = document.querySelector('.btn-cheese');
const btnOnions = document.querySelector('.btn-onions');
const btnLettuce = document.querySelector('.btn-lettuce');
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector('#patty');
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = 'inherit';
  } else {
    patty.style.display = 'none';
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector('#cheese');
  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = 'inherit';
  } else {
    cheese.style.display = 'none';
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector('#tomato');
  //you can also use getElementById
  if (state.Tomatoes) {
    tomato.style.display = 'inherit';
  } else {
    tomato.style.display = 'none';
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector('#onion');
  //you can also use getElementById
  if (state.Onions) {
    onion.style.display = 'inherit';
  } else {
    onion.style.display = 'none';
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector('#lettuce');
  //you can also use getElementById
  if (state.Lettuce) {
    lettuce.style.display = 'inherit';
  } else {
    lettuce.style.display = 'none';
  }
}

btnPatty.onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
btnCheese.onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
btnTomatoes.onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
btnOnions.onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
btnLettuce.onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  state.Patty
    ? btnPatty.classList.add('active')
    : btnPatty.classList.remove('active');
  state.Tomatoes
    ? btnTomatoes.classList.add('active')
    : btnTomatoes.classList.remove('active');
  state.Cheese
    ? btnCheese.classList.add('active')
    : btnCheese.classList.remove('active');
  state.Onions
    ? btnOnions.classList.add('active')
    : btnOnions.classList.remove('active');
  state.Lettuce
    ? btnLettuce.classList.add('active')
    : btnLettuce.classList.remove('active');
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  const items = document.querySelectorAll('.items');
  !state.Patty
    ? (items[0].style.display = 'none')
    : (items[0].style.display = 'inherit');
  !state.Cheese
    ? (items[1].style.display = 'none')
    : (items[1].style.display = 'inherit');
  !state.Tomatoes
    ? (items[2].style.display = 'none')
    : (items[2].style.display = 'inherit');
  !state.Onions
    ? (items[3].style.display = 'none')
    : (items[3].style.display = 'inherit');
  !state.Lettuce
    ? (items[4].style.display = 'none')
    : (items[4].style.display = 'inherit');
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
  var price = wholeWheatBun;
  if (state.Patty) price += ingredients.Patty;
  if (state.Cheese) price += ingredients.Cheese;
  if (state.Tomatoes) price += ingredients.Tomatoes;
  if (state.Onions) price += ingredients.Onions;
  if (state.Lettuce) price += ingredients.Lettuce;
  document.querySelector('.price-details').innerHTML = 'INR ' + price;
}
