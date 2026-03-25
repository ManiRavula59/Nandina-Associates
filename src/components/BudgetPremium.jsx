import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './BudgetPremium.module.css';
import { ArrowLeftRight } from 'lucide-react';

const BudgetPremium = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleDrag = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = e.clientX || (e.touches && e.touches[0].clientX);
    if (!x) return;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section className={styles.section} id="expertise">
      <div className={styles.headerContainer}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Architectural Excellence.<br />Unbound by Scale.
        </motion.h2>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Whether maximizing a smart budget or indulging in sweeping luxury, our commitment to flawless execution is identical. Drag to see the transformation.
        </motion.p>
      </div>

      <div className={styles.sliderWrapper}>
        <div
          className={styles.imageContainer}
          ref={containerRef}
          onMouseMove={handleDrag}
          onTouchMove={handleDrag}
        >
          {/* Before Image: Concept/Budget */}
          <div
            className={`${styles.image} ${styles.beforeImage}`}
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcHR5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D')" }}
          >
            <span className={styles.imageLabel}>Before</span>
          </div>

          {/* After Image: Premium Execution */}
          <div
            className={`${styles.image} ${styles.afterImage}`}
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600')",
              clipPath: `inset(0 0 0 ${sliderPosition}%)`
            }}
          >
            <span className={styles.imageLabelAfter}>After</span>
          </div>

          {/* Slider Handle */}
          <div
            className={styles.sliderHandle}
            style={{ left: `${sliderPosition}%` }}
          >
            <div className={styles.sliderLine}></div>
            <div className={styles.sliderButton}>
              <ArrowLeftRight size={20} color="#000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetPremium;
