import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants/images';
import { hoverVariants } from '../utils/animationHelpers';

interface DownloadButtonsProps {
  className?: string;
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ className }) => {
  return (
    <div className={`flex gap-md ${className || ''}`}>
      <motion.a 
        href="#" 
        title="Download on App Store"
        whileHover={hoverVariants.button.hover}
        whileTap={hoverVariants.button.tap}
        style={{ display: 'inline-block' }}
      >
        <img 
          src="/images/app-store.png" 
          alt="Download on App Store"
          className="download-btn"
        />
      </motion.a>
      <motion.a 
        href="#" 
        title="Get it on Google Play"
        whileHover={hoverVariants.button.hover}
        whileTap={hoverVariants.button.tap}
        style={{ display: 'inline-block' }}
      >
        <img 
          src="/images/play-store.png" 
          alt="Get it on Google Play"
          className="download-btn"
        />
      </motion.a>
    </div>
  );
};

export default DownloadButtons; 