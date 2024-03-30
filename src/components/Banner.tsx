"use client"
import Image from 'next/image'
import React from 'react'
import { arrow, curverArrow } from '../../public/mock'
import { motion } from "framer-motion"
import Link from 'next/link'

const Banner = () => {
 

  return (
    <div className="flex-col inset-0 items-center mx-auto min-h-[600px] lg:min-h-[800px] w-full bg-gradient-to-br from-one-digital-sky-light to-one-digital-sky-dark">
      {/* Banner section */}
      <AnimatedText text={`We help brands think differently`} />
      <div className="grid mt-8 grid-cols-12 mx-28">
        <div className="lg:col-span-6 hidden md:block col-span-4 text-left">
          <Image src={curverArrow} alt="arrow" width={206} height={197} />
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
            className='lg:col-span-6 col-span-12 lg:pt-0 pt-12 text-center'
          >
          <Link  href="#compaign" className='flex lg:block justify-center'>
            <Image src={arrow} alt="arrow" width={90} height={90} className="cursor-pointer" />
          </Link>
        </motion.div>
      </div>
      
    </div>
  );
};

export default Banner

const AnimatedText = ({ text }: { text: string }) => {
  const charVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div className={` md:px-0 sm:px-3 px-1 sm:text-[70px] text-[50px] md:text-[145px] text-center top-0 pt-10 font-extrabold text-white`}>
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