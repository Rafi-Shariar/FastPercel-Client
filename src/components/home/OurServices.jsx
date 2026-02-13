import React from 'react';
import logo from '../../assets/service.png';
const OurServices = () => {
    return (
        <div className='mt-16 bg-[rgba(3,55,61,1)] py-15 rounded-2xl'>

            <section className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold text-white'>Our Services</h1>
                <p className='max-w-2xl text-center mt-3 mb-6 text-gray-400'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </section>

            <section className='max-w-6xl mx-auto grid grid-cols-3 gap-6'>
                <div className='flex flex-col justify-center items-center bg-white p-6 gap-4 max-w-102 rounded-2xl hover:bg-brand text-center'>
                    <img src={logo} alt="" />
                    <h1 className='text-2xl font-bold text-gray-700'>Express  & Standard Delivery</h1>
                    <p className='text-base text-gray-500'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>

                <div className='flex flex-col justify-center items-center bg-white p-6 gap-4 max-w-102 rounded-2xl hover:bg-brand text-center'>
                    <img src={logo} alt="" />
                    <h1 className='text-2xl font-bold text-gray-700'>Nationwide Delivery</h1>
                    <p className='text-base text-gray-500'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                </div>

                <div className='flex flex-col justify-center items-center bg-white p-6 gap-4 max-w-102 rounded-2xl hover:bg-brand text-center'>
                    <img src={logo} alt="" />
                    <h1 className='text-2xl font-bold text-gray-700'>Fulfillment Solution</h1>
                    <p className='text-base text-gray-500'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>

                <div className='flex flex-col justify-center items-center bg-white p-6 gap-4 max-w-102 rounded-2xl hover:bg-brand text-center'>
                    <img src={logo} alt="" />
                    <h1 className='text-2xl font-bold text-gray-700'>Cash on Home Delivery</h1>
                    <p className='text-base text-gray-500'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>

                <div className='flex flex-col justify-center items-center bg-white p-6 gap-4 max-w-102 rounded-2xl hover:bg-brand text-center'>
                    <img src={logo} alt="" />
                    <h1 className='text-2xl font-bold text-gray-700'>Corporate Service / Contract In Logistics</h1>
                    <p className='text-base text-gray-500'>Customized corporate services which includes warehouse and inventory management support.</p>
                </div>

                <div className='flex flex-col justify-center items-center bg-white p-6 gap-4 max-w-102 rounded-2xl hover:bg-brand text-center'>
                    <img src={logo} alt="" />
                    <h1 className='text-2xl font-bold text-gray-700'>Parcel Return</h1>
                    <p className='text-base text-gray-500'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>
            </section>
            
        </div>
    );
};

export default OurServices;