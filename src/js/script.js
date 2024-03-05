const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.navigation-links');

const mobileMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

hamburger.addEventListener('click', mobileMenu);
