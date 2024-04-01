
import React from 'react'
import ServicesBanner from '@/components/ServicesBanner'
import OurServicesCard from '@/components/OurServices'

const Services = () => {
    return (
        <div>
            <ServicesBanner
                background={{ color: 'red' }}
                text={<span>Explore Our Services & <br /> <span className="italic font-bold">Transform Your Business.</span></span>}
            />

            <OurServicesCard />
        </div>
    )
}

export default Services
