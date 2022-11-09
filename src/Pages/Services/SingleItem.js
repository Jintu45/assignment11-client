import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaBeer, FaStar } from 'react-icons/fa';

const SingleItem = () => {
    const service = useLoaderData()
    const {title, img, details, price, rating} = service
    return (
        <div className=' m-auto w-3/5 py-10'>
            <div className='shadow-2xl p-6 rounded-xl'>
            <img className='h-auto m-auto w-full' src={img} alt="" />
            <h2 className='text-2xl'>{title}</h2>
            <h3 className='font-bold text-orange-500 my-3'>Price: {price}</h3>
            <div className='flex items-center'>
                <span className='font-bold text-2xl'>{rating} </span>
                <FaStar className='text-orange-500'></FaStar>
                <FaStar className='text-orange-500'></FaStar>
                <FaStar className='text-orange-500'></FaStar>
                <FaStar className='text-orange-500'></FaStar>
                <FaStar className='text-orange-500'></FaStar>
            </div>
            <p>{details}</p>
            
        </div>
        </div>
    );
};

export default SingleItem;