import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            
            <div className="card w-96 shadow-2xl bg-base-100">
                    <h2 className='text-3xl font-bold text-center'>Login</h2>
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Login" />
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

export default Login;