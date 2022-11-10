import React from 'react';
import './Review.css';

const Review = ({ serviceReview }) => {

    const { review, model, user } = serviceReview;

    return (
        <div className=' bg-white p-2 m-5 lg:w-3/5 rounded-md'>
            <div className='flex'>
                <img src={user?.photoURL} alt="" className='w-10 h-10 rounded-full mr-5' />
                <div>
                    <h1 className='font-bold'>{user?.displayName}</h1>
                    <h1>{review}</h1>
                    <div className='flex justify-between'>
                        <p><small>{model}</small></p>
                        <div>
                            <button className='button'>Update</button>
                            <button className="button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;