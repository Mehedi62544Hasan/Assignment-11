import React from 'react';
import './Review.css';

const Review = ({ serviceReview, handleDelete, handleUpdate }) => {

    const { _id, review, model, status, user } = serviceReview;

    return (
         
            <div className='flex bg-white p-2 m-5 lg:w-3/5 rounded-md'>
                <img src={user?.photoURL} alt="" className='w-10 h-10 rounded-full mr-5' />
                <div>
                    <h1 className='font-bold'>{user?.displayName}</h1>
                    <h1>{review}</h1>
                    <div className='flex justify-between'>
                        <p className='text-lime-500'><small>{model}</small></p>
                        <div className='lg:mr-7'>
                            <button onClick={() => handleUpdate(_id)} className='button'>{status ? status : 'Update'}</button>
                            <button onClick={() => handleDelete(_id)} className="button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Review;