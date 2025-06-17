import { Variants } from 'framer-motion';

// Check if user prefers reduced motion for accessibility and performance
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check if device is mobile for performance optimization
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

// Get optimized animation settings based on device and user preferences
const getAnimationSettings = () => {
  const shouldReduce = prefersReducedMotion() || isMobile();
  
  return {
    duration: shouldReduce ? 0.3 : 0.6,
    delay: shouldReduce ? 0 : 0.1,
    distance: shouldReduce ? 20 : 40,
    staggerDelay: shouldReduce ? 0.05 : 0.1,
    once: true, // Animate only once for performance
  };
};

// Hero section animations (immediate load, no scroll trigger needed)
export const heroVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: getAnimationSettings().distance 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: getAnimationSettings().duration,
      ease: [0.25, 0.1, 0.25, 1], // Custom easing similar to GoMoney
    }
  }
};

// Container for staggered children animations
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: getAnimationSettings().staggerDelay,
      delayChildren: getAnimationSettings().delay,
    }
  }
};

// Individual item animations for features, cards, etc.
export const fadeInUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: getAnimationSettings().distance 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: getAnimationSettings().duration,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

// Section animations (scroll-triggered)
export const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: getAnimationSettings().distance * 1.5 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: getAnimationSettings().duration * 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

// Optimized viewport options for scroll animations
export const viewportOptions = {
  once: true, // Only animate once for performance
  amount: 0.2, // Trigger when 20% of element is visible
  margin: '0px 0px -100px 0px', // Start animation slightly before element is fully visible
};

// Animation presets for different components
export const animationPresets = {
  // For hero elements that should animate immediately
  hero: {
    variants: heroVariants,
    initial: 'hidden',
    animate: 'visible',
  },
  
  // For sections that animate on scroll
  section: {
    variants: sectionVariants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: viewportOptions,
  },
  
  // For containers with staggered children
  staggerContainer: {
    variants: staggerContainerVariants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: viewportOptions,
  },
  
  // For individual items in a staggered container
  staggerItem: {
    variants: fadeInUpVariants,
  },
}; 