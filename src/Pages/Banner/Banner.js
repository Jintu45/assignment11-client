import React from 'react';
import banner from '../../assets/img/banner.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <article
                className='article py-40'
                style={{ backgroundImage: `url(${banner})` }}
                >
                <h1 className='text-5xl text-center font-bold  text-stone-100'>Welcome to Our Website </h1>
                </article>

        </div>
    );
};

export default Banner;