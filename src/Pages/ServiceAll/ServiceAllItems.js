import React from 'react';

const ServiceAllItems = ({service}) => {

    const { description, image, model, name, price, rating } = service;

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2">
                    <img
                        src={image}
                        alt=""
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />
                    <svg
                        className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                        viewBox="0 0 20 104"
                        fill="currentColor"
                    >
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-lime-400">
                            {name}
                        </p>
                    </div>
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">{model}</h5>
                    <p className="mb-5 text-gray-800">{description}</p>
                    <div className='flex align-center justify-between'>
                        <p>Rating: {rating}</p>
                        <p className='text-red-500 mr-7'>$ {price}</p>
                    </div>
                    <div className="flex items-center">
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-700 hover:text-red-600"
                        >
                            Learn More
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAllItems;