'use strict';

const navigationRight = document.querySelector('.navigation-icons');
const addToCartBtn = document.querySelector('.add-to-cart-btn');

const addToCart = function () {
  const amount = document.createElement('div');
  amount.classList.add('amount');
  const amountContent = `1`;
  amount.innerText = amountContent;
  navigationRight.append(amount);

  localStorage.setItem('cartItemAdded', 'true');
};

document.addEventListener('DOMContentLoaded', function () {
  const itemAdded = localStorage.getItem('cartItemAdded');
  if (itemAdded === 'true') {
    addToCart();
  }
});

addToCartBtn.addEventListener('click', addToCart);
