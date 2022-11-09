import React, { useEffect, useState } from 'react';
import ServiceItems from './ServiceItems';

const Services = () => {
    const [users, setUsers] = useState([])


    useEffect(()=>{
        fetch('items.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center mt-10'><span className='text-orange-500'>Ryan Pierse</span> Services</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 py-5 my-8 gap-6'>
            {
                users.map(user => <ServiceItems
                    key={user._id}
                    user={user}
                ></ServiceItems>)
            }
            </div>
        </div>
    );
};

export default Services;