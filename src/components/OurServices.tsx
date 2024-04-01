import Link from 'next/link'
import React from 'react'
import { ServicesData } from '.'
const OurServicesCard = () => {
   

    return (
        <div className='grid grid-cols-12'>
            {ServicesData.map((project) => (
                <div key={project.id} className='relative lg:col-span-6 col-span-12 overflow-hidden'>
                    <Link href={`/services/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, '-'))}`}>
                        <div className="services_bg_image min-h-[300px] lg:min-h-[500px] w-full bg-no-repeat bg-center bg-cover hover:cursor-pointer hover:scale-125 transition-all duration-700" style={{ backgroundImage: `url('${project.src}')` }}>
                            <div className="flex flex-col items-center h-[100%] justify-center text-white absolute left-0 right-0">
                                <p className='text-lg mb-10 service_desc relative'>{project.description}</p>
                                <h3 className='text-4xl text-center font-bold'>{project.title}</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default OurServicesCard
