"use client"
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";

const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Portfolio = () => {
  return (
    <div>
      <motion.div
        variants={fadeIn("left", "spring", 2 * 0.5, 0.75)}
        initial="hidden"
        animate="show"
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
      >
        <p className="text-black font-black text-[48px]">&quot;</p>

        <div className="mt-1">
          <p className="text-black tracking-wider text-[18px]">asdf</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
