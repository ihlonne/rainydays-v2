import { displayMessage } from '../common/displayMessage.mjs';

export function displayJackets(filteredData) {
  const productWrapper = document.querySelector('.products-wrapper__products');
  productWrapper.innerHTML = '';

  try {
    filteredData.map((item) => {
      const productArticle = document.createElement('article');
      productArticle.setAttribute('id', item.id);
      productArticle.classList.add('.products-wrapper__item');
      productArticle.classList.add('.flex');
      const content = `
              <a href="/product/?id=${item.id}">
              <div class="products-wrapper__img" >
                <img src="${item.image.url}" alt="${item.description}">
              </div>
              <div class="products-product__info-text">
                <h3>${item.title}</h3>
                <p>$${item.price}</p>
              </div>
              </a>
        `;
      productArticle.innerHTML = content;

      productWrapper.append(productArticle);
    });
  } catch (error) {
    displayMessage(productWrapper, '', error);
  }
}
