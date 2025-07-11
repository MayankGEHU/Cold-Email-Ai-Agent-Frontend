import React from 'react';
import './Details.css';
import { motion } from 'framer-motion';

const Details = () => {
  return (
    <div className="details-wrapper">
      <motion.p
        className="details-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Cold Email Genius is your smart AI-powered assistant that crafts personalized, high-converting cold emails in seconds.
      </motion.p>
    </div>
  );
};

export default Details;
