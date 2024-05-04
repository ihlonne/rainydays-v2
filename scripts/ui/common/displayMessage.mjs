export const displayMessage = function (wrapper, messageType, message) {
  let parent = wrapper;

  if (typeof wrapper === 'string') {
    parent = document.querySelector('product-wrapper__products');
  }

  parent.innerHTML = `<div class="alert alert-${messageType}" role="alert">${message}</div>`;
};
