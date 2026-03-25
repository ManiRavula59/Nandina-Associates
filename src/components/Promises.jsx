import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Gem, CheckCircle, Droplet } from 'lucide-react';
import styles from './Promises.module.css';

const Promises = () => {
  const items = [
    { icon: <ShieldCheck size={40} strokeWidth={1} />, text: "10-Year Warranty" },
    { icon: <Truck size={40} strokeWidth={1} />, text: "On-Time Delivery" },
    { icon: <Gem size={40} strokeWidth={1} />, text: "Finest Quality Material" },
    { icon: <CheckCircle size={40} strokeWidth={1} />, text: "Zero-Error Execution" },
    { icon: <Droplet size={40} strokeWidth={1} />, text: "Moisture-Resistant" }
  ];

  return (
    <section className={styles.promisesSection}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        <motion.h3 
           className={styles.title}
           variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Our Promise of Delight
        </motion.h3>

        <div className={styles.grid}>
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              className={styles.item}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <p className={styles.text}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Promises;
