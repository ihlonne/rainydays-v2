export function displayJackets(filteredData) {
  const productWrapper = document.querySelector('.product-wrapper__products');
  productWrapper.innerHTML = '';

  console.log(filteredData);

  filteredData.map((item) => {
    const productArticle = document.createElement('article');
    productArticle.setAttribute('id', item.id);
    productArticle.classList.add('.products-wrapper__item');
    productArticle.classList.add('.card');
    const content = `
            <a href="/product/?id=${item.id}">
            <div class="product__img" >
              <img src="${item.image.url}" alt="${item.description}">
            </div>
            <div class="products-product__info">
              <h3>${item.title}</h3>
              <p>$${item.price}</p>
            </div>
            </a>
      `;
    /* productArticle.addEventListener('click', () => {
      window.location.href = `/product/?id=${item.id}`;
    }); */
    productArticle.innerHTML = content;

    productWrapper.append(productArticle);
  });
}
