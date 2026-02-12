import React from 'react';
import icon from '../../assets/bookingIcon.png'
const HowitWorks = () => {
    return (
        <div className='max-w-6xl mx-auto'>

            <section>
                <h1 className='text-3xl text-gray-700 mt-16 font-bold'>How it Works</h1>
            </section>

            <section className='mt-6 flex gap-4'>
                <div className=' p-6 rounded-2xl bg-white max-w-75'>
                    <img src={icon} alt="" />
                    <h1 className='text-xl text-gray-800 font-semibold mt-4'>Booking Pick & Drop</h1>
                    <p className='text-base text-gray-600 mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                <div className=' p-6 rounded-2xl bg-white max-w-75'>
                    <img src={icon} alt="" />
                    <h1 className='text-xl text-gray-800 font-semibold mt-4'>Cash On Delivery</h1>
                    <p className='text-base text-gray-600 mt-4'>From personal packages to business shipments — we deliver on time, every time. </p>
                </div>

                <div className=' p-6 rounded-2xl bg-white max-w-75'>   
                    <img src={icon} alt="" />
                    <h1 className='text-xl text-gray-800 font-semibold mt-4'>Delivery Hub </h1>
                    <p className='text-base text-gray-600 mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                <div className=' p-6 rounded-2xl bg-white max-w-75'>
                    <img src={icon} alt="" />
                    <h1 className='text-xl text-gray-800 font-semibold mt-4'>Booking SME & Corporate</h1>
                    <p className='text-base text-gray-600 mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                
            </section>
            
        </div>
    );
};

export default HowitWorks;