import { handleCheckout } from './handleCheckout.mjs';

export const addToCart = function (jacket) {
  const cart = localStorage.getItem('cart');

  if (cart === null) {
    const newCart = [];
    newCart.push(jacket);
    localStorage.setItem('cart', JSON.stringify(newCart));
    handleCheckout(newCart);
  } else {
    const newCart = JSON.parse(cart);
    newCart.push(jacket);
    localStorage.setItem('cart', JSON.stringify(newCart));
    handleCheckout(newCart);
    console.log('WE DO HAVE A CART');
  }
  handleAmount(cart);
  console.log(cart);
};

export const getCartTotal = function () {
  let totalCost = 0;
  const cart = JSON.parse(localStorage.getItem('cart'));
  if (cart !== null) {
    const newCart = JSON.parse(cart);
    for (let i = 0; i < newCart.length; i++) {
      totalCost = totalCost + newCart[i].price;
    }
  }
  return totalCost;
};

/* function removeFromCart(product) {
  const productId = product.id;
  const filteredProducts = cart.filter((currentProduct) => {
    if (currentProduct.id !== productId) {
      return true;
    }
  });

  cart = filteredProducts;
}

const clearCart = function () {
  cart = [];
};
 */

const navigationRight = document.querySelector('.navigation-icons');
const addToCartBtn = document.querySelector('.add-to-cart-btn');

const handleAmount = function (cart) {
  const amount = document.createElement('div');
  amount.classList.add('amount');
  const amountContent = cart.length;
  amount.innerText = amountContent;
  navigationRight.append(amount);

  localStorage.setItem('cartItemAdded', 'true');
};

/* document.addEventListener('DOMContentLoaded', () => {
  const itemAdded = localStorage.getItem('cartItemAdded');
  if (itemAdded === 'true') {
    handleAmount();
  }
});
*/
addToCartBtn.addEventListener('click', handleAmount);
