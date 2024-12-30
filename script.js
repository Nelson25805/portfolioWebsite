let currentIndex = 0; // To track the current position in the carousel

// Show the large image in the modal
function showLargeImage(src) {
    const modal = document.getElementById('imageModal');
    const largeImage = document.getElementById('largeImage');
    largeImage.src = src;
    modal.style.display = "block"; // Show the modal
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Move to the next or previous slide
function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const totalImages = document.querySelectorAll('.carousel img').length;

    // Update the current index based on direction
    currentIndex += direction;

    // Ensure that the carousel loops around properly
    if (currentIndex >= totalImages - 2) { // The last index of the valid group of 3 images
        currentIndex = 0; // Loop back to the first image
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 3; // Loop to the last group of images
    }

    // Move the carousel by adjusting its transform property
    carousel.style.transform = `translateX(-${currentIndex * 33.33}%)`; // Move by 33.33% each time
}
