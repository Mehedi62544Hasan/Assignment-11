import React from 'react';

const Review = ({serviceReview}) => {

    const {review, user} = serviceReview;
     console.log(user?.displayName)

    return (
        <div>
            <img src={user?.photoURL} alt="" />
            <h1>{review}</h1>
        </div>
    );
};

export default Review;