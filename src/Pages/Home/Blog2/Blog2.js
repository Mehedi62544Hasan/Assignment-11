import React from 'react';
import { Link } from 'react-router-dom';

const Blog2 = () => {
    return (
        <div className="relative w-full h-full my-20">
            <div className="absolute hidden w-full bg-gray-50 lg:block h-96" />
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Affordable</span>
                        </span>{' '}
                        for everyone
                    </h2>
                 </div>
                <div className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
                    <div>
                        <div className="p-8 bg-gray-900 rounded">
                            <div className="mb-4 text-center">
                                 <div className="flex items-center justify-center">
                                    <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                        Discount
                                    </p>
                                 </div>
                            </div>
                            <ul className="mb-8 space-y-2">
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">10000+ / 5%</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">50000+ / 8%</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">100000+ / 10%</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">200000+ / 20%</p>
                                </li>
                            </ul>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                               <Link to='/services'>Get Now</Link>
                            </button>
                        </div>
                        <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                        <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                        <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                    </div>
                    <div>
                        <div className="p-8 bg-gray-900 rounded">
                            <div className="mb-4 text-center">
                                
                                <div className="flex items-center justify-center">
                                    <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                        Free
                                    </p>
                                 </div>
                            </div>
                            <ul className="mb-8 space-y-2">
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">Phone 10 = 1 free</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">Laptop 5 = 1 free</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">Tablet 6 = 1 free</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3">
                                        <svg
                                            className="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-300">Watch 3 = 1 free</p>
                                </li>
                            </ul>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                            >
                               <Link to='/services'>Get Now</Link>
                            </button>
                        </div>
                        <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                        <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                        <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog2;