import { API_RAINY_DAYS } from './common/constants.mjs';
import { hideLoader, showLoader } from './loader.mjs';
import { fetchData } from './utils/fetchData.mjs';

const setCategory = async function (rainyDaysData) {
  let selectedOption = '';
  let dropdown = document.getElementById('select');

  dropdown.addEventListener('change', async () => {
    selectedOption = dropdown.value;

    let filteredData = [];

    switch (selectedOption) {
      case 'Favorite':
        filteredData = rainyDaysData.data.filter((item) => item.favorite);
        break;
      case 'Female':
        filteredData = rainyDaysData.data.filter(
          (item) => item.gender === 'Female'
        );
        break;
      case 'Male':
        filteredData = rainyDaysData.data.filter(
          (item) => item.gender === 'Male'
        );
        break;
      default:
        filteredData = rainyDaysData.data;
    }

    await displayJackets(filteredData);
  });

  await displayJackets(rainyDaysData.data);
};

async function displayJackets(filteredData) {
  const productWrapper = document.querySelector('.product-wrapper__products');
  productWrapper.innerHTML = '';

  console.log(filteredData);

  filteredData.map((item) => {
    const productArticle = document.createElement('article');
    productArticle.setAttribute('id', item.id);
    productArticle.classList.add('.products-wrapper__item');
    productArticle.classList.add('.card');
    const content = `
            <div class="product__img" >
              <img src="${item.image.url}" alt="${item.description}">
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
    setCategory(rainyDaysData);
    return rainyDaysData;
  } catch (error) {
    console.log(error);
    throw new Error();
  } finally {
  }
}

main();
