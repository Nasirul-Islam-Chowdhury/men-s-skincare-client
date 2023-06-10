import React, { useContext, useState } from 'react';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Shared/Contexts/AuthContext';

const ErrorPage = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
    const handleLogout =()=>{
        logOut()
        .then(()=>{
            navigate('/')
        })
        .catch(err=>console.log(err))
    }
    const [errormsg, setErrormsg] = useState("");
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
       
      if (error.status === 404) {
        return setErrormsg("This page doesn't exist!")
      }
  
      if (error.status === 401) {
        return setErrormsg("You aren't authorized to see this")
      }
  
      if (error.status === 503) {
        return setErrormsg("Looks like our API is down")
      }
  
      if (error.status === 418) {
        return setErrormsg("🫖")
      }
    }
  
    return <div className='min-h-screen flex justify-center items-center'>
        <div >
        <p className='text-3xl text-center font-semibold'>Something went wrong</p>
        <p className='text-2xl text-center text-red-400'>{errormsg}</p>
        <h1 className='text-red-400 text-xl text-center'>{error.message}</h1>
        <h1 className='text-red-400 text-center'>Please Signout and signin again!</h1>
        <div className='text-center mt-4'>
        <button onClick={handleLogout} className='btn btn-error btn-sm mr-2'>Signout</button>
        <button onClick={()=>navigate('/signin')} className='btn btn-primary btn-sm'>Signin</button>
        </div>
        </div>
    </div>

};

export default ErrorPage;