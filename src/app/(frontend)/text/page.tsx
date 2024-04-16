import React from 'react';

const StaggeredPinkBoxes = () => {
  // Create an array of 3 elements to hold groups of 5 boxes
  const boxGroups = Array(20).fill(null);

  return (
    <div className=" space-y-6 px-6 bg-green-200  flex items-center "> {/* Add space-y-8 for gap between groups */}
      {boxGroups.map((_, groupIndex) => (
        <div key={groupIndex} className="flex space-x-reverse first:pt-5 even:pt-2 translate-x-5 rotate-[35deg]  px-2 items-center justify-center   flex-col gap-2  w-fit  "> {/* Apply space-x-4 here */}
          {Array(5)
            .fill(null)
            .map((_, boxIndex) => (
              <div
                key={`${groupIndex}-${boxIndex}`}
                className={`h-[40px]   w-[40px]  rounded-[8px] bg-pink-500 transform  ${
                  boxIndex === 0 ? 'translate-y-4' : 'translate-y-4'
                }`}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default StaggeredPinkBoxes;
