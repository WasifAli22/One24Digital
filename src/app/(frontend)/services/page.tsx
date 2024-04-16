
import React from 'react'
import ServicesBanner from '@/components/services/ServicesBanner'
import OurServicesCard from '@/components/services/OurServices'

const Services = () => {
    return (
        <div>
            <ServicesBanner
                background={{ color: 'red' }}
                text={"Explore Our Services \n & \n Transform Your Business."}
                
            />
            <OurServicesCard />
        </div>
    )
}

export default Services
