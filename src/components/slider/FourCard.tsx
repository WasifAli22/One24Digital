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

const FourCard: React.FC<Props> = ({ images, reverse, banner }) => {
  return (
    <div>
      {/* Displaying slides with 4 images each, adjusted for screen size */}
      {images && images.length === 4 && (
        <motion.div className="grid max-h-screen w-auto grid-cols-12">
          {!reverse ? (
            <>
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="col-span-7  overflow-hidden bg-red-200"
              >
                {images.slice(0, 2).map((imageData, index) => (
                  <div key={index} className="flex border-r-4 first:border-b-4 border-white flex-col">
                    <Image
                      src={imageData.src}
                      alt={imageData.alt}
                      width={550}
                      height={500}
                      priority
                      className="max-h-[400px] object-cover w-auto"
                    />
                  </div>
                ))}
              </motion.div>
              <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="col-span-5 overflow-hidden"
              >
                {images.slice(2).map((imageData, index) => (
                  <div key={index} className="flex first:border-b-4 border-white flex-col">
                    <Image
                      src={imageData.src}
                      alt={imageData.alt}
                      width={300}
                      height={500}
                      priority
                      className="max-h-[400px] object-cover w-auto"
                    />
                  </div>
                ))}
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="col-span-5 border-r-4 overflow-hidden"
              >
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  width={500}
                  height={500}
                  className="max-h-[800px]  object-cover w-full"
                />
              </motion.div>
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="col-span-7  overflow-hidden bg-red-200"
              >
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  width={500}
                  height={500}
                  className="max-h-[300px] border-b-4 object-cover w-full"
                />

                <motion.div
                  variants={slideIn("right", "tween", 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="flex  overflow-hidden bg-red-200"
                >
                  {images.slice(2,4).map((imageData, index) => (
                    <Image
                      key={index}
                      src={imageData.src}
                      alt={imageData.alt}
                      width={500}
                      height={500}
                      className="max-h-[400px] first:border-r-4 border-white w-full object-cover "
                    />
                  ))}
                </motion.div>
              </motion.div>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default FourCard;
