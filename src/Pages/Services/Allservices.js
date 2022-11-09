import React, { useEffect, useState } from 'react';
import AllserviceItems from './AllserviceItems';

const Allservices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center mt-10'><span className='text-orange-500'>Ryan Pierse</span> Services</h1>
            </div>
           <div className='grid grid-cols-1 lg:grid-cols-3 py-5 my-8 gap-6'>
           {
                services.map(service => <AllserviceItems
                    key={service._id}
                    service={service}
                ></AllserviceItems>
                )
            }
           </div>
        </div>
    );
};

export default Allservices;