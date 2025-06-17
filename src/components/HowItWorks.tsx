import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../constants/images';
import { animationPresets, fadeInUpVariants } from '../utils/animations';
import { hoverVariants } from '../utils/animationHelpers';

const HowItWorks: React.FC = () => {
  // State to track the active tab (Buyers or Sellers)
  const [activeTab, setActiveTab] = useState<'buyers' | 'sellers'>('buyers');

  // Content for both buyer and seller flows
  const buyerSteps = [
    {
      title: 'Create Your Account',
      description: 'Sign up and complete the biometric verification process to ensure a secure marketplace for everyone.',
      image: IMAGES.HOW_IT_WORKS_ACCOUNT
    },
    {
      title: 'Browse or Request Items',
      description: "Search for what you need or create a specific request if you can't find it.",
      image: IMAGES.HOW_IT_WORKS_BROWSE
    },
    {
      title: 'Buy Now or Place a Bid',
      description: 'Purchase immediately at the listed price or place a competitive bid to try and get a better deal.',
      image: IMAGES.HOW_IT_WORKS_BID,
      badge: {
        icon: IMAGES.FEATURE_BUY,
        title: 'Verified Users',
        text: 'Safe Transactions',
        bgColor: 'rgba(29, 98, 236, 0.1)'
      }
    },
    {
      title: 'Secure Payment',
      description: 'Your payment is held in escrow until you confirm receipt of your item.',
      image: IMAGES.HOW_IT_WORKS_PAYMENT,
      badge: {
        icon: IMAGES.FEATURE_PAYMENT,
        title: 'Secure Escrow',
        text: 'Payment Protection',
        bgColor: 'rgba(36, 198, 130, 0.15)'
      }
    },
    {
      title: 'Receive & Rate',
      description: 'Get your item via pickup or delivery, then rate your experience to help the community.',
      image: IMAGES.HOW_IT_WORKS_RECEIVE
    }
  ];

  const sellerSteps = [
    {
      title: 'Create Your Account',
      description: 'Sign up and complete the biometric verification process to build trust with potential buyers.',
      image: IMAGES.HOW_IT_WORKS_ACCOUNT
    },
    {
      title: 'List Your Items',
      description: "Take clear photos and provide detailed descriptions of what you're selling.",
      image: IMAGES.HOW_IT_WORKS_BROWSE
    },
    {
      title: 'Set Price or Enable Bidding',
      description: 'Choose a fixed price or allow buyers to place bids on your item.',
      image: IMAGES.HOW_IT_WORKS_BID,
      badge: {
        icon: IMAGES.FEATURE_BUY,
        title: 'Verified Users',
        text: 'Safe Transactions',
        bgColor: 'rgba(29, 98, 236, 0.1)'
      }
    },
    {
      title: 'Secure Payment Processing',
      description: 'Receive payment through our secure escrow system once a buyer commits.',
      image: IMAGES.HOW_IT_WORKS_PAYMENT,
      badge: {
        icon: IMAGES.FEATURE_PAYMENT,
        title: 'Secure Escrow',
        text: 'Payment Protection',
        bgColor: 'rgba(36, 198, 130, 0.15)'
      }
    },
    {
      title: 'Ship or Arrange Pickup',
      description: 'Coordinate with the buyer and receive payment once they confirm receipt.',
      image: IMAGES.HOW_IT_WORKS_RECEIVE
    }
  ];

  // Display steps based on active tab
  const stepsToShow = activeTab === 'buyers' ? buyerSteps : sellerSteps;

  // Animation variants for tab content switching
  const tabContentVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const stepCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section className="section how-it-works-section">
      <div className="container">
        <motion.div 
          className="how-it-works-header text-center mb-lg"
          {...animationPresets.section}
        >
          <h2 className="heading-2 text-brand mb-sm">How Sellam Works</h2>
          <p className="body-text text-opacity-80 max-w-768 mx-auto">
            Join thousands of Nigerians who are buying and selling on Sellam every day
          </p>
        </motion.div>
        
        {/* Tab Switcher */}
        <motion.div 
          className="tab-container mb-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="tabs">
            <motion.button 
              className={`tab ${activeTab === 'buyers' ? 'active' : ''}`}
              onClick={() => setActiveTab('buyers')}
              whileHover={hoverVariants.button.hover}
              whileTap={hoverVariants.button.tap}
              layout
            >
              For Buyers
            </motion.button>
            <motion.button 
              className={`tab ${activeTab === 'sellers' ? 'active' : ''}`}
              onClick={() => setActiveTab('sellers')}
              whileHover={hoverVariants.button.hover}
              whileTap={hoverVariants.button.tap}
              layout
            >
              For Sellers
            </motion.button>
          </div>
        </motion.div>
        
        {/* Steps Content in Bento Grid Layout - 2 on left, 3 on right */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="bento-grid"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
          <div className="bento-left">
            {/* Browse or Request Items */}
              <motion.div 
                className="step-card"
                variants={stepCardVariants}
                whileHover={hoverVariants.card.hover}
              >
              <div className="step-image-container">
                  <motion.img 
                    src={stepsToShow[1].image} 
                    alt={stepsToShow[1].title} 
                    className="step-image"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />
              </div>
              <div className="step-content">
                <h3 className="step-title">{stepsToShow[1].title}</h3>
                <p className="step-description">{stepsToShow[1].description}</p>
              </div>
              </motion.div>
            
            {/* Secure Payment */}
              <motion.div 
                className="step-card"
                variants={stepCardVariants}
                whileHover={hoverVariants.card.hover}
              >
              <div className="step-image-container">
                  <motion.img 
                    src={stepsToShow[3].image} 
                    alt={stepsToShow[3].title} 
                    className="step-image"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  />
                {stepsToShow[3].badge && (
                    <motion.div 
                      className="step-badge"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                    <div 
                      className="badge-icon"
                      style={{ backgroundColor: stepsToShow[3].badge.bgColor }}
                    >
                      <img 
                        src={stepsToShow[3].badge.icon} 
                        alt="Feature icon" 
                        className="badge-icon-img"
                      />
                    </div>
                    <div className="badge-text">
                      <h4>{stepsToShow[3].badge.title}</h4>
                      <p>{stepsToShow[3].badge.text}</p>
                    </div>
                    </motion.div>
                )}
              </div>
              <div className="step-content">
                <h3 className="step-title">{stepsToShow[3].title}</h3>
                <p className="step-description">{stepsToShow[3].description}</p>
              </div>
              </motion.div>
          </div>
          
          <div className="bento-right">
            {/* Create Your Account */}
              <motion.div 
                className="step-card"
                variants={stepCardVariants}
                whileHover={hoverVariants.card.hover}
              >
              <div className="step-image-container">
                  <motion.img 
                    src={stepsToShow[0].image} 
                    alt={stepsToShow[0].title} 
                    className="step-image"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  />
              </div>
              <div className="step-content">
                <h3 className="step-title">{stepsToShow[0].title}</h3>
                <p className="step-description">{stepsToShow[0].description}</p>
              </div>
              </motion.div>
            
            {/* Buy Now or Place a Bid */}
              <motion.div 
                className="step-card"
                variants={stepCardVariants}
                whileHover={hoverVariants.card.hover}
              >
              <div className="step-image-container">
                  <motion.img 
                    src={stepsToShow[2].image} 
                    alt={stepsToShow[2].title} 
                    className="step-image"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                  />
                {stepsToShow[2].badge && (
                    <motion.div 
                      className="step-badge"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                    <div 
                      className="badge-icon"
                      style={{ backgroundColor: stepsToShow[2].badge.bgColor }}
                    >
                      <img 
                        src={stepsToShow[2].badge.icon} 
                        alt="Feature icon" 
                        className="badge-icon-img"
                      />
                    </div>
                    <div className="badge-text">
                      <h4>{stepsToShow[2].badge.title}</h4>
                      <p>{stepsToShow[2].badge.text}</p>
                    </div>
                    </motion.div>
                )}
              </div>
              <div className="step-content">
                <h3 className="step-title">{stepsToShow[2].title}</h3>
                <p className="step-description">{stepsToShow[2].description}</p>
              </div>
              </motion.div>
            
            {/* Receive & Rate */}
              <motion.div 
                className="step-card"
                variants={stepCardVariants}
                whileHover={hoverVariants.card.hover}
              >
              <div className="step-image-container">
                  <motion.img 
                    src={stepsToShow[4].image} 
                    alt={stepsToShow[4].title} 
                    className="step-image"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                  />
              </div>
              <div className="step-content">
                <h3 className="step-title">{stepsToShow[4].title}</h3>
                <p className="step-description">{stepsToShow[4].description}</p>
              </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorks; 