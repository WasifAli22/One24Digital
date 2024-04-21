"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination } from 'swiper';
// import { ContactSliderData } from "./contactData";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { textVariant } from "@/app/utils/motion";
import { Marquee } from "@devnomic/marquee";
import {  ContactSliderData } from "@/app/lib/types";

// SwiperCore.use([Pagination]);
interface Props {
  contactSliderData: ContactSliderData;
}

const ContactSlider : React.FC<Props> = ({contactSliderData}) => {
  // console.log("🚀 ~ contactSliderData:", contactSliderData)
  const [slidesPerView, setSlidesPerView] = useState(9); // Default value for larger screens
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define your mobile breakpoint

  useEffect(() => {
    if (isMobile) {
      setSlidesPerView(2); // Adjust for mobile screens
    } else {
      setSlidesPerView(9); // Default value for larger screens
    }
  }, [isMobile]);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="mt-16"
    >
      <motion.div className="mb-12">
        <motion.h1
          variants={textVariant(0.2)}
          className="mb-4 font-semibold md:text-5xl text-3xl text-center"
        >
          {contactSliderData?.title}
        </motion.h1>
        <motion.p variants={textVariant(0.3)} className="text-center text-lg">
          {contactSliderData?.description}
        </motion.p>
      </motion.div>
      <Swiper
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: null,
          prevEl: null,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        style={{
          overflow: "hidden", // Ensures content doesn't overflow the container
        }}
        className="swiper-container flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]"
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {contactSliderData?.contacts.map((contact, index) => (
            <SwiperSlide key={index} className="swiper-slide h-full px-2.5">
              <div className="mr-8 ">
                <Image
                  src={contact?.url}
                  alt={contact?.alt}
                  width={120}
                  height={120}
                />
                <p className="opacity-70">{contact.alt}</p>
              </div>
            </SwiperSlide>
          ))}
        </Marquee>
      </Swiper>
      <div className="swiper-pagination"></div>
    </motion.div>
  );
};

export default ContactSlider;
