import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import styles from './Process.module.css';

const Process = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const steps = [
    { title: 'Consultation', short: 'Aligning with your vision.', desc: 'We start by understanding your lifestyle, preferences, and practical needs. Every great structure begins with a conversation.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Planning', short: 'Precision and budgeting.', desc: 'Mathematical precision meets creative vision. We draft comprehensive plans and set realistic, transparent budgets.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Design', short: '3D visualizations.', desc: 'Before a single brick is laid, you will walk through your future home in stunning 4K photorealistic 3D rendering.', image: 'https://images.unsplash.com/photo-1669736659471-b91f9bb70940?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Approval', short: 'Securing clearances.', desc: 'We handle the bureaucracy. All legal, structural, and RUDA clearances are secured smoothly and professionally.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Execution', short: 'Master craftsmen.', desc: 'Premium materials meet master builders. Our site engineers ensure the blueprint is executed flawlessly.', image: 'https://images.unsplash.com/photo-1547609434-b732edfee020?q=80&w=1688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Handover', short: 'Welcome home.', desc: 'The final walkthrough. We hand over the keys to a space that is impeccably finished, clean, and ready for life.', image: 'https://images.unsplash.com/photo-1664711942326-2c3351e215e6?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
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
