"use client";
import React from "react";
import { GotQuestionData } from "./contactData";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";
const GotQuestion = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-14 px-4"
    >
      {GotQuestionData.map((data, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", "spring", 0.05 * index, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <motion.h1
            variants={textVariant(0.2)}
            className="mb-3 font-semibold text-center md:text-5xl text-3xl"
          >
            {data.heading}
          </motion.h1>
          <motion.p variants={textVariant(0.3)} className="text-center text-lg mb-5">
            {data.paragraph}
            <Link
              className="text-[#007bff]"
              target="_blank"
              href={`tel:+91${data.number}`}
            >
              {" "}
              {data.number}{" "}
            </Link>{" "}
          </motion.p>
          <motion.span variants={textVariant(0.4)} className="text-lg">{data.desc}</motion.span>
          <br />
          <br />
          <motion.div variants={textVariant(0.5)} className="">
          <center className="text-lg">{data.solution}</center>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GotQuestion;
