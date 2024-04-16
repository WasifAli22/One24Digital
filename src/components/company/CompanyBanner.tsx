import React from "react";
import { motion } from "framer-motion";

const CompanyBanner = ({ background, text }: any) => {
  // Check if background color is provided
  const hasColor = background && background.color;

  // Check if background image is provided
  const hasImage = background && background.image;

  // Dynamic styles based on provided background
  const dynamicStyles = {
    backgroundImage: hasImage ? `url(${background.image})` : "none",
    backgroundColor: hasColor ? background.color : "transparent",
  };
  const charVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div
      className="min-h-screen h-screen w-[100%] bg-cover bg-center"
      style={dynamicStyles}
    >
      {/* Content */}
      <div className="flex items-center justify-center m-auto text-center">
        <motion.h1 className="xl:text-8xl  sm:text-6xl text-5xl lg:text-7xl lg:text-center md:pt-24 pt-2 font-extrabold text-white">
          {text?.split("\n").map((line: any, index: any) => (
            <motion.div
              variants={charVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index}
            >
              {line}
              {index !== text?.split("\n").length - 1 && <br />}
            </motion.div>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

export default CompanyBanner;
