import React from 'react';

const Review = ({singleReview}) => {

    const {review, user} = singleReview;
     console.log(user?.displayName)

    return (
        <div>
            <img src={user?.photoURL} alt="" />
            <h1>{review}</h1>
        </div>
    );
};

export default Review;