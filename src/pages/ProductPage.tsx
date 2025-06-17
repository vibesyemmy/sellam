import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SafeTradingFeatures from '../components/SafeTradingFeatures';
import HowItWorks from '../components/HowItWorks';
import TestimonialSection from '../components/TestimonialSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const ProductPage: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <SafeTradingFeatures />
        <TestimonialSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage; 