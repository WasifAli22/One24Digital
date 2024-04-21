"use client";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";
import type { ReachUsItem } from "@/app/lib/types";

interface Props {
  reachUsData : ReachUsItem[]
}
const ReachUs : React.FC<Props> = ({reachUsData}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      className="grid grid-cols-12 px-4 mt-14"
    >
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-6 col-span-12"
      >
        {reachUsData?.map((data, index) => (
          <motion.div
            variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
            key={index}
          >
            <motion.h1 className="mb-4 font-semibold md:text-5xl text-3xl ">
              {data.heading}
            </motion.h1>
            <hr className="mb-6" />
            <motion.div className="flex mb-5">
              <IoLocationSharp className="text-3xl mr-3" />
              <p className="text-lg">{data.address}</p>
            </motion.div>
            <motion.div className="flex mb-5">
              <FaPhoneAlt className="text-2xl mr-3" />
              <p className="text-lg">
                Seller Support:{" "}
                <a target="_blank" href={`tel:+91${data.phone}`}>
                  {" "}
                  {data.phone}{" "}
                </a>
              </p>
            </motion.div>
            <motion.div className="flex mb-5">
              <HiOutlineMail className="text-2xl mr-3" />
              <p className="text-lg">
                Email Support:{" "}
                <a href={`mailto:${data.email}`}> {data.email} </a>
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.ul>
      <div className="lg:col-span-6 col-span-12"></div>
    </motion.div>
  );
};

export default ReachUs;
