"use client";
import Link from "next/link";
import React from "react";
import { CompanyData } from "..";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";
import Image from "next/image";
const CompanyCard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-12"
    >
      {CompanyData.map((project, index) => (
        <motion.div
          key={project.id}
          variants={fadeIn("up", "spring", 0.07 * index, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="relative lg:col-span-6 col-span-12 overflow-hidden"
        >
          <Link
            href={`/company/${encodeURIComponent(
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
                  className="text-lg mb-10 text-white  relative"
                >
                  {project.description}
                </motion.p>
                {project?.img ? (
                  <div className="pb-2 h-28 w-28 object-scale-down	 overflow-hidden ">
                    <div className="h-full w-full object-scale-down	 overflow-hidden">
                      <Image
                        src={project?.img.url}
                        alt={project?.img.alt}
                        className=" object-scale-down	"
                        height={200}
                        width={200}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="border-b-2 w-24 border-white mb-4"></span>{" "}
                    {/* Insert line */}
                  </>
                )}
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
export default CompanyCard;
