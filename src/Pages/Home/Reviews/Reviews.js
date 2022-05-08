import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

import './Reviews.css'




const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://infinite-journey-06820.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className='container my-5'>
            <h1 className='custom-clr display-5 text-center title'>Customer Says!</h1>
            <div className="row">
                {
                    reviews.map(review => <Review
                        key={review._id} review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;