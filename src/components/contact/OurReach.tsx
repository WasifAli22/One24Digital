"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";

interface Props {
  cities: {
    name: string;
    address: string;
  }[];
}

const OurReach : React.FC<Props> = ({cities}) => {
  // Sample data
 

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="mt-20 px-5"
    >
      <motion.h1
        variants={textVariant(0.2)}
        className="mb-10 font-semibold text-center md:text-5xl text-3xl"
      >
        Our Reach
      </motion.h1>
      <motion.p
        variants={textVariant(0.3)}
        className="text-left text-base mb-3"
      >
        We are present in India across 11 States and 1 Union Territory*{" "}
      </motion.p>
      <motion.table className="w-full border-gray-300 border-2">
        <motion.tbody
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.17 }}
          className="border-gray-300 border-2"
        >
          {cities?.map((city, index) => (
            <motion.tr
              variants={fadeIn("down", "spring", 0.3 * index, 0.75)}
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[#dff0d8]" : "bg-white"
              } w-[100%] border-gray-300 border-2`}
            >
              <td className="font-semibold py-6 text-lg w-[40%] md:pl-8 pl-2">
                {city.name}
              </td>
              <td className="text-base py-5 w-[60%]">{city.address}</td>
            </motion.tr>
          ))}
        </motion.tbody>
      </motion.table>
      <small className="text-right w-full block">
        *upcoming and running stores
      </small>
    </motion.section>
  );
};

export default OurReach;
