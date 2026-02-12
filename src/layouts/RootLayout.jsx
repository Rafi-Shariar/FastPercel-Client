import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const RootLayout = () => {
    return (
        <div className='bg-base-300'>
            <Navbar></Navbar>
            <section className='max-w-7xl mx-auto min-h-screen'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;