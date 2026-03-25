import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Compass, Ruler, Key } from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {
  const cards = [
    {
      title: "Planning & Approvals",
      subtitle: "Blueprint of your vision.",
      icon: <Compass size={32} />,
      list: ["Floor Plans", "Elevations", "2D & 3D Design", "Legal Approvals"],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "The Core Build",
      subtitle: "The silent strength of your home.",
      icon: <Ruler size={32} />,
      list: ["Engineering", "Electrical", "Plumbing", "Structure"],
      image: "https://images.unsplash.com/photo-1632885936573-cf65e9a9fe92?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Interior Architecture",
      subtitle: "Where luxury meets lifestyle.",
      icon: <PenTool size={32} />,
      list: ["Modular Interiors", "Custom Woodwork", "False Ceilings", "Lighting"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "The Finishing Touch",
      subtitle: "Flawless delivery.",
      icon: <Key size={32} />,
      list: ["Premium Painting", "Elite Granite & Tiles", "Final Handover"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.header}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Precision in Every Phase.
        </motion.h2>
        <motion.p
          className={styles.sectionSub}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our comprehensive architectural arsenal.
        </motion.p>
      </div>

      <div className={styles.bentoGrid}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <div className={styles.cardImage} style={{ backgroundImage: `url(${card.image})` }}>
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>{card.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardSubtitle}>{card.subtitle}</p>
                </div>
              </div>
              <ul className={styles.list}>
                {card.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
