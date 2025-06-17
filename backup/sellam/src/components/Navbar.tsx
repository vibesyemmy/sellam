import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants/images';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar-container">
      <div className="container">
        <div className="navbar-content">
          <div className="logo-container">
            <a href="/" className="logo">
              <div className="logo-icon">
                <img src={IMAGES.LOGO} alt="Sellam Logo" />
              </div>
              <h1 className="logo-text">Sellam</h1>
            </a>
          </div>
          
          <nav className="nav-links gap-lg">
            <a href="#" className="nav-link">Features</a>
            <a href="#" className="nav-link">How It Works</a>
            <a href="#" className="nav-link">Testimonials</a>
            <a href="#" className="nav-link">Download</a>
          </nav>
          
          <div className="right-section">
            <div className="auth-buttons flex gap-md">
              <button className="btn btn-secondary">Log in</button>
              <button className="btn btn-primary">Sign up</button>
            </div>
            
            <button 
              className="hamburger-button" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
            >
              <span className={isMenuOpen ? 'open' : ''}></span>
              <span className={isMenuOpen ? 'open' : ''}></span>
              <span className={isMenuOpen ? 'open' : ''}></span>
            </button>
          </div>
        </div>
        
        <div 
          className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
        
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <h3>Menu</h3>
            <button 
              className="close-button" 
              onClick={toggleMenu} 
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <nav className="mobile-nav-links">
            <a href="#" className="mobile-nav-link">Features</a>
            <a href="#" className="mobile-nav-link">How It Works</a>
            <a href="#" className="mobile-nav-link">Testimonials</a>
            <a href="#" className="mobile-nav-link">Download</a>
          </nav>
          <div className="mobile-auth-buttons">
            <button className="btn btn-secondary">Log in</button>
            <button className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 