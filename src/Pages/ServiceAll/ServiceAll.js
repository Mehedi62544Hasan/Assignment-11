import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import ServiceAllItems from './ServiceAllItems';
 
const ServiceAll = () => {
    useTitle('ServiceAll')
    const services = useLoaderData();
    console.log(services)


    return (
        <div>
            <div className='flex justify-end mr-8 lg:mr-32 my-10'>
                <Link to="/addservice" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                    <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Add Service</span>
                </Link>
            </div>
            {
                services.map(service => <ServiceAllItems
                    key={service._id}
                    service={service}
                ></ServiceAllItems>)
            }
        </div>
    );
};

export default ServiceAll;