"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/app/utils/motion";
// import { trendsData } from "./dummydata";
import { TrendsBanner } from "@/app/lib/types";

interface AnimatedTextProps {
  text: string;
}

interface Props {
  trendsData: TrendsBanner;
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
    <motion.div className="flex items-center  mx-auto justify-center mb-0 m-auto text-center">
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

const TrendBanner: React.FC<Props> = ({ trendsData }) => {
  // console.log("🚀 ~ trendsData:", trendsData)
  return (
    <motion.div
      variants={textVariant(0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.25 }}
      className="min-h-screen bg-fixed flex flex-col items-center mx-auto text-center w-full bg-cover"
      style={{ backgroundImage: `url('${trendsData?.bgImg}')` }}
    >
      <>
        <AnimatedText text={trendsData?.animatedText} />
      </>
      {/* Content */}
      <div className="flex pt-[30px] items-center justify-center mt-10 m-auto text-center">
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView={"show"}
          //  viewport={{ once: true, amount: 0.25 }}

          className="lg:text-[110px] text-3xl lg:text-center  px-5 font-extrabold text-white"
        >
          <span className="">{trendsData?.heading}</span>
        </motion.h1>
      </div>
      
    </motion.div>
  );
};

export default TrendBanner;
