 import React from 'react';
 import logo from '../../../assets/banner/IMG_20221108_124933.jpg'
 
 const Banner = () => {
    return (
        <div className="hero min-h-screen mt-20" style={{ backgroundImage: `url("https://i.pinimg.com/originals/31/b7/43/31b74396212a49ad72183611092173e8.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
 };
 
 export default Banner;