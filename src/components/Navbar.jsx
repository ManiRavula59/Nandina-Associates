import React from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          Nandina Associates
        </a>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#why-we">Why We</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};
export default Navbar;
