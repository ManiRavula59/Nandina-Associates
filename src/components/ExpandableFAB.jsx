import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const InstaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
import styles from './ExpandableFAB.module.css';

const ExpandableFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const actions = [
    { icon: <Phone size={20} />, label: 'Call Us', href: 'tel:+918688041085', color: '#3b82f6' },
    { icon: <Mail size={20} />, label: 'Email', href: 'mailto:nandinaassociates01@gmail.com', color: '#ef4444' },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp', href: 'https://wa.me/918688041085', color: '#25D366' },
    { icon: <InstaIcon />, label: 'Instagram', href: 'https://www.instagram.com/sk_design_curve?utm_source=qr&igsh=eHhvMmlsdGVxMnF4', color: '#E1306C' },
  ];

  return (
    <div className={styles.fabContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.fabMenu}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
              hidden: { opacity: 0, y: 20, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
            }}
          >
            {actions.map((action, index) => (
              <motion.a
                key={index}
                href={action.href}
                target={action.href.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={styles.fabItem}
                variants={{
                  visible: { opacity: 1, scale: 1, y: 0 },
                  hidden: { opacity: 0, scale: 0.8, y: 15 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ '--hover-color': action.color }}
              >
                <div className={styles.label}>{action.label}</div>
                <div className={styles.iconWrapper}>{action.icon}</div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`${styles.fabToggle} ${isOpen ? styles.open : ''}`}
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <MessageCircle size={28} />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ExpandableFAB;
