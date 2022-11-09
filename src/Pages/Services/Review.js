import React from 'react';

const Review = ({review}) => {
   const {name, email, address, image, message} = review;
    return (
        <div>
            <div className="card flex justify-between card-side bg-base-100 shadow-xl mt-5 p-3 ml-10">
                    <figure><img className='h-20 w-20 rounded-2xl' src={image} alt="user"/></figure>
                    <div className=" w-48 ml-2 text-justify">
                        <h1 className='text-2xl font-semibold'>{name}</h1>
                        <h2 className='font-semibold'>{email}</h2>
                        <h3>{address}</h3>
                    </div>
                        <div>
                        <p className='mr-10'>{message}</p>
                        </div>
                    <div className='text-right'>
                        <button className='btn btn-danger'>delete</button>
                    </div>
                </div>
        </div>
    );
};

export default Review;