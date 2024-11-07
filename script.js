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




// Get the modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Add click event listeners to all images within the carousel
document.querySelectorAll('.carousel-images img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.textContent = this.alt;
    }
});

// Close the modal when the 'x' button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

