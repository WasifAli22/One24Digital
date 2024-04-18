"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Pagination } from 'swiper';
import { ContactSliderData } from './contactData';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

// SwiperCore.use([Pagination]);

const ContactSlider = () => {
    const [slidesPerView, setSlidesPerView] = useState(9); // Default value for larger screens
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Define your mobile breakpoint

    useEffect(() => {
        if (isMobile) {
            setSlidesPerView(2); // Adjust for mobile screens
        } else {
            setSlidesPerView(9); // Default value for larger screens
        }
    }, [isMobile]);

    return (
        <div className="mt-16">
            <div className="mb-12">
                <h1 className='mb-4 font-semibold md:text-5xl text-3xl text-center'>{ContactSliderData.title}</h1>
                <p className='text-center text-lg'>{ContactSliderData.description}</p>
            </div>
            <Swiper
                slidesPerView={slidesPerView}
                navigation={{
                    nextEl: null,
                    prevEl: null,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                className="swiper-container"
            >
                {ContactSliderData.contacts.map((contact, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <div className="mr-8">
                            <Image src={contact.url} alt={contact.alt} width={120} height={120} />
                            <p className='opacity-70'>{contact.alt}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination"></div>
        </div>
    );
}

export default ContactSlider;
