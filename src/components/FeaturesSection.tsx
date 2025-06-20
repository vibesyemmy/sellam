import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants/images';
import { animationPresets, fadeInUpVariants } from '../utils/animations';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconBgColor: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, iconBgColor, index }) => {
  return (
    <motion.div 
      className="feature-card"
      variants={fadeInUpVariants}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
    >
      <div className="feature-icon-circle" style={{ backgroundColor: iconBgColor }}>
        <img src={icon} alt={title} className="feature-icon" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: IMAGES.FEATURE_SELL,
      title: 'Sell Unused Items',
      description: 'List your items for sale with photos and set your preferred price or enable bidding.',
      iconBgColor: 'rgba(36, 198, 130, 0.15)'
    },
    {
      icon: IMAGES.FEATURE_BUY,
      title: 'Buy or Bid',
      description: 'Find exactly what you need and purchase instantly or place competitive bids.',
      iconBgColor: 'rgba(29, 98, 236, 0.1)'
    },
    {
      icon: IMAGES.FEATURE_MESSAGE,
      title: 'Built-in Messaging',
      description: 'Chat directly with sellers to negotiate or arrange pickup details securely.',
      iconBgColor: 'rgba(255, 106, 0, 0.1)'
    },
    {
      icon: IMAGES.FEATURE_PAYMENT,
      title: 'Escrow Payments',
      description: 'Your money stays secure until you confirm receipt of your purchase.',
      iconBgColor: 'rgba(255, 53, 53, 0.15)'
    },
    {
      icon: IMAGES.FEATURE_VERIFY,
      title: 'Verified Products',
      description: 'All listings are verified by our admin team to prevent scams and ensure quality.',
      iconBgColor: 'rgba(123, 20, 227, 0.1)'
    },
    {
      icon: IMAGES.FEATURE_RATING,
      title: 'Rating System',
      description: 'Build your reputation as a trusted buyer or seller through our community rating system.',
      iconBgColor: 'rgba(233, 0, 167, 0.1)'
    }
  ];

  return (
    <section className="section features-section">
      <div className="container">
        <motion.div 
          className="features-header text-center mb-lg"
          {...animationPresets.section}
        >
          <h2 className="heading-2 mb-sm">Everything You Need in One Marketplace</h2>
          <p className="body-text text-opacity-80 max-w-768 mx-auto">
            Sellam combines the best features of Nigerian marketplaces with modern security and community features.
          </p>
        </motion.div>
        <motion.div 
          className="features-grid"
          {...animationPresets.staggerContainer}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgColor={feature.iconBgColor}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 