import React from 'react';

const AddService = () => {
    return (
        <div className='mt-20 mx-5'>
            <form >
                <h2 className='text-3xl'> </h2>
                <h2 className='text-3xl'> </h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="fstname" type="text" placeholder="First Name" className="input input-bordered input-secondary w-full" />
                    <input name="lstname" type="text" placeholder="List Name" className="input input-bordered input-secondary w-full" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered input-secondary w-full" />
                    <input name="email" type="text" placeholder="Your Email" defaultValue="user?.email" className="input input-bordered input-secondary w-full" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-secondary my-4 w-full" placeholder="Your Message"></textarea>
                <div className='flex justify-center'>
                    <a href="#_" type='submit' className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Post Service</span>
                    </a>
                </div>
            </form>
        </div>
    );
};

export default AddService;