import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <h2 className='text-2xl text-center text-danger my-6'>Loading...</h2>
    }
    if(!user){ 
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;
    }
    return children;
}

export default PrivateRoute;