import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { imageLoadVariants } from '../utils/animationHelpers';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  blurDataURL?: string;
  onLoad?: () => void;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  placeholder,
  blurDataURL,
  onLoad,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageSrc, setImageSrc] = useState(priority ? src : '');

  useEffect(() => {
    if (priority) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
  };

  const shimmerVariants = {
    initial: { x: '-100%' },
    animate: { 
      x: '100%',
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop' as const
      }
    }
  };

  const containerVariants = {
    loading: {
      backgroundColor: '#f0f0f0',
    },
    loaded: {
      backgroundColor: 'transparent',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      variants={containerVariants}
      animate={isLoaded ? 'loaded' : 'loading'}
    >
      {/* Shimmer loading effect */}
      <AnimatePresence>
        {!isLoaded && !isError && (isInView || priority) && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Blur placeholder */}
      {blurDataURL && !isLoaded && (
        <motion.img
          src={blurDataURL}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover filter blur-sm ${className}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Main image */}
      <AnimatePresence>
        {(isInView || priority) && imageSrc && (
          <motion.img
            src={imageSrc}
            alt={alt}
            className={`w-full h-full object-cover ${className}`}
            variants={imageLoadVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? "eager" : "lazy"}
          />
        )}
      </AnimatePresence>

      {/* Error state */}
      {isError && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image not available</div>
          </div>
        </motion.div>
      )}

      {/* Placeholder while not in view */}
      {placeholder && !isInView && !priority && (
        <motion.div
          className="absolute inset-0 bg-gray-200 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isInView ? 0 : 1 }}
        >
          <div className="text-gray-400 text-sm">{placeholder}</div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LazyImage; 