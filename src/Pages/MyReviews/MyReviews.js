import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div className='mt-16 lg:ml-10'>
            {
                reviews.map(review => <Review
                    key={review._id}
                    serviceReview={review}
                ></Review>)
            }
        </div>
    );
};

export default MyReviews;