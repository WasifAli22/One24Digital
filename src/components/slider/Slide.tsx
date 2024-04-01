import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import { slideIn } from '@/app/utils/motion';

interface ImageData {
    src: string;
    alt: string;
}

interface Props {
    images: ImageData[];
    reverse?: boolean;
    banner? : boolean;
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

const Slide: React.FC<Props> = ({ images, reverse = false, banner = false }) => {
    
    return (
        <div className=''>
            {/* Displaying slides with three images each, adjusted for screen size */}
            {images.length === 3 && !banner && (
                <motion.div className="grid  max-h-screen grid-cols-12">
                    {/* Conditionally rendering based on the reverse flag */}
                    {reverse ? (
                        <>
                            {/* Displaying third image */}
                            <motion.div variants={slideIn("right", "tween", 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="col-span-5 overflow-hidden">
                                <Image src={images[2].src} alt={images[2].alt} width={500} height={500} className="max-h-[800px]  object-cover w-full" />
                            </motion.div>
                            {/* Displaying first two images */}
                            <motion.div variants={slideIn("left", "tween", 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="col-span-7 overflow-hidden">
                                {images.slice(0, 2).map((imageData, index) => (
                                    <div key={index} className="flex flex-col">
                                        <Image src={imageData.src} alt={imageData.alt} width={500} height={500} className="max-h-[400px] object-cover w-auto" />
                                    </div>
                                ))}
                            </motion.div>
                        </>
                    ) : (
                        <>
                            {/* Displaying first two images */}
                            <motion.div 
                                variants={slideIn("right", "tween", 0.2, 1)} 
                                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} 
                                className="bg-red-200 col-span-7">
                                {images.slice(0, 2).map((imageData, index) => (
                                    <div key={index} className="flex flex-col">
                                        <Image src={imageData.src} alt={imageData.alt} width={500} height={500} className="max-h-[400px] overflow-hidden object-cover w-auto" />
                                    </div>
                                ))}
                            </motion.div>
                            {/* Displaying third image */}
                            <motion.div variants={slideIn("right", "tween", 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="col-span-5 overflow-hidden">
                                <Image src={images[2].src} alt={images[2].alt} width={500} height={500} className="max-h-[800px] object-cover w-full" />
                            </motion.div>
                        </>
                    )}
                </motion.div>
            )}
            {/* Displaying slides with 4 images each, adjusted for screen size */}
            {images.length === 4 && !reverse && (
                <motion.div className="grid max-h-screen w-auto grid-cols-12">
                    <>
                        <motion.div 
                            variants={slideIn("left", "tween", 0.2, 1)} 
                            initial="hidden" whileInView="show" 
                            viewport={{ once: true, amount: 0.25 }} 
                            className="col-span-7 overflow-] bg-red-200">
                            {images.slice(0, 2).map((imageData, index) => (
                                <div key={index} className="flex flex-col">
                                    <Image src={imageData.src} alt={imageData.alt} width={550} height={500} priority className="max-h-[400px] object-cover w-auto" />
                                </div>
                            ))}
                        </motion.div>
                        <motion.div variants={slideIn("right", "tween", 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="col-span-5 overflow-hidden">
                            {images.slice(2).map((imageData, index) => (
                                <div key={index} className="flex flex-col">
                                    <Image src={imageData.src} alt={imageData.alt} width={300} height={500} priority className="max-h-[400px] object-cover w-auto" />
                                </div>
                            ))}
                        </motion.div>
                    </>
                </motion.div>
            )}
            {/* Additional condition for banner */}
            {images.length === 3 && reverse && banner && (
                <motion.div className="max-h-screen w-auto flex flex-col">
                    <>
                        <div className="max-h-screen w-auto flex flex-col">
                            {images.slice(0, 1).map((imageData, index) => (
                                <motion.div key={index} className="w-[100%] " variants={slideIn("up", "tween", 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                                    <Image src={imageData.src} alt={imageData.alt} width={700} height={700} className="max-h-[400px] object-cover w-[100%] object-center" />
                                </motion.div>
                            ))}
                            <motion.div 
                                variants={slideIn("right", "tween", 0.2, 1)} 
                                initial="hidden" whileInView="show" 
                                viewport={{ once: true, amount: 0.25 }} 
                                className="grid grid-cols-1 md:grid-cols-12">
                                {images.slice(1, 2).map((imageData, index) => (
                                    <div key={index} className="col-span-8">
                                        <Image src={imageData.src} alt={imageData.alt} width={500} height={500} className="max-h-[300px] object-cover w-[100%]" />
                                    </div>
                                ))}
                                {images.slice(2, 3).map((imageData, index) => (
                                    <div key={index} className="col-span-4">
                                        <Image src={imageData.src} alt={imageData.alt} width={500} height={500} className="max-h-[300px] object-center object-cover w-[100%]" />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </>
                </motion.div>
            )}
        </div>
    );
};

export default Slide;
