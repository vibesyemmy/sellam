import React, { useState } from 'react';
import { IMAGES } from '../constants/images';

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

  return (
    <section className="section how-it-works-section">
      <div className="container">
        <div className="how-it-works-header text-center mb-lg">
          <h2 className="heading-2 text-brand mb-sm">How Sellam Works</h2>
          <p className="body-text text-opacity-80 max-w-768 mx-auto">
            Join thousands of Nigerians who are buying and selling on Sellam every day
          </p>
        </div>
        
        {/* Tab Switcher */}
        <div className="tab-container mb-lg">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'buyers' ? 'active' : ''}`}
              onClick={() => setActiveTab('buyers')}
            >
              For Buyers
            </button>
            <button 
              className={`tab ${activeTab === 'sellers' ? 'active' : ''}`}
              onClick={() => setActiveTab('sellers')}
            >
              For Sellers
            </button>
          </div>
        </div>
        
        {/* Steps Content in Two-Column Layout */}
        <div className="how-it-works-grid">
          {stepsToShow.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-image-container">
                <img src={step.image} alt={step.title} className="step-image" />
                {step.badge && (
                  <div className="step-badge">
                    <div 
                      className="badge-icon"
                      style={{ backgroundColor: step.badge.bgColor }}
                    >
                      <img 
                        src={step.badge.icon} 
                        alt="Feature icon" 
                        className="badge-icon-img"
                      />
                    </div>
                    <div className="badge-text">
                      <h4>{step.badge.title}</h4>
                      <p>{step.badge.text}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 