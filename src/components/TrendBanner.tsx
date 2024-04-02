"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/app/utils/motion";

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [visibleText, setVisibleText] = useState("");
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
    <motion.div className="flex items-center  mx-auto justify-center m-auto text-center">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:text-[145px] text-5xl  lg:text-center  px-5 font-extrabold text-white"
      >
        {visibleText}
      </motion.h2>
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
      className="min-h-screen flex flex-col items-center mx-auto text-center h-screen w-full bg-cover"
      style={{ backgroundImage: `url('/trendBannerbg.png')` }}
    >
      {/* Content */}
      <div className="flex pt-[30px] items-center justify-center m-auto text-center">
        <motion.h1 
         variants={textVariant(0.3)}
         initial="hidden"
         whileInView={"show"}
        //  viewport={{ once: true, amount: 0.25 }}

         className="lg:text-[110px]  text-3xl lg:text-center  px-5 font-extrabold text-white">
          <span className="">We don&apos;t follow.</span>
        </motion.h1>
      </div>
      <AnimatedText text="We set trends." />
    </motion.div>
  );
};

export default TrendBanner;
