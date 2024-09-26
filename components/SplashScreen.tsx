"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#4B0082] z-50">
      <motion.svg
        width="200"
        height="50"
        viewBox="0 0 200 50"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M10,25 L50,25 M60,10 L60,40 M70,25 L110,25 M120,10 L120,40 M130,25 L170,25 M180,10 L180,40"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: { type: "spring", duration: 1.5, bounce: 0 },
                opacity: { duration: 0.01 }
              }
            }
          }}
        />
      </motion.svg>
    </div>
  );
};

export default SplashScreen;
