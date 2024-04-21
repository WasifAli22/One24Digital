"use client";
import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";
import { footerQuery } from "@/app/lib/queries";
import { useQuery } from "@apollo/client";
import { Suspense } from "react";
import FooterSkeleton from "../skeletons/FooterSkeleton";
import type { Footer as FooterQuery} from "@/app/lib/types";


export const Footer = () => {
  const { data, error } = useQuery<FooterQuery>(footerQuery, {
    context: { fetchOptions: { cache: "no-store" } },
  });
  if (error) return <p>Error : while Loading Footer</p>;
  if (!data) return <FooterSkeleton />;
  return (
    <div className="px-10  lg:px-20 ">
      <Suspense fallback={<div><FooterSkeleton /></div>}>
        <div className="md:pt-20 md:pb-0 py-10 ">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-12 pb-10 lg:px-40"
          >
            {data?.getFooter?.footerData?.map((data, index) =>
              data.title && data.links && data.links.length > 0 ? (
                <motion.div
                  variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                  key={index}
                  className="col-span-12 mb-8 lg:mb-0 md:col-span-3"
                >
                  <h4 className="text-xl font-bold text-gray-800">
                    {data.title}
                  </h4>
                  <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-4"
                  >
                    {data.links?.map((link, index) => (
                      <li key={index} className="text-gray-600 text-sm mb-2">
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>
              ) : null
            )}
          </motion.div>

          <div className="grid grid-cols-12 lg:pt-20 pt-10 border-t-2 border-gray-300 lg:pb-10">
            {data.getFooter.footerData.map((data, index) =>
              (data?.addressLi && data?.addressLi?.length > 0) ||
              data?.locationTitle === "Contact us on" ? (
                <div
                  key={index}
                  className={`col-span-12 ${
                    data.locationTitle === "Contact us on"
                      ? "md:col-span-4"
                      : "md:col-span-8"
                  } mb-8`}
                >
                  {data.locationTitle && (
                    <h4 className="text-xl font-bold text-gray-800">
                      {data.locationTitle}
                    </h4>
                  )}
                  {data.locationTitle === "Contact us on" ? (
                    <div className="">
                      <ul className="mt-4">
                        {data.addressLi?.map((link, index) => (
                          <li
                            key={index}
                            className="text-gray-600 text-sm mb-2"
                          >
                            {link.name}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center mt-4">
                        <Link href="https://www.facebook.com/" target="_blank">
                          <BsFacebook className="mr-4 hover:text-blue-500 hover:font-bold transition-all delay-150 duration-100 text-2xl" />
                        </Link>
                        <Link href="https://www.linkedin.com/" target="_blank">
                          <BsLinkedin className="text-2xl hover:text-blue-500 hover:font-bold transition-all delay-150 duration-100" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <motion.ul
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="mt-4"
                    >
                      {data.addressLi?.map((link, index) => (
                        <motion.li
                          variants={fadeIn("down", "spring", 0.4 * index, 0.75)}
                          key={index}
                          className="text-gray-600 text-sm mb-2"
                        >
                          {link.name}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="mb-6">
          {data?.getFooter?.footerInstructions.map((data, index) => (
            <motion.ol
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={index}
              className="py-4 "
            >
              <motion.li
                variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
                className="text-sm font-semibold text-gray-600"
              >
                {index + 1}.{" "}
                <span className="ml-2 font-normal">{data.text}</span>
              </motion.li>
            </motion.ol>
          ))}
        </div>
      </Suspense>
    </div>
  );
};


