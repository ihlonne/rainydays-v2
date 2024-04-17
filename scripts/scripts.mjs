import { API_RAINY_DAYS } from './common/constants.mjs';
import { showLoader } from './loader.mjs';
import { fetchData } from './utils/fetchData.mjs';

async function displayJackets(rainyDaysData) {
  const productWrapper = document.querySelector('.product-wrapper__products');

  rainyDaysData.data.map((item) => {
    const productArticle = document.createElement('article');
    productArticle.setAttribute('id', item.id);
    productArticle.classList.add('.products-wrapper__item');
    productArticle.classList.add('.card');
    const content = `
            <div class="product__img" >
            <img src="${item.image.url}" alt="${item.description}" draggable="false">
            
            </div>
            <div class="products-product__info">
            <h3>${item.title}</h3>
                <p>$${item.price}</p>
            </div>
      `;
    productArticle.addEventListener('click', () => {
      window.location.href = `/product/?id=${item.id}`;
    });
    productArticle.innerHTML = content;

    productWrapper.append(productArticle);
  });
}

export async function main() {
  try {
    const rainyDaysData = await fetchData(API_RAINY_DAYS);
    displayJackets(rainyDaysData);
    return rainyDaysData;
  } catch (error) {
    console.log(error);
  }
}

main();
