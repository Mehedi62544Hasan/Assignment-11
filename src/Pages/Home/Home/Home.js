import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Blog2 from '../Blog2/Blog2';
import Service from '../Service/Service';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Blog></Blog>
            <Service></Service>
            <Blog2></Blog2>
        </div>
    );
};

export default Home;