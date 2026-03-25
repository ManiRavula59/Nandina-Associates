import React from 'react';
import { motion } from 'framer-motion';
import styles from './Philosophy.module.css';

const Philosophy = () => {
  return (
    <section className={styles.philosophySection}>
      <motion.div 
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
        }}
      >
        <p className={styles.text}>
          We don't just build houses. <br/>
          <span className={styles.highlight}>We build the backdrop of your life.</span>
        </p>
        <p className={styles.subtext}>
          Uncompromising quality, seamless execution, and absolute trust—no matter the scale of your vision.
        </p>
      </motion.div>
    </section>
  );
};

export default Philosophy;
