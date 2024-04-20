import React from "react";

const HeaderSkeleton = () => {
  return (
    <header className="flex w-[100%] z-50 flex-col justify-center items-center h-[113px] bg-black relative">
      <div className="flex w-full flex-row justify-around  md:justify-center items-center px-4 md:px-8">
        {/* Logo Skeleton */}
        <div className="mr-4 md:mr-8 animate-pulse">
          <div className="w-[208px] h-[60px] bg-gray-300 rounded-md"></div>
        </div>

        {/* Navigation Skeleton */}
        <ul className="hidden md:flex">
          <li className="items-start pt-[36.33px] pb-[36.34px] px-[25px] relative flex-[0_0_auto]">
            <div className="text-xs pb-4 bg-gray-300 w-24 h-6 rounded"></div>
          </li>
          <li className="items-start pt-[36.33px] pb-[36.34px] px-[25px] relative flex-[0_0_auto]">
            <div className="text-xs pb-4 bg-gray-300 w-24 h-6 rounded"></div>
          </li> <li className="items-start pt-[36.33px] pb-[36.34px] px-[25px] relative flex-[0_0_auto]">
            <div className="text-xs pb-4 bg-gray-300 w-24 h-6 rounded"></div>
          </li> <li className="items-start pt-[36.33px] pb-[36.34px] px-[25px] relative flex-[0_0_auto]">
            <div className="text-xs pb-4 bg-gray-300 w-24 h-6 rounded"></div>
          </li>
          {/* Add more skeleton items for each menu item */}
        </ul>

        {/* Hamburger Menu Button Skeleton */}
        <div className="md:hidden text-white/90 inset-0 focus:outline-none focus:ring-[0.5px] focus:ring-offset-[0.5px] focus:ring-sky-500">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Mobile Navigation Skeleton */}
      <div className="text-start animate-pulse duration-300 ease-in-out absolute top-full left-0 w-full bg-one-digital-dark px-4 py-8 md:hidden">
        <div className="bg-gray-300 w-full h-6 rounded mb-2"></div>
        <div className="bg-gray-300 w-full h-6 rounded mb-2"></div>
        {/* Add more skeleton items for each mobile menu item */}
      </div>
    </header>
  );
};

export default HeaderSkeleton;
