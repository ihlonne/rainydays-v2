'use strict';

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

// Carousel effect on products on landing page
const carousel = document.querySelector('.carousel');

let isDragging = false,
    startX,
    startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging');
};

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
