import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', '2D Plans', '3D Designs', 'Interiors', 'Site Photos'];

  const projects = [
    { category: '3D Designs', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
    { category: 'Interiors', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
    { category: '2D Plans', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
    { category: 'Site Photos', image: 'https://images.unsplash.com/photo-1686358244570-631340cbbd22?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3RydXRpb24lMjBzaXRlJTIwZGVzaWduaW5nfGVufDB8fDB8fHww' },
    { category: '3D Designs', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
    { category: 'Interiors', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
    { category: 'Interiors', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' },
    { category: 'Site Photos', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800' },
    { category: '2D Plans', image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=800' },
    { category: '3D Designs', image: 'https://images.unsplash.com/photo-1645109176591-bc977c1aa35c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDNkJTIwZGVzaWducyUyMGludGVyaW9yfGVufDB8fDB8fHww' },
    { category: 'Site Photos', image: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=800' },
    { category: 'Interiors', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800' }
  ];

  const filtered = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.header}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Work Speaks.
        </motion.h2>

        <motion.div
          className={styles.tabs}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {tabs.map(tab => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className={styles.gallery}>
        <AnimatePresence>
          {filtered.map((item, idx) => (
            <motion.div
              layout
              key={item.image + activeTab}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={styles.galleryItem}
            >
              <div className={styles.imageOverlay}></div>
              <img src={item.image} alt={item.category} className={styles.image} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
