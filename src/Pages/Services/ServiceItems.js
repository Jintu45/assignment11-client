import React from 'react';

const ServiceItems = ({user}) => {
    const {_id, title, img} = user
    return (
        <div>
            <img className='w-full h-72' src={img} alt="" />
            <h2 className='text-2xl'>{title}</h2>
        </div>
    );
};

export default ServiceItems;