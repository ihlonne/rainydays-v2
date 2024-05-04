export const clearCart = function () {
  localStorage.clear();
};

const clearCartButton = document.querySelector('.checkout-btn');
clearCartButton.addEventListener('click', clearCart);
