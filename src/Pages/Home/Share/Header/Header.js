import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-stone-400 w-full">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <Link  className='text text-stone-100 font-semibold  text mr-5' to='/'>Home</Link>
                            <Link  className='text text-stone-100 font-semibold  text mr-5'>Services</Link>

                        </ul>
                    </div>
                   <div className="navbar-end">
                   <Link to='/login'>
                        <button className='btn btn-primary py-2'>Log In</button>
                   </Link>
                    </div>
        </div>
    );
};

export default Header;