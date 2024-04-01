import React from 'react';

const ServicesBanner = ({ background, text }:any) => {
    // Check if background color is provided
    const hasColor = background && background.color;
    
    // Check if background image is provided
    const hasImage = background && background.image;

    // Dynamic styles based on provided background
    const dynamicStyles = {
        backgroundImage: hasImage ? `url(${background.image})` : 'none',
        backgroundColor: hasColor ? background.color : 'transparent',
    };

    return (
        <div className='min-h-screen h-screen w-[100%] bg-cover bg-center' style={dynamicStyles}>
            {/* Content */}
            <div className='flex items-center justify-center m-auto text-center'>
                <h1 className='lg:text-[115px] text-5xl lg:text-center pt-24 font-extrabold text-white'> 
                    {text}
                </h1>
            </div>
        </div>
    );
};

export default ServicesBanner;
