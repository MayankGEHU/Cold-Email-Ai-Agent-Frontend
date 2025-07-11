import React from 'react';
import './DetailsRight.css';
import { motion } from 'framer-motion';

const DetailsRight = () => {
  return (
    <div className="detailsright-wrapper">
      <motion.p
        className="detailsright-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Just drop in a job description or target profile, and let the AI handle the rest — tone, structure, and persuasion optimized.
      </motion.p>
    </div>
  );
};

export default DetailsRight;
