import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../constants/images';
import '../styles/SafeTradingFeatures.css';
import { animationPresets, fadeInUpVariants } from '../utils/animations';
import { hoverVariants } from '../utils/animationHelpers';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const SafeTradingFeatures: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: <SmartBiddingIcon />,
      title: "Smart Bidding System",
      description: "Set your own prices or let buyers compete with bids. Our transparent bidding process ensures you get the best value for your items.",
      image: IMAGES.BIDDING_SCREEN
    },
    {
      icon: <SecureEscrowIcon />,
      title: "Secure Escrow Payments",
      description: "Money is held safely until both buyer and seller confirm the transaction is complete, eliminating payment fraud.",
      image: IMAGES.ESCROW_PAYMENT
    },
    {
      icon: <AdminVerificationIcon />,
      title: "Admin Product Verification",
      description: "Our team reviews listings to ensure quality and authenticity before they go live on the marketplace.",
      image: IMAGES.PRODUCT_VERIFICATION
    },
    {
      icon: <RatingReviewsIcon />,
      title: "Rating & Reviews",
      description: "Build trust in the community with our comprehensive rating system for both buyers and sellers.",
      image: IMAGES.RATING_REVIEWS
    }
  ];

  const [activeFeature, setActiveFeature] = useState(0);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
  };

  // Animation variants for feature switching
  const featureImageVariants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const featureContentVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div 
          className="text-center mb-lg"
          {...animationPresets.section}
        >
          <h2 className="heading-2 text-brand mb-sm">Powerful Features for Safe Trading</h2>
          <p className="body-text text-opacity-80 mx-auto">
            Every feature in Sellam is designed to make buying and selling safer, easier, and more profitable for Nigerians.
          </p>
        </motion.div>

        <motion.div 
          className="features-content-wrapper"
          {...animationPresets.staggerContainer}
        >
          <motion.div 
            className="feature-list"
            variants={fadeInUpVariants}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className={`feature-item ${activeFeature === index ? 'active' : ''}`}
                onClick={() => handleFeatureClick(index)}
                whileHover={{ 
                  x: activeFeature !== index ? 5 : 0,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  scale: activeFeature === index ? 1.02 : 1,
                  transition: { duration: 0.3 }
                }}
                style={{ cursor: 'pointer' }}
              >
                <motion.div 
                  className={`feature-icon-wrapper ${activeFeature === index ? 'active' : ''}`}
                  animate={{
                    scale: activeFeature === index ? 1.1 : 1,
                    rotate: activeFeature === index ? 5 : 0,
                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="feature-item-title">{feature.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="feature-image-container"
            variants={fadeInUpVariants}
          >
            <AnimatePresence mode="wait">
              <motion.img 
              key={activeFeature}
              className="feature-phone-image"
              src={features[activeFeature].image} 
              alt={features[activeFeature].title} 
                variants={featureImageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            />
            </AnimatePresence>
          </motion.div>

          <motion.div 
            className="feature-content"
            variants={fadeInUpVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                variants={featureContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
            <h3 className="feature-content-heading">{features[activeFeature].title}</h3>
            <p className="feature-content-description">
              {features[activeFeature].description}
            </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Animated Icons components
const SmartBiddingIcon = () => (
  <motion.svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ rotate: 5, scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 9L9 15" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9L15 15" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const SecureEscrowIcon = () => (
  <motion.svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ y: -2, scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 11V7C7 5.93913 7.42143 4.92172 8.17157 4.17157C8.92172 3.42143 9.93913 3 11 3H13C14.0609 3 15.0783 3.42143 15.8284 4.17157C16.5786 4.92172 17 5.93913 17 7V11" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const AdminVerificationIcon = () => (
  <motion.svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ duration: 0.2 }}
  >
    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 4L12 14.01L9 11.01" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

const RatingReviewsIcon = () => (
  <motion.svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1 }}
    animate={{ rotate: [0, 5, -5, 0] }}
    transition={{ 
      rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      hover: { duration: 0.2 }
    }}
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

export default SafeTradingFeatures; 