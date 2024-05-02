import { displayCartItem } from './displayCartItem.mjs';

const orderReviewWrapper = document.querySelector('.order-review-container');

export const handleCheckout = function (newCart) {
  const singleOrderItem = displayCartItem(newCart);
  orderReviewWrapper.append(singleOrderItem);
  console.log(orderReviewWrapper);
};

console.log(orderReviewWrapper);
