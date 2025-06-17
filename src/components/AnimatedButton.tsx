import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  ripple?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  loading = false,
  ripple = true
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    // Ripple effect
    if (ripple) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { id: Date.now(), x, y };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    }

    setIsClicked(true);
    
    try {
      await onClick?.();
    } finally {
      setTimeout(() => setIsClicked(false), 150);
    }
  };

  const baseClasses = `
    relative overflow-hidden rounded-lg font-medium transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
    disabled:cursor-not-allowed disabled:opacity-50
  `;

  const variantClasses = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50 active:bg-orange-100'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1, ease: "easeOut" }
    },
    clicked: {
      scale: [1, 0.95, 1.02, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const loadingSpinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  const textVariants = {
    initial: { opacity: 1, y: 0 },
    loading: { 
      opacity: 0.7, 
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const rippleVariants = {
    initial: { scale: 0, opacity: 0.5 },
    animate: { 
      scale: 4, 
      opacity: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      variants={buttonVariants}
      initial="initial"
      whileHover={!disabled && !loading ? "hover" : undefined}
      whileTap={!disabled && !loading ? "tap" : undefined}
      animate={isClicked ? "clicked" : "initial"}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {/* Ripple effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute bg-white rounded-full pointer-events-none"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
            variants={rippleVariants}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
          />
        ))}
      </AnimatePresence>

      {/* Content container */}
      <motion.div 
        className="flex items-center justify-center gap-2"
        variants={textVariants}
        animate={loading ? "loading" : "initial"}
      >
        {/* Loading spinner */}
        <AnimatePresence>
          {loading && (
            <motion.div
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
              variants={loadingSpinnerVariants}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, ...loadingSpinnerVariants.animate }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>

        {/* Button text */}
        <motion.span
          animate={loading ? { opacity: 0.7 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      </motion.div>

      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{
          x: '100%',
          opacity: [0, 0.1, 0],
          transition: { duration: 0.6, ease: "easeOut" }
        }}
      />
    </motion.button>
  );
};

export default AnimatedButton; 