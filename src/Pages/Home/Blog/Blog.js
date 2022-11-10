import React from 'react';
import owner from '../../../assets/owner/DSC_0009~2.JPG'

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-20">
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                <div className="mb-4">
                    <p
                         aria-label="Article"
                        className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                    >
                        THE BEST ONLINE SITES TO BUY YOUR PRODUCTS 
                    </p>
                </div>
                <p className="text-base text-gray-700 md:text-lg">
                Before the advent of the internet and ecommerce, yard sales and newspapers were the only places where you could buy your stuff without owning a storefront. Now, with all of the different buying websites and apps available, anybody can make extra cash buying just about anything, without having to leave your house.
                </p>
            </div>
            <div className="mb-10 sm:text-center">
                <a href="/" aria-label="Author" className="inline-block mb-1">
                    <img
                        alt="avatar"
                        src={owner}
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                </a>
               <p className='font-semibold'>Mehedi Hasan</p>
            </div>
            
        </div>
    );
};

export default Blog;