import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <h2 className='text-2xl'>Loading...</h2>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} replace></Navigate>;
}

export default PrivateRoute;