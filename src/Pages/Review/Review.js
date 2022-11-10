import React from 'react';
import { Link } from 'react-router-dom';
 import './Review.css';

const Review = ({ serviceReview, handleDelete }) => {

    const { _id, review, model, user } = serviceReview;
 
    return (
        <div className='flex bg-white p-2 m-5 lg:w-3/5 rounded-md relative'>
            {
                user?.photoURL ? <img src={user?.photoURL} alt="" className='w-10 h-10 rounded-full mr-5' />
                    : <img src='https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png' alt="" className='w-10 h-10 rounded-full mr-5' />
            }
            <div>
                <h1 className='font-bold'>{user?.displayName}</h1>
                <h1>{review}</h1>
                <div className='flex'>
                    <p className='text-lime-600'><small>{model}</small></p>
                    <div className='mr-7 absolute bottom-2 right-0'>
                        <Link to={`/update/${_id}`}><button className='button'>Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review;








// {user && user.uid ? (
//     <>
//       <div className=" flex justify-center rounded-lg bg-gray-300 p-4 ">
//         <div className="">
//           <div className="flex justify-between mt-2 ">
//             <img
//               className="rounded-full w-10"
//               src={review?.user?.photoURL}
//               alt=""
//             />
//             <h1>{review?.user?.displayName}</h1>
//           </div>
//           <p>{review?.serviceName}</p>
//           <p>{review.comment}</p>
//           <div className="flex justify-between my-2 ">
//             <p>
//               <button
//                 onClick={() => handleDelete(review?._id)}
//                 className="btn btn-active"
//               >
//                 Delete
//               </button>
//             </p>
//             <p>
//               <Link
//                 to="/update"
//                 className="btn btn-outline btn-success ml-5"
//               >
//                 Update
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   ) : (
//     <>
//       <div class="grid h-screen place-items-center">
//         <h2>Sorry No user Available Please </h2>
//         <Link to="/login">Log in</Link>{" "}
//       </div>
//     </>