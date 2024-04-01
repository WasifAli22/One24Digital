"use client"
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const blinkerChars = ['#', '$', '@', '|'];

export const RotatingBlinker: React.FC = () => {
  const [currentChar, setCurrentChar] = useState(blinkerChars[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (blinkerChars.indexOf(currentChar) + 1) % blinkerChars.length;
      setCurrentChar(blinkerChars[nextIndex]);
    }, 500);
    return () => clearInterval(interval);
  }, [currentChar]);

  return (
    <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, loop: Infinity }}>
      {currentChar}
    </motion.span>
  );
};
