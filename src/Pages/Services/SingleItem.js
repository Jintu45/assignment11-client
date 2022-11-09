import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaBeer, FaStar } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Review from './Review';

const SingleItem = () => {
    const service = useLoaderData()
    const {_id, title, img, details, price, rating} = service
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`https://assignment11-server-jet.vercel.app/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])

    return (
       <div className='grid grid-cols-1 lg:grid-cols-2 w-full'>
         <div className=' m-auto py-10'>
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

        <div className='text-center py-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            <Link to={`/review/${_id}`}>
                <button className='btn btn-primary mt-8'>Add Review</button>
            </Link>
        </div>
       </div>
    );
};

export default SingleItem;