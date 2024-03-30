"use client"
import React from 'react'
import { footerData, footerInstructions } from '../index'
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="px-10  lg:px-20 ">
            <div className="md:pt-20 md:pb-0 py-10 ">
                <div className='grid grid-cols-12 pb-10 lg:px-40'>
                    {footerData.map((data, index) => (
                        (data.title && data.links && data.links.length > 0) ? (
                            <div key={index} className='col-span-12 mb-8 lg:mb-0 md:col-span-3'>
                                <h4 className='text-xl font-bold text-gray-800'>{data.title}</h4>
                                <ul className='mt-4'>
                                    {data.links?.map((link, index) => (
                                        <li key={index} className='text-gray-600 text-sm mb-2'>
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null
                    ))}
                </div>

                <div className='grid grid-cols-12 lg:pt-20 pt-10 border-t-2 border-gray-300 lg:pb-10'>
                    {footerData.map((data, index) => (
                        (data.addressLi && data.addressLi.length > 0) || data.locationTitle === 'Contact us on' ? (
                            <div key={index} className={`col-span-12 ${data.locationTitle === 'Contact us on' ? 'md:col-span-4' : 'md:col-span-8'} mb-8`}>
                                {data.locationTitle && <h4 className='text-xl font-bold text-gray-800'>{data.locationTitle}</h4>}
                                {data.locationTitle === 'Contact us on' ? (
                                    <div className="">
                                        <ul className='mt-4'>
                                            {data.addressLi?.map((link, index) => (
                                                <li key={index} className='text-gray-600 text-sm mb-2'>
                                                    {link.name}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex items-center mt-4">
                                            <Link href="https://www.facebook.com/" target='_blank'>
                                                <BsFacebook className="mr-4 text-2xl" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/" target='_blank'>
                                                <BsLinkedin className='text-2xl' />
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <ul className='mt-4'>
                                        {data.addressLi?.map((link, index) => (
                                            <li key={index} className='text-gray-600 text-sm mb-2'>
                                                {link.name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : null
                    ))}
                </div>

            </div>
            <div className="mb-6">
                {
                    footerInstructions.map((data, index) => (
                        <ol key={index} className='py-4'>
                            <li className='text-sm font-semibold text-gray-600'>{index + 1}. <span className="ml-2 font-normal">{data.text}</span></li>
                        </ol>
                    ))
                }


            </div>
        </div>
  )
}

export default Footer