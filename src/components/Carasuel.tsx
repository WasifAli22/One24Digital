import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image'; // Import the Image component from Next.js

const images = [
  '/compaign11.png',
  '/compaign12.png',
  '/compaign13.png',
  '/compaign01.png',
  '/compaign02.png',
  '/compaign03.png',
  '/compaign04.png',
  '/compaign05.png',
];

const arrangeImages = (images: string[]) => {
  const gridPattern = [];
  let currentRow = [];

  for (let i = 0; i < images.length; i++) {
    currentRow.push(images[i]);

    if (currentRow.length === 3 || i === images.length - 1) {
      gridPattern.push(currentRow);
      currentRow = [];
    }
  }

  return gridPattern;
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const imageGrid = arrangeImages(images);

  const handleSwipe = (direction: string) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <div className="carousel-container">
      <motion.img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.8}
        onDragEnd={(event, info) => {
          if (info.offset.x > 50) {
            handleSwipe("prev");
          } else if (info.offset.x < -50) {
            handleSwipe("next");
          }
        }}
      />
      <button onClick={() => handleSwipe("prev")}>Previous</button>
      <button onClick={() => handleSwipe("next")}>Next</button>
    </div>
  );
};

export default Carousel;
