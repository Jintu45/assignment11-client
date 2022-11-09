import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceItems from './ServiceItems';

const Services = () => {
    const [users, setUsers] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/services')
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
            <div className='text-center'>
            <Link to='/allservices'>
                <button className='btn bg-orange-500 text-white py-1 px-8 shadow-2xl border-none mb-12'>See all</button>
            </Link>
            </div>
        </div>
    );
};

export default Services;