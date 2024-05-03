import { handleUI } from '../common/handleUI.mjs';

export const addToCart = function (jacket) {
  const cart = localStorage.getItem('cart');

  if (cart === null) {
    const newCart = [];
    newCart.push(jacket);
    localStorage.setItem('cart', JSON.stringify(newCart));
  } else {
    const newCart = JSON.parse(cart);
    newCart.push(jacket);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }
};

const removeFromCart = function (index) {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

  // Check if the index is valid
  if (index >= 0 && index < cartItems.length) {
    // Remove the item from the cart array
    cartItems.splice(index, 1);

    // Update the local storage with the modified cart
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Call the function to update the displayed cart
    handleCheckout();
  }
};

const handleCheckout = function () {
  handleUI();
  const orderReviewWrapper = document.querySelector('.order-review-container');
  orderReviewWrapper.innerHTML = '';
  const cartItems = JSON.parse(localStorage.getItem('cart') || []);

  cartItems.map((jacket, index) => {
    console.log(jacket);
    // generate single item wrapper
    const singleItemWrapper = document.createElement('div');
    singleItemWrapper.classList.add('order');

    // generate single item image
    const singleItemImageWrapper = document.createElement('div');
    singleItemImageWrapper.classList.add('order-review__order-image');
    const singleItemImage = document.createElement('img');
    singleItemImage.src = jacket.image.url;
    singleItemImage.alt = jacket.description;
    singleItemImageWrapper.append(singleItemImage);

    // generate single item info wrappers
    const singleItemInfoWrapper = document.createElement('div');
    singleItemInfoWrapper.classList.add('order-review__order-info');

    const singleItemInfoTopWrapper = document.createElement('div');
    singleItemInfoTopWrapper.classList.add('order-review__order-info__top');

    // generate single item info
    const singleItemContent = `
    <h2>${jacket.name}</h2>
    <p><span>Color:</span> ${jacket.color}</p>
    <p><span>Size:</span> ${jacket.size}</p>
    `;
    singleItemInfoTopWrapper.innerHTML = singleItemContent;

    const singleItemInfoBottomWrapper = document.createElement('div');
    singleItemInfoBottomWrapper.classList.add(
      'order-review__order-info__bottom'
    );

    const singleItemAmountWrapper = document.createElement('div');
    singleItemAmountWrapper.classList.add('select-amount');

    const decreaseAmountButton = document.createElement('p');
    decreaseAmountButton.textContent = '-';

    const selectedAmount = document.createElement('p');
    selectedAmount.textContent = '1';

    const increaseAmountButton = document.createElement('p');
    increaseAmountButton.textContent = '+';

    singleItemAmountWrapper.append(
      decreaseAmountButton,
      selectedAmount,
      increaseAmountButton
    );

    const singleItemPriceWrapper = document.createElement('div');

    const singleItemPrice = document.createElement('p');
    singleItemPrice.textContent = jacket.price;

    const singleItemDelete = document.createElement('i');
    singleItemDelete.classList.add('fa-solid', 'fa-trash-can');
    singleItemDelete.style.cursor = 'pointer';
    singleItemDelete.addEventListener('click', () => {
      removeFromCart(index);
      console.log(index);
    });

    singleItemPriceWrapper.append(singleItemPrice, singleItemDelete);

    singleItemInfoBottomWrapper.append(
      singleItemAmountWrapper,
      singleItemPriceWrapper
    );

    singleItemInfoWrapper.append(
      singleItemInfoTopWrapper,
      singleItemInfoBottomWrapper
    );

    singleItemWrapper.append(singleItemImageWrapper, singleItemInfoWrapper);
    orderReviewWrapper.append(singleItemWrapper);
  });
};

document.addEventListener('DOMContentLoaded', handleCheckout);
