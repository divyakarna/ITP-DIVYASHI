// Enhanced Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slider = document.querySelector('.slider');
  
    if (!slider || slides.length === 0) return;
  
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000; // 5 seconds per slide
  
    // Function to show a specific slide
    function showSlide(index) {
      // Wrap around if at ends
      currentSlide = (index + slides.length) % slides.length;
  
      // Update all slides
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
      });
    }
  
    // Function to go to next slide
    function nextSlide() {
      showSlide(currentSlide + 1);
      resetInterval();
    }
  
    // Function to go to previous slide
    function prevSlide() {
      showSlide(currentSlide - 1);
      resetInterval();
    }
  
    // Start auto-rotation
    function startAutoRotation() {
      slideInterval = setInterval(nextSlide, slideDuration);
    }
  
    function resetInterval() {
      clearInterval(slideInterval);
      startAutoRotation();
    }
  
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  
    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', startAutoRotation);
  
    // Initialize
    showSlide(currentSlide);
    startAutoRotation();
  });
  