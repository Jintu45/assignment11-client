import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewForm = () => {
    const review = useLoaderData()
    return (
        <div>
            <h2>hello {review.title}</h2>
        </div>
    );
};

export default ReviewForm;