import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.backgrounds}>
        <div 
          className={styles.bgImage} 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80')" }}
        >
          <div className={styles.overlay}></div>
        </div>
      </div>
      
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLeft}>
          <motion.h3 
            className={styles.brandLabel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nandina Associates
          </motion.h3>

          <motion.p 
            className={styles.serviceCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Home Interiors & Architectural Constructions
          </motion.p>
          
          <motion.h1 
            className={styles.mainTagline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Elevate your dreams<br/>into reality.
          </motion.h1>

          <motion.p 
            className={styles.introDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            From intelligent planning to elegant execution, we create modern spaces with trust, quality, and personalized design at every step.
          </motion.p>
        </div>

        <motion.div 
          className={styles.bottomRightCTA}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <div className={styles.ctaTextContainer}>
            <span className={styles.ctaPrice}>From Budget to Premium</span>
            <span className={styles.ctaSub}>End-to-End Execution</span>
          </div>
          <a href="https://wa.me/918688041085" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Book Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
