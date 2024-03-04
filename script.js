// script.js

// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Automatic slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
