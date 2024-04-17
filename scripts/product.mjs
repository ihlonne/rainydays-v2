import { API_RAINY_DAYS } from './common/constants.mjs';
import { hideLoader, showLoader } from './loader.mjs';

// SAVE UNIQUE ID FROM SELECTED PRODUCT
const getJacketIdFromQuery = async function () {
  const urlParam = new URLSearchParams(window.location.search);
  return urlParam.get('id');
};

// SAVE UNIQUE DATA FROM SELECTED PRODUCT
const getSingleJacket = async function () {
  const id = await getJacketIdFromQuery();
  const productUrl = `${API_RAINY_DAYS}/${id}`;

  try {
    const response = await fetch(productUrl);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
};

// CREATE PAGE TITLE
const createTitle = async function () {
  const data = await getSingleJacket();

  document.title = `Buy ${data.data.title} | Rainy Days`;
};

createTitle();

// CREATE IMAGE
export async function createImage() {
  const data = await getSingleJacket();

  const imgWrapper = document.querySelector(
    '.product-page__items-container__images'
  );
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('.product-page__items-container__images-main');
  const imgMarkup = `
    <img src="${data.data.image.url}" alt="${data.data.image.alt}"/>
  `;
  imageDiv.innerHTML = imgMarkup;
  imgWrapper.append(imageDiv);
}

// CREATE PRODUCT DESCRIPTION
async function createDescription() {
  const data = await getSingleJacket();

  const descriptionWrapper = document.querySelector(
    '.product-page__items-container__description'
  );

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('product-page__items-container__info-text');
  const descriptionMarkup = `
        <h1>${data.data.title}</h1>
        <div class="product-page__items-container__info-text">
        <p class="price">$${data.data.price}</p>
        <p class="description">${data.data.description}
        </p>
        </div>
        <div class="product-page__items-container__select">
          <class="product-page__items-container__info-size-select">
            
          </div>
          
        </div>
      
    `;
  descriptionDiv.innerHTML = descriptionMarkup;
  descriptionWrapper.append(descriptionDiv);
}

// CREATE SIZE BUTTONS
async function createSize() {
  const data = await getSingleJacket();

  const sizeOptionsWrapper = document.querySelector(
    '.product-page__items-container__info-size-select'
  );

  try {
    data.data.sizes.map((item) => {
      const sizeItem = document.createElement('button');
      sizeItem.classList.add('info-size-select__btn');
      if (item === 'S') {
        sizeItem.classList.add('info-size-select__btn-selected');
      }
      const sizeOptionMarkup = `
      ${item}
      `;
      sizeItem.innerHTML = sizeOptionMarkup;
      sizeOptionsWrapper.append(sizeItem);
    });
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

// RENDER CONTENT TO PAGE WHEN DOM CONTENT IS LOADED
document.addEventListener('DOMContentLoaded', () => {
  try {
    showLoader();

    createImage();
    createDescription();
    createSize();
  } catch (error) {
    console.log(error);
    throw new Error();
  } finally {
    hideLoader();
  }
});
