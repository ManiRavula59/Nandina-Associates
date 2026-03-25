import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact-us">
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className={styles.title}>Ready to build your legacy?</h2>
        <p className={styles.subtitle}>Let’s sketch the future of your lifestyle today.</p>
        
        <div className={styles.contactPanel}>
          <div className={styles.personInfo}>
            <span className={styles.name}>Bhaskar Nandina</span>
            <span className={styles.role}>Design Engineer</span>
          </div>
          
          <div className={styles.links}>
            <a href="tel:+918688041085" className={styles.link}>
              <Phone size={18} /> +91 8688041085
            </a>
            <a href="mailto:nandinaassociates01@gmail.com" className={styles.link}>
              <Mail size={18} /> nandinaassociates01@gmail.com
            </a>
          </div>
        </div>

        <motion.a 
          href="https://wa.me/918688041085"
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Free Site Visit
        </motion.a>
      </motion.div>

      <motion.div 
        className={styles.hugeTextWrapper}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className={styles.hugeText}>YOU DREAM, WE EXECUTE</h1>
      </motion.div>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Nandina Associates. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
