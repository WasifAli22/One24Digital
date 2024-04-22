"use client";

// component.jsx
import React from "react";
import Image from "next/image";
// import { Marquee } from './layout/Morque';
import "@devnomic/marquee/dist/index.css";
import { motion } from "framer-motion";
import { textVariant } from "@/app/utils/motion";
import MorqueLogos from "./MorqueLogos";
import { Fragment } from "react";
export interface Client {
  url: string;
  alt: string;
}
export interface MorqueData {
  title: string;
  description: string;
  clientsData: Client[];
}

interface Props {
  morqueData: MorqueData;
}

const ClientCarousel : React.FC<Props> = ({ morqueData }) => { 
  console.log("🚀 ~ morqueData:", morqueData)
  return (
    <div className="swiper-container relative min-h-screen bg-one-digital-light pt-16">
      <div className="text-center mx-auto w-full flex flex-col justify-between ">
        <div className="flex  flex-col">
          <motion.h1
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView={"show"}
            className=" md:text-6xl sm:text-5xl text-4xl font-semibold leading-[80px] lg:text-7xl font-mediu md:pb-3 sm:pb-2 pb-1 lg:pb-4"
          >
            {morqueData?.title.split("\n").map((line, index) => (
              <Fragment key={index}>
                {line}
                {index !== morqueData?.title.split("\n").length - 1 && <br />}
              </Fragment>
            ))}
          </motion.h1>
          <motion.p
            variants={textVariant(0.4)}
            initial="hidden"
            whileInView={"show"}
          >
            {morqueData?.description.split("\n").map((line, index) => (
              <Fragment key={index}>
                {line}
                {index !== morqueData?.description.split("\n").length - 1 && (
                  <br />
                )}
              </Fragment>
            ))}
          </motion.p>
        </div>
        {/* box show at the end of screen */}
        <div className="">
          <MorqueLogos morqueData={morqueData?.clientsData} />
        </div>
      </div>
    </div>
  );
};
export default ClientCarousel;

