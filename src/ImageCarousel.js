/**
 * ImageCarousel - A reusable image carousel component
 * @param {HTMLElement} container - The container element for the carousel
 * @param {Array<string>} images - Array of image URLs
 * @param {Object} options - Configuration options
 */
class ImageCarousel {
  constructor(container, images, options = {}) {
    this.container = container;
    this.images = images;
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    
    // Options with defaults
    this.options = {
      autoPlayDelay: options.autoPlayDelay || 5000,
      showArrows: options.showArrows !== false,
      showDots: options.showDots !== false,
      autoPlay: options.autoPlay !== false,
    };
    
    this.init();
  }
  
  init() {
    this.createCarouselStructure();
    this.updateCarousel();
    
    if (this.options.autoPlay) {
      this.startAutoPlay();
    }
  }
  
  createCarouselStructure() {
    // Clear container
    this.container.innerHTML = '';
    this.container.classList.add('carousel-container');
    
    // Create frame (viewport)
    this.frame = document.createElement('div');
    this.frame.classList.add('carousel-frame');
    
    // Create slider (wide container for all slides)
    this.slider = document.createElement('div');
    this.slider.classList.add('carousel-slider');
    
    // Create slides
    this.images.forEach((imageSrc, index) => {
      const slide = document.createElement('div');
      slide.classList.add('carousel-slide');
      
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = `Slide ${index + 1}`;
      
      slide.appendChild(img);
      this.slider.appendChild(slide);
    });
    
    this.frame.appendChild(this.slider);
    this.container.appendChild(this.frame);
    
    // Create arrows if enabled
    if (this.options.showArrows) {
      this.createArrows();
    }
    
    // Create navigation dots if enabled
    if (this.options.showDots) {
      this.createDots();
    }
  }
  
  createArrows() {
    const prevButton = document.createElement('button');
    prevButton.classList.add('carousel-arrow', 'carousel-arrow-prev');
    prevButton.innerHTML = '&#10094;';
    prevButton.addEventListener('click', () => this.previous());
    
    const nextButton = document.createElement('button');
    nextButton.classList.add('carousel-arrow', 'carousel-arrow-next');
    nextButton.innerHTML = '&#10095;';
    nextButton.addEventListener('click', () => this.next());
    
    this.container.appendChild(prevButton);
    this.container.appendChild(nextButton);
  }
  
  createDots() {
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('carousel-dots');
    
    this.images.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      dot.addEventListener('click', () => this.goToSlide(index));
      dotsContainer.appendChild(dot);
    });
    
    this.container.appendChild(dotsContainer);
    this.dots = dotsContainer.querySelectorAll('.carousel-dot');
  }
  
  updateCarousel() {
    // Move the slider
    const offset = -this.currentIndex * 100;
    this.slider.style.transform = `translateX(${offset}%)`;
    
    // Update dots
    if (this.options.showDots && this.dots) {
      this.dots.forEach((dot, index) => {
        if (index === this.currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }
  
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateCarousel();
    this.resetAutoPlay();
  }
  
  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateCarousel();
    this.resetAutoPlay();
  }
  
  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
    this.resetAutoPlay();
  }
  
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.options.autoPlayDelay);
  }
  
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
  
  resetAutoPlay() {
    if (this.options.autoPlay) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }
  
  destroy() {
    this.stopAutoPlay();
    this.container.innerHTML = '';
  }
}

// Export for use in Node.js/module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ImageCarousel;
}

// Also expose globally for browser usage
if (typeof window !== 'undefined') {
  window.ImageCarousel = ImageCarousel;
}