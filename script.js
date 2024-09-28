let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to move slides
function moveSlide(direction) {
    // Remove the active class from the current slide
    slides[currentSlideIndex].classList.remove('active');

    // Calculate the next slide index
    currentSlideIndex += direction;

    // Loop the slides if index goes out of bounds
    if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    } else if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    }

    // Add the active class to the new slide
    slides[currentSlideIndex].classList.add('active');

    // Move the slider container to show the correct slide
    const slideWidth = slides[currentSlideIndex].clientWidth;
    document.querySelector('.slider-container').style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
}

