import React from 'react';
import logo from '../../assets/logo.png';
const LogoHolder = () => {
    return (
        <div className='flex'>
            <div>
                <img src={logo} alt=""/>
            </div>
            <section>
                 <h1 className='text-3xl font-extrabold mt-5 -ml-4'>Profast</h1>
            </section>
            
        </div>
    );
};

export default LogoHolder;