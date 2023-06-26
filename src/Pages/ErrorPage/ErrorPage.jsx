import React, { useContext, useState } from 'react';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Shared/Contexts/AuthContext';
import { IoConstructOutline } from 'react-icons/io5';

const ErrorPage = () => {
  const [errormsg, setErrormsg] = useState("");
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
    const handleLogout =()=>{
        logOut()
        .then(()=>{
            navigate('/')
        })
        .catch(err=>console.log(err))
    }
    
  
    return <div className='min-h-screen flex justify-center items-center'>
        <div >
        <p className='text-3xl text-center font-semibold'>Something went wrong</p>
        <p className='text-2xl text-center text-red-400'>{errormsg}</p>
       
        <h1 className='text-red-400 text-center'>Please Signout and signin again!</h1>
        <div className='text-center mt-4'>
        <button onClick={handleLogout} className='btn btn-error btn-sm mr-2'>Signout</button>
     
        </div>
        </div>
    </div>

};

export default ErrorPage;