// Hamburger menu
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.navigation-links');

const mobileMenu = () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
};

hamburger.addEventListener('click', mobileMenu);

// Change background color of navigation bar on scroll
const header = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('change');
  } else {
    header.classList.remove('change');
  }
});
