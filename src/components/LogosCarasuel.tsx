"use client";

// component.jsx
import React, { useEffect } from "react";
import Swiper from "swiper";
import clientsData from "./mockApi";
import Image from "next/image";
// import { Marquee } from './layout/Morque';
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { motion } from "framer-motion";
import { textVariant } from "@/app/utils/motion";
// import Marquee2 from './layout/Morque';

const ClientCarousel = () => {
  return (
    <div className="swiper-container relative min-h-screen pt-16">
      <div className="text-center ">
        <motion.h1
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView={"show"}
          className=" md:text-6xl sm:text-5xl text-4xl leading-[80px] lg:text-7xl font-mediu md:pb-3 sm:pb-2 pb-1 lg:pb-4"
        >
          All our <br />
          major clients{" "}
        </motion.h1>
        <motion.p
          variants={textVariant(0.4)}
          initial="hidden"
          whileInView={"show"}
        >
          Let&apos;s redefine your digital destiny.Break the Mold, dominate the
          market.
          <br />
          Turning clicks into loyal fans.
        </motion.p>
      </div>
      <Marquee
        fade={true}
        direction="left"
        reverse={false}
        pauseOnHover={true}
        className="my-custom-marquee" // Add your custom class to change speed
        innerClassName="my-custom-content" // Add your custom class to change speed
        numberOfCopies={3}
      >
        {clientsData.map((client, ind) => (
          <div
            key={ind}
            className="max-h-[200px] place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
          >
            <Image
              src={client.url}
              width={200}
              height={200}
              alt="client"
              className="py-12 px-2 w-full  h-[200px] object-cover  rounded-[0.5rem] aspect-[16/9] "
            />
          </div>
        ))}
      </Marquee>
      <Marquee
        fade={true}
        direction="left"
        reverse={true}
        pauseOnHover={true}
        className="my-custom-marquee  "
        innerClassName="my-custom-content2 "
      >
        {clientsData.map((client, ind) => (
          <div
            key={ind}
            className="max-h-[200px]   w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]  items-center justify-center flex"
          >
            <Image
              src={client.url}
              width={200}
              height={200}
              alt="client"
              className="py-12 px-2 w-full object-cover h-[200px] "
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientCarousel;
