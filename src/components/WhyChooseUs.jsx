import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Ruler, Gem, Target, Activity } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const points = [
    { title: "End-to-End Mastery", desc: "One dedicated team from the first sketch to the final key.", icon: <Target size={32} /> },
    { title: "Scalable Vision", desc: "World-class design tailored to fit any budget.", icon: <Ruler size={32} /> },
    { title: "Uncompromising Materials", desc: "We source only the proven best.", icon: <Gem size={32} /> },
    { title: "Absolute Transparency", desc: "Clear timelines. Honest pricing. Zero surprises.", icon: <ShieldCheck size={32} /> },
    { title: "Form Meets Function", desc: "Spaces designed to be lived in, not just looked at.", icon: <Activity size={32} /> }
  ];

  return (
    <section className={styles.whySection} id="why-we">
      <div className={styles.header}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why We Lead.
        </motion.h2>
      </div>

      <div className={styles.scrollTrack}>
        <div className={styles.scrollContainer}>
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className={styles.icon}>{point.icon}</div>
              <h3 className={styles.cardTitle}>{point.title}</h3>
              <p className={styles.cardDesc}>{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
