"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from 'react-icons/fa';

interface MenuLi {
    id : number;
    name : string;
    path : string;
}

const menuLi : MenuLi[] = [
    {
        id : 1,
        name : "HOME",
        path : "/"
    },
    {
        id : 2,
        name : "SERVICES",
        path : "/services"
    },
    {
        id : 3,
        name : "PORTFOLIO",
        path : "/portfolio"
    },
    {
        id : 4,
        name : "OUR COMPANY",
        path : "/company"
    },
    {
        id : 5,
        name : "CAREERS",
        path : "/careers"
    },
    {
        id : 6,
        name : "CONTACT",
        path : "/contact"
    }
]



export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex w-[100%] flex-col justify-center items-center h-[113px] bg-one-digital-dark relative">
      <div className={`flex w-full  justify-around ${!isOpen && "md:flex-row flex-row-reverse"} md:justify-center items-center px-4 md:px-8`}>
        {/* Logo */}
        <Link href="/" className="mr-4 md:mr-8">
          <Image
            className="relative w-[208px] h-[60px] object-cover"
            width={208}
            height={60}
            alt="Frame"
            src="/one-digital-logo.png"
          />
        </Link>

        {/* Navigation for Large Screens */}
        <ul className="hidden md:flex ">
           {menuLi.map(menu => (
             <li key={menu.id} className="items-start pt-[36.33px] pb-[36.34px] px-[25px] relative flex-[0_0_auto]">
                <Link  href={menu.path} className="text-xs hover:text-sky-400 tracking-[5.04px] relative w-fit mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-white text-center leading-[normal] whitespace-nowrap">
                    {menu.name}
                </Link>
             </li>
           ))}
        </ul>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          className="md:hidden text-white/90 inset-0 focus:outline-none focus:ring-[0.5px] focus:ring-offset-[0.5px] focus:ring-sky-500"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation (conditionally rendered) */}
      {isOpen && (
        <div className=" text-start animate-slide-in-top duration-300 ease-in-out  absolute top-full left-0  w-full bg-one-digital-dark px-4 py-8 md:hidden">
          {menuLi.map((item) => (
            <Link onClick={toggleMenu} key={item.id} href={item.path} className=" hover:text-sky-400 hover:ease-in-out text-[14px] hover:text-[16px] duration-200 delay-50 block  mx-auto max-w-[100%] sm:max-w-[68%] text-white text-base font-medium py-2 hover:text-opacity-75">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
