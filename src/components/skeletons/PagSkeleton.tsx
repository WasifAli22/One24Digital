"use client";
// SkeletonLoader.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";

const SkeletonService = () => {
  return (
    <div className="flex  flex-col">
      <div className="py-4 min-h-[400px] m-2 bg-gray-400 animate-pulse delay-150 duration-20">
      <Skeleton
        height={500}
        width={500}
        className="  0 object-cover"
      />
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-12 border-2 border-white"
      >
        {[1, 2].map((index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", 0.07 * index, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="relative lg:col-span-6 col-span-12 overflow-hidden"
          >
            <div className="services_bg_image min-h-[300px] lg:min-h-[500px] w-full bg-no-repeat bg-center bg-cover">
              <div className="flex flex-col items-center h-[100%] justify-center text-white absolute left-0 right-0">
                <motion.p
                  variants={textVariant(0.3)}
                  className="text-lg mb-10 text-white service_desc relative"
                >
                  <Skeleton />
                </motion.p>
                <motion.h3
                  variants={textVariant(0.4)}
                  className="text-4xl text-center font-bold"
                >
                  <Skeleton />
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* <ServceSkeleton /> */}
    </div>
  );
};
export default SkeletonService;
