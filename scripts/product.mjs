import { main } from '../home.mjs';

const imgWrapper = document.querySelector(
  '.product-page__items-container__images'
);
const descriptionWrapper = document.querySelector(
  '.product-page__items-container__info'
);

function createImage(rainyDaysData) {
  const imgMarkup = `
  <div class="product-page__items-container__images-main">
    <img src="${item.image.url}" />
  </div>
  `;
}

function createDescription(rainyDaysData) {
  const descriptionMarkup = `
  <h1${item.title}</h1>
  <class="product-page__items-container__info-text">
  <p class="price">$${item.price}</p>
  <p class="description">${item.description}
  </p>
  </class=>
  <div class="product-page__items-container__select">
    <class="product-page__items-container__info-size-select">
      
    </div>
    <div class="product-page__items-container__cta">
    <button class="add-to-cart-btn">Add to cart </button>
    <button class="add-to-favorites-btn">
      <i class="fa-solid fa-heart"></i>
    </button>
    </div>
    <div class="product-page__additional-info">
    <p>
      <i class="fa-solid fa-circle-check"></i> Free shipping on
      deliveries over 800 NOK
    </p>
    <p><i class="fa-solid fa-circle-check"></i> days delivery</p>
    </div>
  </div>
`;
}

function createSize(rainyDaysData) {
  const sizeOptionsWrapper = document.querySelector(
    'product-page__items-container__info-size-select'
  );
  rainyDaysData.data.map((item) => {
    const sizeItem = document.createElement('li');
    sizeItem.classList.add('info-size-select__btn');
    const content = `
    <a>${item.size}</a>
    `;

    sizeItem.addEventListener('click', () => {
      sizeItem.classList.add('info-size-select__btn-selected');
    });
    sizeOptionsWrapper.innerHTML = content;
  });
}
