import ContactSlider from '@/components/contact/ContactSlider'
import GotQuestion from '@/components/contact/GotQuestion'
import OurReach from '@/components/contact/OurReach'
import ReachUs from '@/components/contact/ReachUs'
import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <GotQuestion />
            <ReachUs />
            <ContactSlider />
            <OurReach />    
        </div>
    )
}

export default ContactUs
