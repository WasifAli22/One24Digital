import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

interface ImageData {
  src: string;
  alt: string;
}

interface Props {
  images: ImageData[];
  reverse?: boolean;
  banner?: boolean;
}

const ThreeCard: React.FC<Props> = ({ images, reverse, banner }) => {
  return (
    <>
      {/* Displaying slides with three images each, adjusted for screen size */}
      {images && images.length === 3 && (
        <motion.div className="grid  max-h-screen grid-cols-12">
          {/* Conditionally rendering based on the reverse flag */}
          {reverse ? (
            <>
              {/* Displaying third image */}
              <motion.div
                // variants={slideIn("right", "tween", 0.2, 1)}
                // initial="hidden"
                // whileInView="show"
                // viewport={{ once: true, amount: 0.25 }}
                className="col-span-5 border-r-4 border-white overflow-hidden"
              >
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  width={500}
                  height={500}
                  className="max-h-[800px]  object-cover w-full"
                />
              </motion.div>
              {/* Displaying first two images */}
              <motion.div
                // variants={slideIn("left", "tween", 0.2, 1)}
                // initial="hidden"
                // whileInView="show"
                // viewport={{ once: true, amount: 0.25 }}
                className="col-span-7  overflow-hidden"
              >
                {images.slice(0, 2).map((imageData, index) => (
                  <div key={index} className="flex first:border-b-4 border-white  flex-col">
                    <Image
                      src={imageData.src}
                      alt={imageData.alt}
                      width={500}
                      height={500}
                      className="max-h-[400px]  object-cover w-auto"
                    />
                  </div>
                ))}
              </motion.div>
            </>
          ) : (
            <>
              {/* Displaying first two images */}
              <motion.div
                // variants={slideIn("right", "tween", 0.2, 1)}
                // initial="hidden"
                // whileInView="show"
                // viewport={{ once: true, amount: 0.25 }}
                className="bg-black col-span-7"
              >
                {images.slice(0, 2).map((imageData, index) => (
                  <div key={index} className="flex  flex-col">
                    <Image
                      src={imageData.src}
                      alt={imageData.alt}
                      width={500}
                      height={500}
                      className="max-h-[400px] first:border-b-4 border-white border-r-4  overflow-hidden object-cover w-auto"
                    />
                  </div>
                ))}
              </motion.div>
              {/* Displaying third image */}
              <motion.div
                // variants={slideIn("right", "tween", 0.2, 1)}
                // initial="hidden"
                // whileInView="show"
                // viewport={{ once: true, amount: 0.25 }}
                className="col-span-5 overflow-hidden"
              >
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  width={500}
                  height={500}
                  className="max-h-[800px] object-cover w-full"
                />
              </motion.div>
            </>
          )}
        </motion.div>
      )}
    </>
  );
};

export default ThreeCard;
