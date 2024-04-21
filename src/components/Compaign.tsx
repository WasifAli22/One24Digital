"use client";
import { TestImages } from "@/app/lib/types";
import Slide from "./slider/Slide";
// import { testImages } from "./dummydata";
// Import Swiper React components


interface Props {
  testImages : TestImages
}



const arrangeImages = (images: any[]) => {
  const gridPattern = [];
  let currentRow = [];
  let isThreeImagesRow = true; // Start with a 3-image row

  for (let i = 0; i < images.length; i++) {
    currentRow.push(images[i]);

    if (
      (isThreeImagesRow && currentRow.length === 3) ||
      (!isThreeImagesRow && currentRow.length === 4)
    ) {
      gridPattern.push(currentRow);
      currentRow = [];
      isThreeImagesRow = !isThreeImagesRow; // Toggle between 3-image and 4-image rows
    }
  }

  return gridPattern;
};

const Compaign : React.FC<Props> = ({testImages}) => {
  const imageGrid = testImages && arrangeImages(testImages?.images);
  // console.log(imageGrid);
  return (
    <div
      id="compaign"
      className="bg-one-digital-dark w-full md:mt-[-100px] relative z-10"
    >
      {/* Campaign grid section */}
      <div className="w-full z-50 md:max-w-[80%] sm:max-w-[88%] max-w-[96%] lg:max-w-[70%] flex mx-auto relative items-center bg-red-300   ">
        <div className={`absolute w-full flex mx-auto top-auto md:top-[-40px] left-auto md:left-[45px] bg-one-digital-light py-7 px-6`}  >
          <div className="px-20 text-xs font-medium uppercase text-one-digital-dark tracking-[5.04px] relative w-auto mt-[-1.00px] text-center leading-normal whitespace-nowrap">
            <span className="border-b-2 pb-1 uppercase border-one-digital-dark">
              {testImages?.title?.slice(
                0,
                Math.ceil(testImages.title.length / 2 )
              )}
            </span>
            {testImages?.title.slice(Math.ceil(testImages.title.length / 2)  )}
          </div>
        </div>
      </div>
      <Slide images={imageGrid} />
    </div>
  );
};

export default Compaign;
