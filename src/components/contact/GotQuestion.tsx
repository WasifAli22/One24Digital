import React from 'react'
import { GotQuestionData } from './contactData'
import Link from 'next/link'
const GotQuestion = () => {
    return (
        
        <div className='mt-14 px-4'>
            {
                GotQuestionData.map((data, index) => (
                    <div key={index}>
                        <h1 className='mb-3 font-semibold text-center md:text-5xl text-3xl'>{data.heading}</h1>
                        <p className='text-center text-lg mb-5'>{data.paragraph}<Link className='text-[#007bff]' target="_blank" href={`tel:+91${data.number}`}> {data.number} </Link> </p>
                        <span className='text-lg'>{data.desc}</span>
                        <br />
                        <br />
                        <center className='text-lg'>{data.solution}</center>
                    </div>
                ))
            }

        </div>
    )
}

export default GotQuestion
