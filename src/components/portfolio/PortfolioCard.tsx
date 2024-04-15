"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { PortfolioData } from '..'

const PortfolioCard = () => {
    const [showMore, setShowMore] = useState(false);
    const initialDisplayCount = 4;

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='grid grid-cols-12'>
            {PortfolioData.slice(0, showMore ? PortfolioData.length : initialDisplayCount).map((project) => (
                <div key={project.id} className='relative lg:col-span-6 col-span-12 overflow-hidden'>
                    <Link href={`/portfolio/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, '-'))}`}>
                        <div className="services_bg_image min-h-[300px] lg:min-h-[500px] w-full bg-no-repeat bg-center bg-cover hover:cursor-pointer hover:scale-125 transition-all duration-700" style={{ backgroundImage: `url('${project.src}')` }}>
                            <div className="flex flex-col items-center h-[100%] justify-center text-white absolute left-0 right-0">
                                <p className='text-lg mb-10 service_desc text-white relative'>{project.description}</p>
                                <h3 className='text-4xl text-center font-bold'>{project.title}</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            {PortfolioData.length > initialDisplayCount && (
                <div className="col-span-12 text-center">
                    <button onClick={toggleShowMore} className="mt-10 px-4 py-2 bg-red-500 text-white rounded-md">
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
        </div>
    )
}

export default PortfolioCard