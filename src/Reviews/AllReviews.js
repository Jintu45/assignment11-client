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
    
    const handleDelete = id => {
        const proceed = window.confirm('you want to delete this review')
        if(proceed){
            fetch(`https://assignment11-server-jet.vercel.app/reviews/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remaining = reviews.filter(rev => rev._id !== id)
                    setReviews(remaining)
                }
            })
        }
   }
    return (
        <div>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                >
                    
                </Review>)
            }
        </div>
    );
};

export default AllReviews;