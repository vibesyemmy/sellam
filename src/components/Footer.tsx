import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';
import { animationPresets, fadeInUpVariants } from '../utils/animations';

const Footer: React.FC = () => {
  const socialIconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { scale: 0.9 }
  };

  const linkVariants = {
    initial: { color: "#666", x: 0 },
    hover: { 
      color: "#FF6600",
      x: 5,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          {...animationPresets.staggerContainer}
        >
          <motion.div 
            className="footer-brand"
            variants={fadeInUpVariants}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Sellam
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Nigeria's trusted marketplace for buying and selling unused items. Secure, verified, and community-driven.
            </motion.p>
            <motion.div 
              className="social-icons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.a 
                href="#" 
                aria-label="Instagram"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="Twitter"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="Facebook"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fab fa-facebook-f"></i>
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="YouTube"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fab fa-youtube"></i>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            variants={fadeInUpVariants}
          >
            <motion.div 
              className="footer-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Company</h3>
              <ul>
                <li>
                  <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    About Us
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Careers
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Blog
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Press
                  </motion.a>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="footer-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Support</h3>
              <ul>
                <li>
                  <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Help Center
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Safety Center
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Community Guidelines
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Contact Us
                  </motion.a>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="footer-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3>Legal</h3>
              <ul>
                <li>
                  <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Terms of Service
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Privacy Policy
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Cookie Policy
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Accessibility
                  </motion.a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>© 2025 Sellam. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 