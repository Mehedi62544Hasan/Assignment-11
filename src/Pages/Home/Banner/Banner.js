 import React from 'react';
import { Link } from 'react-router-dom';
   
 const Banner = () => {
     return (
        <div className="hero min-h-screen mt-20" style={{ backgroundImage: `url("https://i.pinimg.com/originals/31/b7/43/31b74396212a49ad72183611092173e8.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello Sir</h1>
            <p className="mb-5"><span className='font-semibold'>Welcome my website</span>One of the best places to sell online is with an eCommerce website of your own. It allows for conducting business directly with customers, without any middleman profiting from your sales.</p>
             <Link to='/services' className='btn btn-primary'>go shopping</Link>
          </div>
        </div>
      </div>
    );
 };
 
 export default Banner;