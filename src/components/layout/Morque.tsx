"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";


interface Props {
    children: React.ReactNode;
    speed: number;
}
const Marquee2: React.FC<Props> = ({ children, speed }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationControls = useAnimation();
  const [scrollSpeed, setScrollSpeed] = useState(speed);

  // Scroll speed detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollDelta = window.scrollY;
      setScrollSpeed(scrollDelta);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate animation duration based on scroll speed
  useEffect(() => {
    const containerWidth = containerRef.current!.offsetWidth;

    let childrenLength = 0;
    if (Array.isArray(children)) {
      childrenLength = children.length;
    }

    const animationDuration =
      ((containerWidth + childrenLength * 10) / scrollSpeed) * 1000;

    animationControls.start({
      x: -containerWidth,
      transition: {
        duration: animationDuration,
        ease: "linear",
        loop: Infinity,
      },
    });
  }, [scrollSpeed]);

  return (
    <div
      ref={containerRef}
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
    >
      <motion.div
        animate={animationControls}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee2;