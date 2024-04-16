
import React from 'react'
import ServicesBanner from '@/components/services/ServicesBanner'
import OurServicesCard from '@/components/services/OurServices'

const Services = () => {
    return (
        <div>
            <ServicesBanner
                background={{ color: 'red' }}
                text={<span className=''>Explore Our Services <br /> <span className='mt-5 block'>&</span> <br /> <span className="italic font-bold md:mt-5 block">Transform Your Business.</span></span>}
            />

            <OurServicesCard />
        </div>
    )
}

export default Services
