import React, { useEffect, useState } from 'react';
import ServiceAllItems from './ServiceAllItems';

const ServiceAll = () => {
  
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
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