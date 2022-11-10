import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ReviewForm = () => {
    const {_id, title} = useLoaderData()
    const {user} = useContext(AuthContext)


    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const image = form.image.value;
        const message = form.message.value;


        const review = {
            serviceId: _id,
            name, 
            email, 
            address,
            image,
            message,
            reviewTitle: title
        }

        fetch('https://assignment11-server-jet.vercel.app/reviews',{
            method: 'POST',
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('review added successfully')
                form.reset()
            }
            
        })
        .catch(err => alert(err))
    }

    return (
        <div className='ml-5'>
        <h2 className='text-3xl my-3 font-medium w-1/2 text-center'>Add a Review</h2>
        <div className='sm:w-1/2 my-8 text-center bg-gray-200 p-10 rounded-md '>
            <h4 className='text-xl font-semibold mb-4'>{title}</h4>
            <form onSubmit={handleReview}>
                <div className='sm:flex justify-between'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.name} name='name' placeholder="Name" className="input input-bordered sm:w-56" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name='address'placeholder="address" className="input input-bordered sm:w-56" required/>
                    </div>
                </div>
                <div className='sm:flex justify-between mt-3'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name='image' placeholder="Image URL" className="input input-bordered sm:w-56" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered sm:w-56" readOnly />
                    </div>
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='message' className="textarea" placeholder="Message"></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-success' type="submit" value="Reveiw Add" />
                </div>
            </form>
            </div>
        </div>
    );
};

export default ReviewForm;