import React from 'react'

const OurServices = () => {
    const projects = [
        {
            id: 1,
            title: 'Walter The Cat',
            description: 'Chevrolet Silverado',
            src: '/work/work1.jpg'
        },
        {
            id: 2,
            title: 'Changing The Game',
            description: 'Xbox Adaptive Controller',
            src: '/work/work2.jpg'

        },
        {
            id: 3,
            title: 'ADLaM',
            description: 'Microsoft Office 365',
            src: '/work/work3.jpg'
        },
        {
            id: 4,
            title: 'Heinzjack',
            description: 'The Kraft Heinz Company',
            src: '/work/work4.jpg'
        }
    ]
    return (
        <div className='grid grid-cols-12'>
            {
                projects.map((project) => (
                    <div key={project.id} className='relative lg:col-span-6 col-span-12 overflow-hidden'>
                        <div className="services_bg_image min-h-[300px] lg:min-h-[500px] w-full bg-no-repeat bg-center bg-cover hover:cursor-pointer hover:scale-125 transition-all duration-700" style={{ backgroundImage: `url('${project.src}')` }}>
                            <div className="flex flex-col items-center h-[100%] justify-center text-white absolute left-0 right-0">
                                <p className='text-lg mb-10 service_desc relative'>{project.description}</p>
                                <h3 className='text-4xl text-center font-bold'>{project.title}</h3>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default OurServices