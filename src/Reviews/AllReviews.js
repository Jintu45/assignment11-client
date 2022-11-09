import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Review from '../Pages/Services/Review';
import ShowReviews from './ShowReviews';

const AllReviews = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://assignment11-server-jet.vercel.app/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])
    
    return (
        <div>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                >
                    
                </Review>)
            }
        </div>
    );
};

export default AllReviews;