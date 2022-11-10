import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';


const MyReviews = () => {
    useTitle('My Reviews')
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
                    Swal.fire(
                        'Good job!',
                        'Delete Successfull!',
                        'success'
                      )
                     if (data.deletedCount < 0) {
                        const rev = reviews.filter(odr => odr._id !== id);
                        setReviews(rev);
                    }
                })
        }
    }


    const handleUpdate = id => {
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Success' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rev => rev._id !== id);
                    const approving = reviews.find(rev => rev._id === id);
                    approving.status = 'Approved';
                    const newReview = [...remaining, approving];
                    setReviews(newReview);
                }
            })
    }

    return (
        <div className='mt-16 lg:ml-10'>
            {
                reviews.map(review => <Review
                    key={review._id}
                    serviceReview={review}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                ></Review>)
            }
        </div>
    );
};

export default MyReviews;


