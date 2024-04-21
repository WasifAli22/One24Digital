// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { headerQuery } from "@/app/lib/queries";
// import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
// import { Suspense } from "react";
// import { usePathname } from "next/navigation";
// import HeaderSkeleton from "../skeletons/Header";
// import type { Header  as HeaderType} from "@/app/lib/types";


// export const Header = (): JSX.Element => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { data, error } = useSuspenseQuery<HeaderType>(headerQuery, {
//     context: { fetchOptions: { cache: "no-store" } },
//   });
//   const pathname = usePathname();
//   if (error) return <p>Error : while Loading Header</p>;
//   if (!data) return <HeaderSkeleton />;

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="flex w-[100%] z-50 flex-col justify-center items-center h-[113px] bg-black relative">
//       <Suspense fallback={<div><HeaderSkeleton /></div>}>
//         <div
//           className={`flex w-full  justify-around ${
//             !isOpen && "md:flex-row flex-row-reverse"
//           } md:justify-center items-center px-4 md:px-8`}
//         >
//           {/* Logo */}
//           <Link href="/" className="mr-4 md:mr-8">
//             <Image
//               className="relative w-[208px] h-[60px] object-cover"
//               width={208}
//               height={60}
//               alt="Frame"
//               src="/one-digital-logo.png"
//             />
//           </Link>

//           {/* Navigation for Large Screens */}
//           <ul className="hidden md:flex ">
//             {data.getHeader.menuLi.map((menu) => (
//               <li
//                 key={menu.id}
//                 className="items-start pt-[36.33px] pb-[36.34px] px-[25px] relative flex-[0_0_auto]"
//               >
//                 <Link
//                   href={menu.path}
//                   className={` ${
//                     pathname === menu.path
//                       ? "text-sky-300 pb-4 transition-all ease-in-out duration-150 border-b-2 border-sky-400 tracking-[5.04px]"
//                       : ""
//                   } text-xs hover:text-sky-500 hover:pb-4 transition-all ease-in-out duration-150 hover:border-b-2 hover:border-sky-400 tracking-[5.04px] relative w-fit mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-white text-center leading-[normal] whitespace-nowrap`}
//                 >
//                   {menu.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Hamburger Menu Button for Small Screens */}
//           <button
//             className="md:hidden text-white/90 inset-0 focus:outline-none focus:ring-[0.5px] focus:ring-offset-[0.5px] focus:ring-sky-500"
//             onClick={toggleMenu}
//           >
//             {isOpen ? (
//               <FaTimes className="w-6 h-6" />
//             ) : (
//               <FaBars className="w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </Suspense>

//       {/* Mobile Navigation (conditionally rendered) */}
//       {isOpen && (
//         <Suspense fallback={<div>Loading...</div>}>
//           <div className=" text-start animate-slide-in-top duration-300 ease-in-out  absolute top-full left-0  w-full bg-one-digital-dark px-4 py-8 md:hidden">
//             {data.getHeader.menuLi.map((item) => (
//               <Link
//                 key={item.id}
//                 href={item.path}
//                 className={`hover:text-sky-400 hover:pb-4 transition-all ease-in-out hover:border-b-2 hover:border-sky-400 hover:ease-in-out text-[14px] hover:text-[16px] duration-200 delay-50 block  mx-auto max-w-[100%] sm:max-w-[68%] text-white text-base font-medium py-2 hover:text-opacity-75 ${
//                   pathname === item.path ? "text-sky-300 pb-4 transition-all ease-in-out duration-150 border-b-2 border-sky-400 tracking-[5.04px]" : ""
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </Suspense>
//       )}
//     </header>
//   );
// };
