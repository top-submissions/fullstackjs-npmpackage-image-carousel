# @top-submissions/image-carousel

[![npm version](https://img.shields.io/npm/v/@top-submissions/image-carousel.svg)](https://www.npmjs.com/package/@top-submissions/image-carousel)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A lightweight, reusable image carousel component built with vanilla JavaScript. Part of The Odin Project curriculum.

## ✨ Features

- 🎯 **Pure JavaScript** - No dependencies required
- ⬅️➡️ **Navigation arrows** - Previous/Next buttons
- ⚫ **Navigation dots** - Click to jump to any slide
- ⏰ **Auto-play** - Automatically advances every 5 seconds (configurable)
- 📱 **Responsive** - Works on all screen sizes
- 🎨 **Customizable** - Easy to style and configure
- ♻️ **Reusable** - Create multiple carousels on the same page

## 📦 Installation

### Using npm

```bash
npm install @top-submissions/image-carousel
```

### Using CDN

```html
<link rel="stylesheet" href="path/to/styles.css">
<script src="path/to/ImageCarousel.js"></script>
```

## 🚀 Quick Start

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="node_modules/@top-submissions/image-carousel/src/css/styles.css">
</head>
<body>
    <div id="my-carousel"></div>
    
    <script src="node_modules/@top-submissions/image-carousel/src/ImageCarousel.js"></script>
    <script src="main.js"></script>
</body>
</html>
```

### JavaScript

```javascript
// Import if using modules
// const ImageCarousel = require('@top-submissions/image-carousel');

// Define your images
const images = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg',
    'path/to/image4.jpg'
];

// Initialize the carousel
const carousel = new ImageCarousel(
    document.getElementById('my-carousel'),
    images
);
```

## ⚙️ Configuration Options

```javascript
const carousel = new ImageCarousel(container, images, {
    autoPlayDelay: 5000,    // Time between slides in ms (default: 5000)
    showArrows: true,        // Show prev/next arrows (default: true)
    showDots: true,          // Show navigation dots (default: true)
    autoPlay: true           // Enable auto-play (default: true)
});
```

### Options Details

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `autoPlayDelay` | number | 5000 | Milliseconds between automatic slide transitions |
| `showArrows` | boolean | true | Display previous/next navigation arrows |
| `showDots` | boolean | true | Display navigation dots below carousel |
| `autoPlay` | boolean | true | Automatically advance slides |

## 📚 API Methods

### `next()`

Advance to the next slide.

```javascript
carousel.next();
```

### `previous()`

Go back to the previous slide.

```javascript
carousel.previous();
```

### `goToSlide(index)`

Jump to a specific slide by index (0-based).

```javascript
carousel.goToSlide(2); // Go to third slide
```

### `startAutoPlay()`

Start automatic slide transitions.

```javascript
carousel.startAutoPlay();
```

### `stopAutoPlay()`

Stop automatic slide transitions.

```javascript
carousel.stopAutoPlay();
```

### `destroy()`

Clean up the carousel and remove all event listeners.

```javascript
carousel.destroy();
```

## 🎨 Customization

The carousel uses CSS classes that you can override:

```css
/* Container */
.carousel-container { }

/* Frame (viewport) */
.carousel-frame { }

/* Slider (moves horizontally) */
.carousel-slider { }

/* Individual slides */
.carousel-slide { }

/* Navigation arrows */
.carousel-arrow { }
.carousel-arrow-prev { }
.carousel-arrow-next { }

/* Navigation dots */
.carousel-dots { }
.carousel-dot { }
.carousel-dot.active { }
```

## 💡 Examples

### Basic Carousel

```javascript
const carousel = new ImageCarousel(
    document.getElementById('carousel'),
    ['img1.jpg', 'img2.jpg', 'img3.jpg']
);
```

### Carousel without Auto-Play

```javascript
const carousel = new ImageCarousel(
    document.getElementById('carousel'),
    images,
    { autoPlay: false }
);
```

### Fast Auto-Play (3 seconds)

```javascript
const carousel = new ImageCarousel(
    document.getElementById('carousel'),
    images,
    { autoPlayDelay: 3000 }
);
```

### Manual Control Only

```javascript
const carousel = new ImageCarousel(
    document.getElementById('carousel'),
    images,
    { 
        autoPlay: false,
        showDots: false 
    }
);
```

### Multiple Carousels

```javascript
// First carousel
const carousel1 = new ImageCarousel(
    document.getElementById('carousel1'),
    ['set1-img1.jpg', 'set1-img2.jpg']
);

// Second carousel
const carousel2 = new ImageCarousel(
    document.getElementById('carousel2'),
    ['set2-img1.jpg', 'set2-img2.jpg']
);
```

## 🛠️ Development

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Setup

```bash
# Clone the repository
git clone https://github.com/top-submissions/fullstackjs-npmpackage-image-carousel.git

# Navigate to directory
cd fullstackjs-npmpackage-image-carousel

# Install dependencies
npm install
```

### Scripts

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

## 📤 Publishing to npm

### First Time Setup

1. **Create npm account** (if you don't have one):

   ```bash
   npm adduser
   ```

2. **Login to npm**:

   ```bash
   npm login
   ```

3. **Verify you're part of the @top-submissions organization** on npmjs.com

### Publishing Steps

1. **Update version** in `package.json`:

   ```json
   {
     "version": "1.0.1"
   }
   ```

2. **Commit changes**:

   ```bash
   git add .
   git commit -m "Release v1.0.1"
   git tag v1.0.1
   git push origin main --tags
   ```

3. **Publish to npm**:

   ```bash
   npm publish --access public
   ```

   Note: The `--access public` flag is required for scoped packages to be public.

### Version Updates

Follow semantic versioning:

- **Patch** (1.0.x): Bug fixes
- **Minor** (1.x.0): New features (backward compatible)
- **Major** (x.0.0): Breaking changes

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 📄 License

ISC License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues

Found a bug? Please report it on the [GitHub Issues](https://github.com/top-submissions/fullstackjs-npmpackage-image-carousel/issues) page.

## 🙏 Acknowledgments

- Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum
- Project: Dynamic User Interface Interactions - Image Carousel

## 📞 Contact

- GitHub: [@top-submissions](https://github.com/top-submissions)
- Project Link: [https://github.com/top-submissions/fullstackjs-npmpackage-image-carousel](https://github.com/top-submissions/fullstackjs-npmpackage-image-carousel)

---

Made with ❤️ as part of The Odin Project
