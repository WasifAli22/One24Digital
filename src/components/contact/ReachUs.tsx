import React from 'react'
import { ReachUsData } from './contactData'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ReachUs = () => {
    return (
        <div className='grid grid-cols-12 px-4 mt-14'>
            <div className="lg:col-span-6 col-span-12">
                {
                    ReachUsData.map((data, index) => (
                        <div key={index}>
                            <h1 className='mb-4 font-semibold md:text-5xl text-3xl '>{data.heading}</h1>
                            <hr className='mb-6' />
                            <div className='flex mb-5'>
                                <IoLocationSharp className='text-3xl mr-3' />
                                <p className='text-lg'>{data.address}</p>
                            </div>
                            <div className='flex mb-5'>
                                <FaPhoneAlt className='text-2xl mr-3' />
                                <p className='text-lg'>Seller Support: <a target="_blank" href={`tel:+91${data.phone}`}> {data.phone} </a></p>
                            </div>
                            <div className='flex mb-5'>
                                <HiOutlineMail className='text-2xl mr-3' />
                                <p className='text-lg'>Email Support: <a href={`mailto:${data.email}`}> {data.email} </a></p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="lg:col-span-6 col-span-12">
            </div>
        </div>
    )
}

export default ReachUs
