import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants/images';
import UserAvatars from './UserAvatars';
import DownloadButtons from './DownloadButtons';
import { animationPresets, staggerContainerVariants, fadeInUpVariants } from '../utils/animations';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="hero-headline"
              variants={fadeInUpVariants}
            >
              Buy, Sell & Bid for Items You Love
            </motion.h1>
            <motion.p 
              className="description"
              variants={fadeInUpVariants}
            >
              A secure, community-driven marketplace to sell your unused items, buy at great prices, or request specific products via bidding or direct purchase.
            </motion.p>
            <motion.div 
              className="social-proof flex items-center gap-md"
              variants={fadeInUpVariants}
            >
              <UserAvatars />
              <span className="social-proof-text text-secondary">
                <strong className="text-primary">10,000+</strong> Nigerians trust Sellam
              </span>
            </motion.div>
            <motion.div
              variants={fadeInUpVariants}
            >
            <DownloadButtons />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="hero-image-container"
        initial={{ opacity: 0, x: 40 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          transition: {
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1]
          }
        }}
      >
        <img 
          src="/images/hero-image.png"
          alt="Nigerian phone seller packaging an iPhone for a customer"
          className="hero-image"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection; 