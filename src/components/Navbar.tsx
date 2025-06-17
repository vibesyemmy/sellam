import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { IMAGES } from '../constants/images';
import { hoverVariants } from '../utils/animationHelpers';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effects for navbar background
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });
  
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

  // Navbar animation variants
  const navbarVariants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(0px)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { scale: 0.95 }
  };

  const navLinkVariants = {
    initial: { 
      color: "#333",
      y: 0
    },
    hover: { 
      color: "#FF6600",
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    open: {
      x: "0%",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <motion.header 
      className="navbar-container"
      variants={navbarVariants}
      animate={isScrolled ? "scrolled" : "top"}
      style={{ 
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}
    >
      <div className="container">
        <div className="navbar-content">
          <div className="logo-container">
            <motion.a 
              href="/" 
              className="logo"
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <div className="logo-icon">
                <img src={IMAGES.LOGO} alt="Sellam Logo" />
              </div>
            </motion.a>
          </div>
          
          <nav className="nav-links gap-lg">
            <motion.a 
              href="#" 
              className="nav-link"
              variants={navLinkVariants}
              initial="initial"
              whileHover="hover"
            >
              Features
            </motion.a>
            <motion.a 
              href="#" 
              className="nav-link"
              variants={navLinkVariants}
              initial="initial"
              whileHover="hover"
            >
              How It Works
            </motion.a>
            <motion.a 
              href="#" 
              className="nav-link"
              variants={navLinkVariants}
              initial="initial"
              whileHover="hover"
            >
              Testimonials
            </motion.a>
            <motion.a 
              href="#" 
              className="nav-link"
              variants={navLinkVariants}
              initial="initial"
              whileHover="hover"
            >
              Download
            </motion.a>
          </nav>
          
          <div className="right-section">
            <div className="auth-buttons flex gap-md">
              <motion.button 
                className="btn btn-secondary"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#f8f9fa",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Log in
              </motion.button>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(255, 102, 0, 0.3)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Sign up
              </motion.button>
            </div>
            
            <motion.button 
              className="hamburger-button" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span 
                className={isMenuOpen ? 'open' : ''}
                animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span 
                className={isMenuOpen ? 'open' : ''}
                animate={isMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
              <motion.span 
                className={isMenuOpen ? 'open' : ''}
                animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.button>
          </div>
        </div>
        
        <motion.div 
          className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={isMenuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
        />
        
        <motion.div 
          className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          <nav className="mobile-nav-links">
            <motion.a 
              href="#" 
              className="mobile-nav-link"
              variants={mobileMenuItemVariants}
              whileHover={{ x: 10, color: "#FF6600" }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#" 
              className="mobile-nav-link"
              variants={mobileMenuItemVariants}
              whileHover={{ x: 10, color: "#FF6600" }}
            >
              How It Works
            </motion.a>
            <motion.a 
              href="#" 
              className="mobile-nav-link"
              variants={mobileMenuItemVariants}
              whileHover={{ x: 10, color: "#FF6600" }}
            >
              Testimonials
            </motion.a>
            <motion.a 
              href="#" 
              className="mobile-nav-link"
              variants={mobileMenuItemVariants}
              whileHover={{ x: 10, color: "#FF6600" }}
            >
              Download
            </motion.a>
          </nav>
          <motion.div 
            className="mobile-auth-buttons"
            variants={mobileMenuItemVariants}
          >
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Log in
            </motion.button>
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign up
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar; 