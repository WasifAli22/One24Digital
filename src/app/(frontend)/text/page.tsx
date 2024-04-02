"use client"
import React from 'react'
import {motion} from "framer-motion"
import { textVariant } from '@/app/utils/motion'

const page = () => {
  return (
    <motion.div
    variants={textVariant(0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, amount: 0.25 }}
    >
      {/* Content */}
      <h1>We don&apos;t follow. We set trends.</h1>
    </motion.div>
  )
}

export default page