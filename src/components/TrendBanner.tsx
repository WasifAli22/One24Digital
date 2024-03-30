import React from 'react';

const TrendBanner = () => {
    return (
        <div className='min-h-screen h-screen w-[100%] bg-cover ' style={{ backgroundImage: `url('/trendBannerbg.png')` }}>
            {/* Content */}
            <div className='flex items-center justify-center m-auto text-center'>
                <h1 className='lg:text-[145px] text-5xl lg:text-left py-24 font-extrabold text-white'> <span className='lg:text-[110px] text-4xl'> We don&apos;t follow. </span> <br /> <span> We <span className='italic'> set trends. </span></span></h1>
            </div>
        </div>
    );
};

export default TrendBanner;
