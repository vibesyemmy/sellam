import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CallToAction.css';
import DownloadButtons from './DownloadButtons';
import { animationPresets, fadeInUpVariants } from '../utils/animations';

const CallToAction: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-content"
          {...animationPresets.staggerContainer}
        >
          <motion.div 
            className="cta-image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src="/images/call-to-action.png" alt="Woman shopping on Sellam" />
          </motion.div>
          <motion.div 
            className="cta-text"
            variants={fadeInUpVariants}
          >
            <motion.h2 
              className="heading-2 text-brand"
              variants={fadeInUpVariants}
            >
              Ready to Buy, Sell & Connect on Nigeria's Trusted Marketplace?
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
            >
              Join thousands of Nigerians who are already using Sellam to buy and sell items securely. Our community is growing every day!
            </motion.p>
            <motion.div
              variants={fadeInUpVariants}
            >
            <DownloadButtons />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction; 