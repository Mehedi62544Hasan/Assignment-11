import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const Details = () => {
  const { _id, description, image, model, name, price, rating } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const {email} = user;

  const handlePressOrder = event => {
    event.preventDefault()
    handleHaveUser()
    const review = event.target.review.value;
    console.log(name, model, description, price, rating, image)

    const addService = {
      user,
      email,
      review,
      model,
      id: _id
    }

    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addService)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          event.target.reset()
          alert('post successfully')
        }
      })
      .catch(err => alert(err))
  }

  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [reviews])


  const handleHaveUser = () =>{
 
  }

  const itemsReview = reviews.filter(rev => _id === rev?.id)

  return (

    <div className='mt-20'>
      <div>
        <img
          src={image}
          className="w-4/5 mx-auto"
          alt=""
        />
      </div>
      <div className="w-4/5 mx-auto">
        <div className="  mb-6">
          <div>
            <p className="flex justify-center px-3 mb-4 mt-16 text-xl font-bold text-lime-400 uppercase">
              {name}
            </p>
          </div>
          <h2 className="flex justify-center text-blue-600 mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            {model}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            {description}
          </p>
          <div className='flex align-center justify-between my-5'>
            <p>Rating: {rating}</p>
            <p className='text-red-500 mr-7 text-xl font-bold'>$ {price}</p>
          </div>
        </div>
        <div>
          <form onSubmit={handlePressOrder}>
            <textarea name="review" className="textarea textarea-secondary my-4 w-full" placeholder="message"></textarea>
            <input type="submit" value="Post" className='btn bg-blue-600 px-24' />
          </form>
        </div>

      </div>

      <div>
        {
          itemsReview.map(review => <Review
          key={review._id}
          serviceReview={review}
          ></Review>)
        }
      </div>
    </div>

  );
};

export default Details;











