import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const MyReviews = () => {

    const reviews = useLoaderData();
    const {user} = useContext(AuthContext);

    const userReview = reviews.filter(rev => rev?.email === user?.email);
    console.log(userReview)

    return (
        <div>
            {
                userReview.map(review => <Review
                key={review._id}
                serviceReview={review}
                ></Review>)
            }
        </div>
    );
};

export default MyReviews;