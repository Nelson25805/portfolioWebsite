// scripts.js

let slideIndex = [0, 0]; // Array size should match the number of project carousels

function nextSlide(projectIndex) {
    const carousel = document.querySelectorAll('.carousel-images')[projectIndex];
    const images = carousel.children.length;
    slideIndex[projectIndex] = (slideIndex[projectIndex] + 1) % images;
    updateCarousel(projectIndex);
}

function prevSlide(projectIndex) {
    const carousel = document.querySelectorAll('.carousel-images')[projectIndex];
    const images = carousel.children.length;
    slideIndex[projectIndex] = (slideIndex[projectIndex] - 1 + images) % images;
    updateCarousel(projectIndex);
}


function updateCarousel(projectIndex) {
    const carousel = document.querySelectorAll('.carousel-images')[projectIndex];
    const offset = -slideIndex[projectIndex] * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

