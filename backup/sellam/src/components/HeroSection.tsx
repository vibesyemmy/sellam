import React from 'react';
import { IMAGES } from '../constants/images';
import UserAvatars from './UserAvatars';
import DownloadButtons from './DownloadButtons';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">Buy, Sell & Bid for Items You Love</h1>
            <p className="description">
              A secure, community-driven marketplace to sell your unused items, buy at great prices, or request specific products via bidding or direct purchase.
            </p>
            <div className="social-proof flex items-center gap-md">
              <UserAvatars />
              <span className="social-proof-text text-secondary">
                <strong className="text-primary">10,000+</strong> Nigerians trust Sellam
              </span>
            </div>
            <DownloadButtons />
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img 
          src={IMAGES.HERO_IMAGE}
          alt="Nigerian phone seller packaging an iPhone for a customer"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroSection; 