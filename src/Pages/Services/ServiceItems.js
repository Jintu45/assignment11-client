import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceItems = ({user}) => {
    const {_id, title, img, price, rating, details} = user
    return (
        <div className='shadow-2xl p-6 rounded-xl'>
               <PhotoProvider>
                    <PhotoView src={img}>
                    <img className='w-full h-72' src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
            <h2 className='text-2xl'>{title}</h2>
            
            <h3 className='font-bold text-orange-500 my-3'>Price: {price}</h3>
            <>
                {
                    details.length > 100 ? 
                    <p>{details.slice(0, 100) + '... '}
                    </p>
                    :
                    <p className='mb-1'>{details}</p>
                }
            </>
            <Link to={`/singleitem/${_id}`}>
                <button className='btn btn-primary mt-4'>See details</button>
            </Link>
        </div>
    );
};

export default ServiceItems;