# Sellam Marketplace

A React-based product page for Sellam, a marketplace application where users can buy, sell, and bid for items. This implementation follows the Figma design provided.

## Implementation Progress

### Completed
- Navigation bar with logo and links
- Hero section with headline, description, and call-to-actions
- Responsive layout matching the design
- CSS-based styling with utility classes for consistency

## Screenshots

The implementation closely follows the provided Figma design:

- Clean, modern UI with clear typography
- Orange brand color for accents and CTAs
- Mobile-responsive layout
- Placeholder for product images

## Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
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
  - `DownloadButtons.tsx`: App store and Play store download buttons
  - `UserAvatars.tsx`: User avatars with social proof
- `src/pages/`: Page components
  - `ProductPage.tsx`: Main product page component
- `src/styles/`: Global styles
  - `global.css`: Global CSS styles with utility classes and component styles
- `src/constants/`: Constants used throughout the application
  - `images.ts`: Image path constants

## Technologies Used

- React
- TypeScript
- React Router
- CSS with utility classes
- Styled Components (for minimal component-specific styling)
- Framer Motion (for future animations)
- React Icons (for future icons)

## CSS Utility Classes

The project uses a utility-first approach with CSS classes for:
- Typography (`.text-primary`, `.text-secondary`, etc.)
- Layout (`.flex`, `.flex-col`, `.items-center`, etc.)
- Spacing (`.gap-sm`, `.gap-md`, `.gap-lg`)
- Components (`.btn`, `.btn-primary`, `.avatar`, etc.)

## Image Placeholders

The `public/images/` directory contains placeholder files that should be replaced with actual images before deployment:

- `app-store-badge.png`: Apple App Store download badge
- `play-store-badge.png`: Google Play Store download badge
- `hero-image.jpg`: Hero section image showing a phone seller packaging an iPhone
- `logo.svg`: Sellam logo

## Next Steps

Future development will include:
- Implementing the "How Sellam Works" section
- Building the product features section
- Adding testimonials
- Implementing the footer 