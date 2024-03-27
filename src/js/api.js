async function loadInfo() {
    const response = await fetch('https://v2.api.noroff.dev/rainy-days');
    const data = await response.json();

    return data;
}

export default { loadInfo };

document.addEventListener('DOMContentLoaded', async () => {
    let data = [];
    try {
        data = await loadInfo();
    } catch (e) {
        console.log('Error!');
        console.log(e);
    }

    const productWrapperFemale = document.querySelector(
        '.women-wrapper__products'
    );
    const productWrapperMale = document.querySelector('.men-wrapper__products');

    data.data.map((item) => {
        const productArticle = document.createElement('article');
        productArticle.setAttribute('id', item.id);
        productArticle.classList.add('.products-wrapper__item');
        productArticle.classList.add('.card');
        const content = `
        <a href="">
            <div class="product__img">
            <img src="${item.image.url}" alt="${item.description}" draggable="false" >
            </div>
            <div class="products-product__info">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
            </div>
        </a>
        `;
        productArticle.innerHTML = content;

        // Check if item is categorized as male or female

        if (item.gender === 'Female') {
            productWrapperFemale.append(productArticle);
        } else {
            productWrapperMale.append(productArticle);
        }
    });

    console.log(data.data[0]);
    return data;
});
