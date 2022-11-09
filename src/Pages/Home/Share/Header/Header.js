import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo/logo.png'
const Header = () => {
    return (
        <div className="navbar h-28 w-full">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        
                        </div>
                        <img src={logo} alt="" />
                        <a className="btn btn-ghost normal-case text-2xl">SK Photography</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <Link  className='text text-stone-600 font-semibold  text mr-5' to='/'>Home</Link>
                            <Link  className='text text-stone-600 font-semibold  text mr-5'>Services</Link>
                            <Link to='/blog' className='text text-stone-600 font-semibold  text mr-5'>Blogs</Link>
                        </ul>
                    </div>
                   <div className="navbar-end">
                   <Link to='/login'>
                        <button className='btn btn-primary py-2 px-6'>Log In</button>
                   </Link>
                    </div>
        </div>
    );
};

export default Header;