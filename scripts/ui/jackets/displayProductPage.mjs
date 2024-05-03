import { addToCart } from '../cart/cart.mjs';

export const displayProductPage = function (jacket) {
  // generate page title
  document.title = `Buy ${jacket.data.title} | Rainy Days`;

  // generate section wrapper
  const jacketWrapper = document.createElement('section');
  jacketWrapper.classList.add('product-wrapper');
  jacketWrapper.classList.add('flex');
  jacketWrapper.textContent = '';

  // generate image wrapper
  const jacketImageWrapper = document.createElement('div');
  jacketImageWrapper.classList.add('product-wrapper__image');

  // generate image
  const jacketImage = document.createElement('img');
  jacketImage.src = jacket.data.image.url;
  jacketImage.alt = jacket.data.image.alt;
  jacketImageWrapper.append(jacketImage);

  // generate info wrapper
  const jacketInfoWrapper = document.createElement('div');
  jacketInfoWrapper.classList.add('.product-page__info');

  // generate info inner wrapper
  const jacketInfoInnerWrapper = document.createElement('div');
  jacketInfoInnerWrapper.classList.add('product-page__info-text');

  // generate jacket name
  const jacketTitle = document.createElement('h1');
  jacketTitle.textContent = jacket.data.title;

  // generate price
  const jacketPrice = document.createElement('p');
  jacketPrice.classList.add('price');
  jacketPrice.textContent = jacket.data.price;

  // generate description
  const jacketDescription = document.createElement('p');
  jacketDescription.textContent = jacket.data.description;
  jacketDescription.classList.add('description');
  jacketInfoInnerWrapper.append(jacketTitle, jacketPrice, jacketDescription);

  // generate buttons wrapper
  const jacketButtonsContainer = document.createElement('div');
  jacketButtonsContainer.classList.add('product-page__select');

  // generate jacket sizes
  const jacketSizes = document.createElement('div');
  jacketSizes.classList.add('product-page__info-size-select');
  jacket.data.sizes.map((size) => {
    const sizeItem = document.createElement('button');
    sizeItem.classList.add('info-size-select__btn');
    if (size === 'S') {
      sizeItem.classList.add('info-size-select__btn-selected');
    }
    sizeItem.textContent = size;
    jacketSizes.append(sizeItem);
  });

  // set default size to S
  let selectedSize = 'S';

  // set size on click
  jacketSizes.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      selectedSize = button.textContent;
    });
  });

  // generate cta buttons wrapper
  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('product-page__cta');

  // generate add to cart button
  const addToCartButton = document.createElement('button');
  addToCartButton.classList.add('add-to-cart-btn');
  addToCartButton.textContent = 'Add to cart';
  addToCartButton.addEventListener('click', () => {
    // add to cart
    const cartItem = {
      name: jacket.data.title,
      price: jacket.data.price,
      image: jacket.data.image,
      color: jacket.data.baseColor,
      size: selectedSize,
    };
    console.log(cartItem);

    // Retrieve existing cart data from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(cartItem);
    addToCart(cartItems);

    // Save updated cart data back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  });

  buttonsWrapper.append(addToCartButton);

  // append to buttons wrapper
  jacketButtonsContainer.append(jacketSizes, buttonsWrapper);

  // append to info wrapper
  jacketInfoWrapper.append(jacketInfoInnerWrapper, jacketButtonsContainer);

  // append to section wrapper
  jacketWrapper.append(jacketImageWrapper, jacketInfoWrapper);

  return jacketWrapper;
};
