import React from 'react';
import Banner from '../../../components/home/Banner';
import HowitWorks from '../../../components/home/HowitWorks';
import OurServices from '../../../components/home/OurServices';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <HowitWorks></HowitWorks>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;