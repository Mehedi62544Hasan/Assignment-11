import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';
import { Link } from 'react-router-dom';


const MyReviews = () => {
    useTitle('My Reviews')
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://online-seller-server.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email, reviews])

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
        <div className='mt-16 lg:ml-10'>
             {user.uid && reviews.length ? (
            <>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        serviceReview={review}
                        handleDelete={handleDelete}
                    ></Review>)
                }
            </>
             ) : (
                <>
                    <div className=" grid h-screen place-items-center ">
                        <h2 className=" text-lime-500 font-bold text-xl ml-2">
                            No reviews were added Please
                            {user.uid ? (
                                <>
                                    <Link to="/services">
                                        <span className="underline text-red-700">Post Review</span>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/login">
                                        <span className="underline text-red-700">Log in</span>
                                    </Link>{" "}
                                </>
                            )}
                        </h2>
                    </div>
                </>
            )}
        </div>
    );
};

export default MyReviews;




// <div className="grid grid-cols-3 gap-10 my-10 p-5">
//     {user.uid && reviews.length ? (
//         <>
//             {reviews.map((review) => (
//                 <MyReview
//                     key={review._id}
//                     review={review}
//                     handleDelete={handleDelete}
//                     reviews={reviews}
//                 ></MyReview>
//             ))}
//         </>
//     ) : (
//         <>
//             <div className=" grid h-screen place-items-center ">
//                 <h2 className="my-36 text-red-400 font-bold text-xl ml-2">
//                     No reviews were added Please
//                     {user.uid ? (
//                         <>
//                             <Link to="/services">
//                                 <span className="underline text-red-700">Post Review</span>
//                             </Link>
//                         </>
//                     ) : (
//                         <>
//                             <Link to="/login">
//                                 <span className="underline text-red-700">Log in</span>
//                             </Link>{" "}
//                         </>
//                     )}
//                 </h2>
//             </div>
//         </>
//     )}
// </div>