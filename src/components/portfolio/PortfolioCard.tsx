"use client";
import Link from "next/link";
import React from "react";
import { PortfolioData } from "..";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";
const PortfolioCard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-12"
    >
      {PortfolioData.map((project, index) => (
        <motion.div
          key={project.id}
          variants={fadeIn("up", "spring", 0.07 * index, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="relative lg:col-span-6 col-span-12 overflow-hidden"
        >
          <Link
            href={`/portfolio/${encodeURIComponent(
              project.title.toLowerCase().replace(/\s+/g, "-")
            )}`}
          >
            <div
              className="services_bg_image min-h-[300px] lg:min-h-[500px] w-full bg-no-repeat bg-center bg-cover hover:cursor-pointer hover:scale-125 transition-all duration-700"
              style={{ backgroundImage: `url('${project.src}')` }}
            >
              <div className="flex flex-col items-center h-[100%] justify-center text-white absolute left-0 right-0">
                <motion.p
                  variants={textVariant(0.3)}
                  className="text-lg mb-10 text-white service_desc relative"
                >
                  {project.description}
                </motion.p>
                <motion.h3
                  variants={textVariant(0.4)}
                  className="text-4xl text-center font-bold"
                >
                  {project.title}
                </motion.h3>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default PortfolioCard;
