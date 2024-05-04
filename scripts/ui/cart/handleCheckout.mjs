import { handleUI } from '../common/handleUI.mjs';
import { removeFromCart } from './removeFromCart.mjs';
import { handleCartTotal } from './handleCartTotal.mjs';
import { clearCart } from './clearCart.mjs';

export const handleCheckout = function () {
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
    (decreaseAmountButton.setAttribute.id = 'decrease'), jacket.id;
    decreaseAmountButton.style.cursor = 'pointer';
    decreaseAmountButton.addEventListener('click', () => {
      console.log('clicked');
      // Decrease the quantity by 1
      jacket.quantity--;

      // Update the displayed quantity
      selectedAmount.textContent = jacket.quantity;

      // If the quantity becomes 0, remove the item from the cart
      if (jacket.quantity === 0) {
        removeFromCart(index);
      } else {
        // Update the cart in localStorage
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        cartItems[index].quantity = jacket.quantity;
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }

      // Update the cart total
      handleCartTotal();
    });

    const selectedAmount = document.createElement('p');
    selectedAmount.textContent = jacket.quantity;
    selectedAmount.setAttribute.id = 'itemAmount';

    const increaseAmountButton = document.createElement('p');
    increaseAmountButton.textContent = '+';
    (increaseAmountButton.setAttribute.id = 'increase'), jacket.id;
    increaseAmountButton.style.cursor = 'pointer';
    increaseAmountButton.addEventListener('click', () => {
      console.log('clicked');
      // Increase the quantity by 1
      jacket.quantity++;

      // Update the displayed quantity
      selectedAmount.textContent = jacket.quantity;

      // Update the cart in localStorage
      const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
      cartItems[index].quantity = jacket.quantity;
      localStorage.setItem('cart', JSON.stringify(cartItems));

      // Update the cart total
      handleCartTotal();
    });

    singleItemAmountWrapper.append(
      decreaseAmountButton,
      selectedAmount,
      increaseAmountButton
    );

    const singleItemPriceWrapper = document.createElement('div');

    const singleItemPrice = document.createElement('p');
    singleItemPrice.textContent = jacket.price;
    singleItemPrice.setAttribute.id = 'item-price';

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

document.addEventListener(
  'DOMContentLoaded',
  handleCheckout,
  handleCartTotal(),
  clearCart
);
