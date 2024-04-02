import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ThreeCard from "./ThreeCard";
// import { slideIn } from '@/app/utils/motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FourCard from "./FourCard";
import FeareCard from "./FeareCard";

interface ImageData {
  src: string;
  alt: string;
}

interface Props {
  images: ImageData[][];
}
export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-90%" : direction === "right" ? "50%" : 0,
      y: direction === "up" ? "90%" : direction === "down" ? "50%" : 0,
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

function useRandomBoolean(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggleValue];
}

const Slide: React.FC<Props> = ({ images }) => {
  const [length3Reverse, toggleLength3Reverse] = useRandomBoolean(false);
  const [length3Banner, toggleLength3Banner] = useRandomBoolean(true);
  const [length4Reverse, toggleLength4Reverse] = useRandomBoolean(false);
  const [length4Banner, toggleLength4Banner] = useRandomBoolean(false);

  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current)
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    if (progressContent.current)
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const length3Arrays = images.filter((arr) => arr.length === 3);
  const length4Arrays = images.filter((arr) => arr.length === 4);

  const randomizedLength3Arrays = length3Arrays.map((arr, index) => {
    const reverse = index % 2 === 0 ? length3Reverse : !length3Reverse;
    const banner = index % 2 === 0 ? length3Banner : !length3Banner;
    return { images: arr, reverse, banner };
  });
  console.log(
    "🚀 ~ randomizedLength3Arrays ~ randomizedLength3Arrays:",
    randomizedLength3Arrays
  );

  const randomizedLength4Arrays = length4Arrays.map((arr, index) => {
    const reverse = index % 2 === 0 ? length4Reverse : !length4Reverse;
    const banner = index % 2 === 0 ? length4Banner : !length4Banner;
    return { images: arr, reverse, banner };
  });

  return (
    <>
      {/* JSX content of your component */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={`mySwiper overflow-hidden hover:cursor-pointer hover:swiper-button-prev hover:swiper-button-next`}
      >
        {randomizedLength3Arrays &&
          randomizedLength3Arrays.map((item, index) => (
            <SwiperSlide key={index}>
              <ThreeCard
                images={item.images}
                reverse={item.reverse}
                banner={item.banner}
              />
            </SwiperSlide>
          ))}

        {randomizedLength4Arrays.map((item, index) => (
          <SwiperSlide key={index}>
            <FourCard
              images={item.images}
              reverse={item.reverse}
              banner={item.banner}
            />
          </SwiperSlide>
        ))}
        {randomizedLength3Arrays &&
          randomizedLength3Arrays.map(
            (item, index) =>
              item.reverse && (
                <SwiperSlide key={index}>
                  {item.reverse === true && (
                    <FeareCard
                      images={item.images}
                      reverse={item.reverse}
                      banner={true}
                    />
                  )}
                </SwiperSlide>
              )
          )}
      </Swiper>
      {/* {randomizedLength3Arrays && randomizedLength3Arrays.map((item, index) => (
          <ThreeCard
            key={index}
            images={item.images}
            reverse={item.reverse}
            banner={item.banner}
          />
        ))} */}
      {/* {randomizedLength4Arrays.map((item, index) => (
          <FourCard
            key={index}
            images={item.images}
            reverse={item.reverse}
            banner={item.banner}
          />
        ))} */}
    </>
  );
};

export default Slide;
