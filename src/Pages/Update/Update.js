import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const Update = () => {
    const storedCard = useLoaderData(); 

    const [reviews, setReviews] = useState(storedCard);
 
    const handleUpdate = event => {
        event.preventDefault();
        fetch(`https://online-seller-server.vercel.app/review/${storedCard?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    Swal.fire(
                        'Good job!',
                        'Update Successfull!',
                        'success'
                      )
                      event.target.reset();
                }
            })
    }

    const handleInput = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...reviews};
        newReview[field] = value;
         setReviews(newReview)       
    }

    return (
        <div className='mx-20 lg:mx-48 mt-10'>
            <form onSubmit={handleUpdate}>
                <textarea onChange={handleInput} name="review" className="textarea textarea-secondary my-4 w-full" defaultValue={reviews.review} ></textarea> <br />
                <input type="submit" value="Review" className='btn bg-blue-600 px-24' />
            </form>
         </div>
    );
};

export default Update;