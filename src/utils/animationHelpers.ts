// Optional: Performance monitoring for animations
export const logAnimationPerformance = (componentName: string, animationType: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`🎬 Animation triggered: ${componentName} - ${animationType}`);
  }
};

// Helper to create custom stagger delays for different grid sizes
export const createStaggerDelay = (index: number, baseDelay: number = 0.1) => {
  const isMobile = window.innerWidth < 768;
  const reducedDelay = isMobile ? baseDelay * 0.5 : baseDelay;
  return index * reducedDelay;
};

// Hover animation variants for cards and buttons
export const hoverVariants = {
  card: {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  },
  button: {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
    }
  }
};

// Image loading animation
export const imageLoadVariants = {
  hidden: { 
    opacity: 0, 
    scale: 1.1 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Section transitions (for page navigation later)
export const pageTransitionVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}; 