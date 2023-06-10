import React, { useContext } from 'react';
import { AuthContext } from '../../Shared/Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loader} = useContext(AuthContext)
  if(user){
    return children;
  }
  if(loader){
    return <Loading/>
  }
  return <Navigate to="/signin" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;