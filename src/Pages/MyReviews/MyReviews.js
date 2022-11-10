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
    }, [user?.email, reviews])

    const handleDelete = id => {
        const proceed = window.confirm('are you want to delete products');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount < 0) {
                        const rev = reviews.filter(odr => odr._id !== id);
                        setReviews(rev);
                    }
                })
        }
    }

    return (
        <div className='mt-16 lg:ml-10'>
            {
                reviews.map(review => <Review
                    key={review._id}
                    serviceReview={review}
                    handleDelete={handleDelete}
                ></Review>)
            }
        </div>
    );
};

export default MyReviews;