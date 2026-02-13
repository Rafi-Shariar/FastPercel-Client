import React from 'react';
import img1 from '../../assets/brands/amazon.png';
import img2 from '../../assets/brands/start-people 1.png';
import img3 from '../../assets/brands/randstad.png';
import img4 from '../../assets/brands/moonstar.png';
import img5 from '../../assets/brands/casio.png';
import img6 from '../../assets/brands/start.png';
const Partners = () => {
    return (
        <div className='mt-20'>

            <h1 className='text-[28px] font-semibold text-center text-gray-700'>We've helped thousands of sales teams</h1>

            <section className='grid grid-cols-6 max-w-6xl mx-auto gap-10 mt-6'>
                <div>
                    <img src={img1} alt="" />
                </div>

                 <div>
                    <img src={img2} alt="" />
                </div>

                 <div>
                    <img src={img3} alt="" />
                </div>

                 <div>
                    <img src={img4} alt="" />
                </div>

                 <div>
                    <img src={img5} alt="" />
                </div>

                 <div>
                    <img src={img6} alt="" />
                </div>
            </section>
            
        </div>
    );
};

export default Partners;