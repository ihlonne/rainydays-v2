export const displayCartItem = function (newCart, selectedSize) {
  console.log(newCart);

  newCart.map((jacket) => {
    console.log(jacket);
    // generate single item wrapper
    const singleItemWrapper = document.createElement('div');
    singleItemWrapper.classList.add('order');

    // generate single item image
    const singleItemImageWrapper = document.createElement('div');
    singleItemImageWrapper.classList.add('order-review__order-image');
    const singleItemImage = document.createElement('img');
    singleItemImage.src = jacket.data.image.url;
    singleItemImage.alt = jacket.data.description;
    singleItemImageWrapper.append(singleItemImage);

    // generate single item info wrappers
    const singleItemInfoWrapper = document.createElement('div');
    singleItemInfoWrapper.classList.add('order-review__order-info');

    const singleItemInfoTopWrapper = document.createElement('div');
    singleItemInfoTopWrapper.classList.add('order-review__order-info__top');

    // generate single item info
    const singleItemContent = `
    <h2>${jacket.data.title}</h2>
    <p><span>Color:</span> ${jacket.data.baseColor}</p>
    <p><span>Size:</span> ${selectedSize}</p>
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
    singleItemPrice.textContent = jacket.data.price;

    const singleItemDelete = document.createElement('i');
    singleItemDelete.classList.add('fa-solid', 'fa-trash-can');

    singleItemPriceWrapper.append(singleItemPrice, singleItemDelete);

    singleItemInfoBottomWrapper.append(singleItemAmountWrapper),
      singleItemPriceWrapper;

    singleItemInfoWrapper.append(
      singleItemInfoTopWrapper,
      singleItemInfoBottomWrapper
    );

    singleItemWrapper.append(singleItemImageWrapper, singleItemInfoWrapper);
    console.log(singleItemWrapper);
  });
};
