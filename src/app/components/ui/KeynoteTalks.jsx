import React from 'react';
import { motion } from 'framer-motion';

function KeynoteTalks() {
  const headings = [
    { text: "CONVERSIONS", extraClasses: "justify-start" },
    { text: "THROUGH", extraClasses: "justify-center" },
    { text: "SMART", extraClasses: "justify-start" },
    { text: "OUTREACH", extraClasses: "justify-end" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="
        flex items-center justify-center bg-transparent
        px-4 py-8
        min-h-[50vh]
        sm:min-h-[60vh]
        md:min-h-[80vh]
        lg:min-h-screen
      "
    >
      <motion.div
        className="flex flex-col w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {headings.map((heading) => (
          <motion.div
            key={heading.text}
            className={`flex ${heading.extraClasses}`}
            variants={childVariants}
            transition={{ duration: 0.8 }}
          >
            <h1
              className={`
                font-sans font-black text-gray-300
                text-4xl
                sm:text-6xl
                md:text-8xl
                lg:text-[8rem]
                xl:text-[10rem]
                leading-tight
                uppercase
              `}
            >
              {heading.text}
            </h1>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default KeynoteTalks;
