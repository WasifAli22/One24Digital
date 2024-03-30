"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
    compaign01 , 
    compaign02, 
    compaign03 , 
    compaign04 , 
    compaign05 ,
    compaign06 ,
    compaign07,
    compaign08 ,
    compaign09 ,
    compaign10 ,
    compaign11 ,
    compaign12 ,
    compaign13 ,
    compaign14 ,
} from '../../public/compaign images';
import Slide from './slider/Slide';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const images = [
    {
        src: compaign01,
        alt: 'compaign1'
    },
    {
        src: compaign02,
        alt: 'compaign2'
    },
    {
        src: compaign03,
        alt: 'compaign3'
    },
    {
        src:   compaign04,
        alt: 'compaign4'
    },
    {
        src: compaign05,
        alt: 'compaign5'
    },
    {
        src:   compaign06,
        alt: 'compaign6'
    },
    {
        src: compaign07,
        alt: 'compaign7'
    },
    {
        src: compaign08,
        alt: 'compaign8'
    },
    {
        src: compaign09,
        alt: 'compaign9'
    },
    {
        src: compaign10,
        alt: 'compaign10'
    },
    {
        src: compaign11,
        alt: 'compaign11'
    },
    {
        src: compaign12,
        alt: 'compaign12'
    },
    {
        src: compaign13,
        alt: 'compaign13'
    },
    {
        src: compaign14,
        alt: 'compaign14'
    }
]
interface ImageData {
    src: string | any;
    alt: string;
}
const testImages : ImageData[] =  [
    {
        src: compaign01,
        alt: 'compaign1'
    },
    {
        src: compaign02,
        alt: 'compaign2'
    },
    {
        src: compaign03,
        alt: 'compaign3'
    },
    {
        src: compaign04,
        alt: 'compaign3'
    },
    {
        src: compaign05,
        alt: 'compaign3'
    },
    {
        src: compaign06,
        alt: 'compaign3'
    },
    {
        src: compaign07,
        alt: 'compaign7'
    },
    {
        src: compaign08,
        alt: 'compaign8'
    },
    {
        src: compaign09,
        alt: 'compaign9'
    },
    {
        src: compaign10,
        alt: 'compaign10'
    },
    {
        src: compaign11,
        alt: 'compaign11'
    },
    {
        src: compaign12,
        alt: 'compaign12'
    },
    {
        src: compaign13,
        alt: 'compaign13'
    },
    {
        src: compaign14,
        alt: 'compaign14'
    }
]

const arrangeImages = (images: any[]) => {
    const gridPattern = [];
    let currentRow = [];
    let isThreeImagesRow = true; // Start with a 3-image row
  
    for (let i = 0; i < images.length; i++) {
      currentRow.push(images[i]);
  
      if ((isThreeImagesRow && currentRow.length === 3) || (!isThreeImagesRow && currentRow.length === 4)) {
        gridPattern.push(currentRow);
        currentRow = [];
        isThreeImagesRow = !isThreeImagesRow; // Toggle between 3-image and 4-image rows
      }
    }
  
    return gridPattern;
  };



const Compaign = () => {
  const imageGrid = arrangeImages(testImages);
  const [threeImagesRow, setThreeImagesRow] = useState<any[][]>([]);
//   console.log(imageGrid);

  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current)
      progressCircle.current.style.setProperty('--progress', (1 - progress).toString());
    if (progressContent.current)
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // step 01 : get arrays of length 3 and set it using usestate 
  // step 02 : picup any random array from the array and set it using usestate
  // step 03 : remove pickup array from arrays of list
  // step 04 : repeat above process untill arrays of length 0
  return (
    <div id="compaign" className="bg-one-digital-dark w-full">
      {/* Campaign grid section */}
      <div className=" md:max-w-[80%] sm:max-w-[88%] max-w-[96%] lg:max-w-[70%] flex mx-auto mt-[-38px] bg-one-digital-light py-7 px-6  ">
        <div className="px-20 text-xs font-medium uppercase text-one-digital-dark tracking-[5.04px] relative w-auto mt-[-1.00px] text-center leading-normal whitespace-nowrap">
          <span className="border-b-2 pb-1 border-one-digital-dark">Com</span>
          paign
        </div>
      </div>
      {/* use swider to slide images */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={`mySwiper hover:cursor-pointer hover:swiper-button-prev hover:swiper-button-next`}
      >
        {/* I want to implement logic having my container recieving 3 and 4 images  */}
        {imageGrid.map((imageData, subIndex) => imageData.length === 3 ? (
          <SwiperSlide key={subIndex}><Slide key={subIndex} images={imageData} /></SwiperSlide>
        ):(
            <SwiperSlide key={subIndex}><Slide key={subIndex} images={imageData} /></SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end" >
          <svg viewBox="0 0 48 48" ref={progressCircle} >
            <circle cx="24" cy="24" className='stroke-white' r="20"></circle>
          </svg>
          <span ref={progressContent} className='text-white'></span>
        </div>
      </Swiper>
     
      
    </div>
  );
};
  
export default Compaign;

{/* <SwiperSlide><Slide images={testImages4} /></SwiperSlide>  */}
        {/* <SwiperSlide><Slide images={testImages} reverse={true}/></SwiperSlide>
        <SwiperSlide> <Slide images={testImages} /></SwiperSlide>
        <SwiperSlide><Slide images={testImages} reverse={true} banner={true}/></SwiperSlide>  */}

   {/* <Slide images={testImages} /> */}
      {/* Image grid section */}
      {/* <Slide images={testImages} reverse={true}/> */}
      {/* <Slide images={testImages} reverse={true} banner={true}/> */}
      {/* <Slide images={testImages} reverse={true}/> */}
// slide1 ->  3 - sider as h-screen #######################

// {/* <div className="grid max-h-screen w-auto grid-cols-12">
// {/* 3-grids images */}
// <div className="col-span-5">
//     <Image src={compaign11} alt="compaign1" width={500} height={500} className='max-h-[800px] object-cover w-full' />
// </div>
// <div className="col-span-7">
//     <div className="flex flex-col">
//         <Image src={compaign12} alt="compaign1" width={500} height={500} className='max-h-[400px] object-cover w-auto' />
//         <Image src={compaign13} alt="compaign1" width={500} height={500} className='max-h-[400px] w-auto object-cover ' />
//     </div>
// </div> */}

// slide3 ->  3 - sider as h-screen ######################
// {/* <div className="grid max-h-screen w-auto grid-cols-12">
// {/* 3-grids images */}
// <div className="col-span-6">
//     <div className="flex flex-col">
//         <Image src={compaign01} alt="compaign1" width={150} height={150} className='max-h-[400px] object-cover w-auto' />
//         <Image src={compaign02} alt="compaign1" width={206} height={197} className='max-h-[400px] w-auto object-cover ' />
//     </div>
    
// </div>
// <div className="col-span-6">
//     <Image src={compaign03} alt="compaign1" width={206} height={197} className='max-h-[800px] object-cover w-full' />
// </div>
// </div> */}


// slide2 ->  4 - sider as h-screen ######################
// {/* <div className="grid max-h-screen w-auto grid-cols-12">
// {/* 3-grids images */}
{/* <div className="col-span-7">
    <div className='flex flex-col'>
        <Image src={compaign04} alt="compaign1"   width={550} height={500} priority className='max-h-[400px] object-cover w-auto' />
        <Image src={compaign05} alt="compaign1"   width={550} height={500} priority className='max-h-[400px] object-cover w-auto' />
    </div>
</div> */}
{/* <div className="col-span-5">
    <div className="flex flex-col">
        <Image src={compaign06} alt="compaign1" width={300} height={500} priority className='max-h-[400px] object-cover w-auto' />
        <Image src={compaign07} alt="compaign1" width={300} height={500} priority className='max-h-[400px] object-cover w-auto' />
    </div>
</div> */}
// </div> */}

// slide4 ->  4 - sider as h-screen ######################
// {/* <div className="max-h-screen w-auto flex flex-col">
//    {/* wider image */}
    // <div className="w-[100%]">
    //     <Image src={compaign08} alt="compaign1" width={700} height={700} className='max-h-[300px] w-[100%] object-center  ' />
    // </div>
//     <div className="grid grid-cols-12">
//         {/* image 01 */}
//         <div className="col-span-8">
//             <Image src={compaign09} alt="compaign1" width={700} height={700} className='max-h-[400px]  object-cover w-[100%] ' />
//         </div>

//         {/* image 02 */}
//         <div className="col-span-4">
//             <Image src={compaign10} alt="compaign1" width={500} height={500} className='max-h-[300px] object-cover w-[100%]' />
//         </div>
//     </div>
// </div>  */}