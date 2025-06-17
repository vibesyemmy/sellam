import React from 'react';
import { motion } from 'framer-motion';
import '../styles/TestimonialSection.css';
import { animationPresets, fadeInUpVariants } from '../utils/animations';
import { hoverVariants } from '../utils/animationHelpers';

const TestimonialSection: React.FC = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <motion.div 
          className="testimonial-header"
          {...animationPresets.section}
        >
          <h2 className="heading-2 text-brand mb-sm">What Our Users Say</h2>
          <p>Join thousands of satisfied buyers and sellers on Nigeria's trusted marketplace</p>
        </motion.div>
        
        <motion.div 
          className="testimonials-grid"
          {...animationPresets.staggerContainer}
        >
          <motion.div 
            className="testimonial-card"
            variants={fadeInUpVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.div 
              className="testimonial-rating"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              ★★★★★
            </motion.div>
            <p className="testimonial-text">"Sellam has transformed how I trade online. The security features give me peace of mind with every transaction."</p>
            <div className="testimonial-author">
              <motion.div 
                className="author-avatar"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img src="/images/user1.png" alt="User" />
              </motion.div>
              <div className="author-info">
                <h4>Sarah Johnson</h4>
                <p>Regular User</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="testimonial-card"
            variants={fadeInUpVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.div 
              className="testimonial-rating"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              ★★★★★
            </motion.div>
            <p className="testimonial-text">"The escrow service is fantastic! I've completed over 50 transactions without a single issue."</p>
            <div className="testimonial-author">
              <motion.div 
                className="author-avatar"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img src="/images/user1.png" alt="User" />
              </motion.div>
              <div className="author-info">
                <h4>Michael Chen</h4>
                <p>Power Seller</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="testimonial-card"
            variants={fadeInUpVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.div 
              className="testimonial-rating"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              ★★★★★
            </motion.div>
            <p className="testimonial-text">"Customer support is responsive and helpful. They resolved my issue within minutes!"</p>
            <div className="testimonial-author">
              <motion.div 
                className="author-avatar"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img src="/images/user1.png" alt="User" />
              </motion.div>
              <div className="author-info">
                <h4>Olivia Martinez</h4>
                <p>New User</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection; 