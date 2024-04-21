"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BannerData } from "@/app/lib/types";
// import { bannerData } from "./dummydata";


interface Props {
  bannerData : BannerData
}

const Banner : React.FC<Props> = ({ bannerData }) => {
  // console.log("🚀 ~ bannerData2:", bannerData)
  const hasImage = bannerData?.background?.bgImg && bannerData?.background?.bgImg !== "";

  return (
    <div
      className={`flex-col inset-0 items-center object-cover mx-auto min-h-[600px] lg:min-h-[800px] w-full`}
      style={{
        backgroundImage: hasImage ? `url(${bannerData.background.bgImg})` : "none",
        backgroundColor: hasImage ? "transparent" : bannerData.background.bgColor.dark,
        backgroundSize: hasImage ? "cover" : "auto",
        backgroundPosition: hasImage ? "center" : "auto",
      }}
    >
      <AnimatedText text={bannerData.animeText} />
      <div className="grid mt-8 grid-cols-12 mx-28">
        <div className="lg:col-span-6 mt-[-30px] hidden md:block z-10 col-span-4 text-left">
          {/* {hasImage ||  ( */}
            <Image
              src={bannerData.curveArrow.url}
              alt={bannerData.curveArrow.alt}
              height={bannerData.curveArrow.h}
              width={bannerData.curveArrow.w}
            />
          {/* )} */}
        </div>
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="lg:col-span-6 col-span-12 lg:pt-0 pt-12 text-center"
        >
          <Link href={bannerData.arrowImg.link} className="flex lg:block">
            <Image
              src={bannerData.arrowImg.url}
              alt={bannerData.arrowImg.alt}
              height={bannerData.arrowImg.size.h}
              width={bannerData.arrowImg.size.w}
              className="cursor-pointer"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;



export const AnimatedText = ({ text }: { text: string }) => {
  const charVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={` md:px-0 sm:px-3 px-1 sm:text-[70px] text-[50px] md:text-[145px] text-center top-0 pt-10 font-extrabold text-white`}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

/*

<div className="grid grid-cols-12 mx-28">
  <div className="lg:col-span-6 col-span-4 text-left">
    <Image src={curverArrow} alt="arrow" width={206} height={197} />
  </div>
  <div className="lg:col-span-6 col-span-4 text-center">
    <Image src={arrow} alt="arrow" width={95} height={95} />
  </div>
</div>
*/
