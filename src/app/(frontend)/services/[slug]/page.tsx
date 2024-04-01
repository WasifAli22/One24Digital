import React from 'react';
import { ServicesData } from '@/components';
import Image from 'next/image';

const ServiceDetail = ({ params }: { params: { slug: string } }) => {
    const decodedSlug = decodeURIComponent(params.slug);
    const formattedSlug = decodedSlug.replace(/-/g, ' ');

    const service = ServicesData.find(product => product.title.toLowerCase() === formattedSlug.toLowerCase());

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div>
            <div className="">
                <Image src={service.src} alt={service.title} height={500} width={500} className='h-screen w-full object-cover' />
            </div>
            <div className="bg-gray-100">
                <div className="md:px-28 px-5 py-10">
                    <h1 className='font-bold text-4xl mb-4'>{service.title}</h1>
                    {/* <p>{service.description}</p> */}
                    <p className='text-base text-gray-700'>{service.details}</p>
                    <div className=" mt-8">
                        <h2 className='font-semibold text-xl'>INTEGRATED AGENCIES</h2>
                        <h5>{service.IcludedAgency}</h5>
                    </div>
                    <div className=" mt-8">
                        <h2 className='font-semibold text-xl'>Type</h2>
                        <h5>{service.description}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;