import React from "react";

const FooterSkeleton = () => {
  return (
    <div className="">
      <div className="md:pt-20 md:pb-0 py-10">
        <div className="grid grid-cols-12 pb-10 lg:px-40">
          {/* Skeleton for each column */}
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="col-span-12 mb-8 lg:mb-0 md:col-span-3 animate-pulse">
              <div className="text-xl font-bold text-gray-800 bg-gray-300 w-1/2 h-6 rounded mb-4"></div>
              <div className="text-gray-600 text-sm">
                <div className="bg-gray-300 w-3/4 h-4 rounded mb-2"></div>
                <div className="bg-gray-300 w-2/3 h-4 rounded mb-2"></div>
                <div className="bg-gray-300 w-2/5 h-4 rounded mb-2"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 lg:pt-20 pt-10 border-t-2 border-gray-300 lg:pb-10">
          {/* Skeleton for contact details */}
          {[1, 2].map((index) => (
            <div key={index} className={`col-span-12 md:col-span-${index === 1 ? '4' : '8'} mb-8 animate-pulse`}>
              <div className="text-xl font-bold text-gray-800 bg-gray-300 w-1/2 h-6 rounded mb-4"></div>
              <div className="text-gray-600 text-sm">
                <div className="bg-gray-300 w-full h-4 rounded mb-2"></div>
                <div className="bg-gray-300 w-full h-4 rounded mb-2"></div>
                <div className="bg-gray-300 w-full h-4 rounded mb-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Skeleton for instructions */}
      <div className="mb-6">
        {[1, 2, 3, 4].map((index) => (
          <ol key={index} className="py-4 animate-pulse">
            <li className="text-sm font-semibold text-gray-600">
              <span className="ml-2 font-normal bg-gray-300 w-1/2 h-4 rounded"></span>
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default FooterSkeleton;
