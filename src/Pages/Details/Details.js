import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';


const Details = () => {
  const { _id, description, image, model, name, price, rating } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle('Details')

  const time = new Date().getTime()

  const email = user?.email;

  const handlePressOrder = event => {
    event.preventDefault()
    const review = event.target.review.value;
 
    const addService = {
      user,
      email,
      review,
      model,
      id: _id,
      time
    }

    fetch('https://online-seller-server.vercel.app/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addService)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          event.target.reset()
          alert('post successfully')
        }
      })
      .catch(err => alert(err))
  }

  useEffect(() => {
    fetch('https://online-seller-server.vercel.app/review')
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [reviews])

  const itemsReview = reviews.filter(rev => _id === rev?.id)

  const handleDelete = id => {
    const proceed = window.confirm('are you want to delete products');
    if (proceed) {
      fetch(`https://online-seller-server.vercel.app/review/${id}`, {
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

  return (

    <div className='mt-20'>
      <div>
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} alt="" className="w-4/5 mx-auto" />
          </PhotoView>
        </PhotoProvider>
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
          {
            user?.email ? <form onSubmit={handlePressOrder}>
              <textarea name="review" className="textarea textarea-secondary my-4 w-full" placeholder="message"></textarea>
              <input type="submit" value="Post" className='btn bg-blue-600 px-24' />
            </form>
              : <p><span className='font-semibold text-lime-600 mr-1'>User is not logged !!</span><Link to='/login' className='font-bold text-orange-500 text-xl hover:text-blue-600'>Please login</Link></p>
          }
        </div>

      </div>

      <div className='lg:ml-28'>
        {
          itemsReview.map(review => <Review
            key={review._id}
            serviceReview={review}
             handleDelete={handleDelete}
          ></Review>)
        }
      </div>
    </div>

  );
};

export default Details;











