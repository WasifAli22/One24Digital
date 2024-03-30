"use client"
import React, { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '@/app/utils/motion';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setVisibleText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust typing speed here (in milliseconds)

    return () => clearInterval(interval);
  }, [text, index]);

  return (
    <motion.div className="flex items-center justify-center m-auto text-center">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:text-[145px] text-5xl lg:text-left py-24 font-extrabold text-white"
      >
        {visibleText}
      </motion.h1>
    </motion.div>
  );
};

const TrendBanner: React.FC = () => {
  return (
    <motion.div 
     variants={textVariant(0.5)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: true, amount: 0.25 }}
     className="min-h-screen text-center h-screen w-full bg-cover" style={{ backgroundImage: `url('/trendBannerbg.png')` }}>
      {/* Content */}
      <AnimatedText text="We don't follow. We set trends." />
    </motion.div>
  );
};

export default TrendBanner;






