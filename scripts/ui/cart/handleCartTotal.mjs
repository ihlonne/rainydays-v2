export const handleCartTotal = function () {
  const totalWrapper = document.querySelector('.total-info-price');
  totalWrapper.innerHTML = '';

  let total = 0;

  // Loop over the items in local storage
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });

  const content = `
    <p><span>$${total.toFixed(2)}</span></p>
  `;
  totalWrapper.innerHTML = content;

  return total;
};
