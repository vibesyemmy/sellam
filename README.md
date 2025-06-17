# Sellam Marketplace

A React-based marketplace application where users can buy, sell, and bid for items. This implementation features modern animations and a responsive design.

## Implementation Progress

### Completed
- Navigation bar with logo, links, and mobile menu
- Hero section with headline, description, and call-to-actions
- "How Sellam Works" section with interactive tabs
- Features section highlighting key marketplace capabilities
- Safe trading features with interactive selection
- Testimonial section with user reviews
- Call-to-action section for app downloads
- Footer with links and information
- Responsive layout matching the design
- Comprehensive animations and micro-interactions

## Animations

The project features several types of animations:

### Scroll Animations
- Fade-in and slide-up effects for section elements
- Staggered reveals for list items and features
- Parallax effects for background elements

### Interactive Animations
- Tab switching animations in the "How It Works" section
- Feature selection animations in "Safe Trading Features"
- Button hover and click effects
- Card hover animations in testimonials

### Micro-interactions
- Navbar scroll effects
- Lazy-loaded images with fade-in animations
- Ripple effects on buttons
- Mobile menu slide-in animation

## Screenshots

The implementation closely follows the provided Figma design:

- Clean, modern UI with clear typography
- Orange brand color for accents and CTAs
- Mobile-responsive layout
- Placeholder for product images

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/vibesyemmy/sellam.git
cd sellam
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm start
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/components/`: Reusable UI components
  - `Navbar.tsx`: Navigation bar component
  - `HeroSection.tsx`: Hero section with headline and CTAs
  - `HowItWorks.tsx`: Step-by-step guide to using Sellam
  - `FeaturesSection.tsx`: Key features of the marketplace
  - `SafeTradingFeatures.tsx`: Interactive features selection
  - `TestimonialSection.tsx`: User reviews and testimonials
  - `CallToAction.tsx`: App download section
  - `Footer.tsx`: Site footer with links
  - `AnimatedButton.tsx`: Button with ripple effects
  - `LazyImage.tsx`: Image component with loading animations
- `src/pages/`: Page components
  - `ProductPage.tsx`: Main product page component
- `src/styles/`: Global and component-specific styles
  - `global.css`: Global CSS styles with utility classes
  - `CallToAction.css`: Styles for the call-to-action section
  - `Footer.css`: Styles for the footer component
  - `SafeTradingFeatures.css`: Styles for the trading features section
  - `TestimonialSection.css`: Styles for testimonials
- `src/constants/`: Constants used throughout the application
  - `images.ts`: Image path constants
- `src/utils/`: Utility functions
  - `animations.ts`: Animation configurations
  - `animationHelpers.ts`: Helper functions for animations

## Technologies Used

- React
- TypeScript
- CSS with utility classes
- Intersection Observer API for scroll animations
- Custom animation utilities

## CSS Utility Classes

The project uses a utility-first approach with CSS classes for:
- Typography (`.text-primary`, `.text-secondary`, etc.)
- Layout (`.flex`, `.flex-col`, `.items-center`, etc.)
- Spacing (`.gap-sm`, `.gap-md`, `.gap-lg`)
- Components (`.btn`, `.btn-primary`, `.avatar`, etc.)
- Animations (`.fade-in`, `.slide-up`, etc.)

## Image Placeholders

The `public/images/` directory contains placeholder files that should be replaced with actual images before deployment:

- `app-store-badge.png`: Apple App Store download badge
- `play-store-badge.png`: Google Play Store download badge
- `hero-image.jpg`: Hero section image showing a phone seller packaging an iPhone
- `logo.svg`: Sellam logo

## Future Enhancements

- User authentication flow
- Product listing and bidding functionality
- Chat feature for buyers and sellers
- Payment integration
- User profile management 