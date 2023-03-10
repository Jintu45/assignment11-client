import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleCreateUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => alert(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            
            <div className="card w-96 shadow-2xl bg-base-100">
                    <h2 className='text-3xl font-bold text-center mt-3'>Registration</h2>
                <form onSubmit={handleCreateUser} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Register" />
                    </div>
                </form>

                <div className='text-center mb-5'>
                    <Link>
                        <button className='border-transparent rounded-xl py-2 px-8 bg-stone-500 text-white'>continue with google</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;