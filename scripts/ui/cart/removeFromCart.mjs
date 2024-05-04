import { handleCartTotal } from './handleCartTotal.mjs';
import { handleCheckout } from './handleCheckout.mjs';

export const removeFromCart = function (index) {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

  // Check if the index is valid
  if (index >= 0 && index < cartItems.length) {
    // Remove the item from the cart array
    cartItems.splice(index, 1);

    // Update the local storage with the modified cart
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Call the function to update the displayed cart
    handleCheckout();
    handleCartTotal();
  }
};
