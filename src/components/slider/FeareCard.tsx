import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageData {
  src: string;
  alt: string;
}

interface Props {
  images: ImageData[];
  reverse?: boolean;
  banner?: boolean;
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
const FeareCard: React.FC<Props> = ({ images, reverse, banner }) => {
  return (
    <>
      {/* Additional condition for banner */}
      {images.length === 3 && reverse && banner && (
        <motion.div className="max-h-screen w-auto flex flex-col">
          <>
            <div className="max-h-screen w-auto flex flex-col">
              {images.slice(0, 1).map((imageData, index) => (
                <motion.div
                  key={index}
                  className="w-[100%] "
                  variants={slideIn("up", "tween", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <Image
                    src={imageData.src}
                    alt={imageData.alt}
                    width={500}
                    height={500}
                    className="max-h-[300px] border-b-4 border-white object-cover w-[100%] object-center"
                  />
                </motion.div>
              ))}
              <div className="grid grid-cols-1  md:grid-cols-12">
                {images.slice(1, 2).map((imageData, index) => (
                  <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    key={index}
                    className="first:border-r-4 border-white  col-span-8"
                  >
                    <Image
                      src={imageData.src}
                      alt={imageData.alt}
                      width={500}
                      height={500}
                      className="max-h-[300px]  object-cover w-[100%]"
                    />
                  </motion.div>
                ))}
                {images.slice(2, 3).map((imageData, index) => (
                  <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    key={index}
                    className="col-span-4"
                  >
                    <Image
                      src={imageData.src}
                      alt={imageData.alt}
                      width={500}
                      height={500}
                      className="max-h-[300px] object-center object-cover w-[100%]"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        </motion.div>
      )}
    </>
  );
};

export default FeareCard;
