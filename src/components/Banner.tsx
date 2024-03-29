import Image from 'next/image'
import React from 'react'
import { arrow, curverArrow } from '../../public/mock'

const Banner = () => {
  return (
    <div className=' flex-col inset-0 items-center  mx-auto min-h-[800px] w-full bg-gradient-to-br from-one-digital-sky-light to-one-digital-sky-dark'>
      <h1 className='text-[145px] text-center mt-24 font-extrabold text-white'>We help brands <br /> think differently</h1>
      {/* Banner section */}
      <div className="grid grid-cols-12 mx-28">
        <div className="lg:col-span-6 col-span-4 text-left">
          <Image src={curverArrow} alt='arrow' width={206} height={197} />
        </div>
        <div className="lg:col-span-6 col-span-4 text-center">
          <Image src={arrow} alt='arrow' width={95} height={95} />
        </div>
      </div>
    </div>
  )
}

export default Banner