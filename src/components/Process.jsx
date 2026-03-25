import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import styles from './Process.module.css';

const Process = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const steps = [
    { title: 'Consultation', short: 'Aligning with your vision.', desc: 'We start by understanding your lifestyle, preferences, and practical needs. Every great structure begins with a conversation.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Planning', short: 'Precision and budgeting.', desc: 'Mathematical precision meets creative vision. We draft comprehensive plans and set realistic, transparent budgets.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Design', short: '3D visualizations.', desc: 'Before a single brick is laid, you will walk through your future home in stunning 4K photorealistic 3D rendering.', image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Approval', short: 'Securing clearances.', desc: 'We handle the bureaucracy. All legal, structural, and RUDA clearances are secured smoothly and professionally.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Execution', short: 'Master craftsmen.', desc: 'Premium materials meet master builders. Our site engineers ensure the blueprint is executed flawlessly.', image: 'https://unsplash.com/photos/room-under-renovation-with-tools-and-furniture-pmVHjCWmGnw' },
    { title: 'Handover', short: 'Welcome home.', desc: 'The final walkthrough. We hand over the keys to a space that is impeccably finished, clean, and ready for life.', image: 'https://unsplash.com/photos/a-living-room-with-a-couch-a-table-and-chairs-E_J7HhGttHM' }
  ];

  return (
    <section className={styles.processSection} id="process">
      <div className={styles.container}>
        <div className={styles.leftPane}>
          <h2 className={styles.sectionTitle}>Six stages of flawless execution.</h2>
          <div className={styles.accordionList}>
            {steps.map((step, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div className={styles.itemHeader}>
                    <div className={styles.iconWrapper}>
                      <Plus size={20} className={`${styles.icon} ${isActive ? styles.iconActive : ''}`} />
                    </div>
                    <span className={styles.itemTitle}>{step.title}</span>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={styles.itemDetails}
                      >
                        <div className={styles.itemDescWrapper}>
                          <p className={styles.itemDesc}>
                            <strong>{step.short}</strong> {step.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.rightPane}>
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIdx}
              src={steps[activeIdx].image}
              alt={steps[activeIdx].title}
              className={styles.displayImage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Process;
