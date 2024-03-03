// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.cap').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
  document.querySelectorAll('.stem').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((oneSauce)=>{
    if (state.whiteSauce) {
      oneSauce.classList.add('sauce-white');
    } else {
      oneSauce.classList.remove('sauce-white');
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((oneCrust)=>{
    if (state.glutenFreeCrust) {
      oneCrust.classList.add('crust-gluten-free');
    } else {
      oneCrust.classList.remove('crust-gluten-free');
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('btn').forEach((oneBtn)=>{
    
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const basePrice = 10;
  const pepperoniPrice = 1;
  const mushroomsPrice = 1;
  const greenPeppersPrice = 1;
  const whiteSaucePrice = 3;
  const glutenFreeCrustPrice = 5;
  let totalPrice = basePrice;
  if (state.pepperoni) {
    totalPrice += pepperoniPrice;
    document.querySelector('.price-pepperoni').style.visibility = 'visible';
  } else {
    totalPrice += 0;
    document.querySelector('.price-pepperoni').style.visibility = 'hidden';
  }
  if (state.mushrooms) {
    totalPrice += mushroomsPrice;
    document.querySelector('.price-mushrooms').style.visibility = 'visible';
  } else {
    totalPrice += 0;
    document.querySelector('.price-mushrooms').style.visibility = 'hidden';
  }
  if (state.greenPeppers) {
    totalPrice += greenPeppersPrice;
    document.querySelector('.price-green-peppers').style.visibility = 'visible';
  } else {
    totalPrice += 0;
    document.querySelector('.price-green-peppers').style.visibility = 'hidden';
  }
  if (state.whiteSauce) {
    totalPrice += whiteSaucePrice;
    document.querySelector('.price-white-sauce').style.visibility = 'visible';
  } else {
    totalPrice += 0;
    document.querySelector('.price-white-sauce').style.visibility = 'hidden';
  }
  if (state.glutenFreeCrust) {
    totalPrice += glutenFreeCrustPrice;
    document.querySelector('.price-gluten-free-crust').style.visibility = 'visible';
  } else {
    totalPrice += 0;
    document.querySelector('.price-gluten-free-crust').style.visibility = 'hidden';
  }
  /*
  state.mushrooms? totalPrice += mushroomsPrice: totalPrice += 0;
  state.greenPeppers? totalPrice += greenPeppersPrice: totalPrice += 0;
  state.whiteSauce? totalPrice+= whiteSaucePrice: totalPrice += 0;
  state.glutenFreeCrust? totalPrice += glutenFreeCrustPrice: totalPrice += 0;
  */
  document.querySelector('.total-price').innerText = `Total: $${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
