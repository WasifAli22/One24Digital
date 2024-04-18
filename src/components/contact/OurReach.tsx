import React from 'react';

const OurReach = () => {
    // Sample data
    const cities = [
        { name: 'Maharashtra', address: 'mravati, Aurangabad, Ichalkaranji, Jaisingpur, Jalgaon, Jalna, Karad, Kolhapur, Latur, Miraj, Mumbai, Nagpur, Nanded, Navi Mumbai, Osmanabad, Pune, Ratnagiri, Sangli, Satara, Solapur, Thane' },
        { name: 'Gujarat', address: 'Ahmedabad, Anand, Baroda, Bhuj, Gandhinagar, Gandhidham, Mehsana, Nadiad, Rajkot, Surat, Valsad, Vapi' },
        { name: 'Daman', address: 'Daman' },
        { name: 'Telangana', address: 'Hyderabad, Karimnagar, Khammam, Warangal' },
        { name: 'Andhra Pradesh', address: 'Eluru, Guntur, Kakinada, Kurnool, Nellore, Ongole, Rajamundhary, Tirupati, Tuni, Vijayawada, Visakhapatnam' },
        { name: 'Karnataka', address: 'Bengaluru, Belgaum' },
        { name: 'Madhya Pradesh', address: 'Bhopal, Dewas, Indore, Ratlam, Ujjain' },
        { name: 'Chhattisgarh', address: 'Bhilai, Raipur' },
        { name: 'NCR', address: 'Ghaziabad ' },
    ];

    return (
        <section className='mt-20 px-5'>
            <h1 className='mb-10 font-semibold text-center md:text-5xl text-3xl'>Our Reach</h1>
            <p className='text-left text-base mb-3'>We are present in India across 11 States and 1 Union Territory* </p>
            <table className='w-full border-gray-300 border-2'>
                <tbody className='border-gray-300 border-2'>
                    {cities.map((city, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'bg-[#dff0d8]' : 'bg-white'} w-[100%] border-gray-300 border-2`}>
                            <td className='font-semibold py-6 text-lg w-[40%] md:pl-8 pl-2'>{city.name}</td>
                            <td className='text-base py-5 w-[60%]'>{city.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <small className='text-right w-full block'>*upcoming and running stores</small>

        </section>
    );
};

export default OurReach;
