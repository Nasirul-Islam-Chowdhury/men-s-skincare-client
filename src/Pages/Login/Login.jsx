import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Shared/Contexts/AuthContext';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';

const Login = () => {
    const {userSignin, googlesignin, facebookSignin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState("");
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        event.target.reset();
        
        userSignin(email, password)
        .then(res => {          
            console.log(res.user)
          
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }
    const handleGoogleSignin = ()=>{
        googlesignin()
        .then(user => {
            console.log(user.user);
          
        })

        .catch(error=>console.log(error))
    }
    const handlefacebookSignin = ()=>{
        facebookSignin()
        .then(res =>{
            console.log(res.user)
            
            navigate(from, {replace: true})

        })
        .catch(error=>console.log(error))
    }
    return (
        <div className=" container my-20">
        <div className='w-full flex justify-center mx-auto rounded-2xl max-w-lg'>
            <form onSubmit={handleLogin} className=" w-full  shadow-2xl bg-base-100 py-10 rounded-2xl">
                <h1 className="text-4xl font-bold text-center">Signin</h1>
                <div className="w-full p-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="text" placeholder="email" className="w-full input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="w-full input input-bordered" required/>
                        <p className='text-red-600 py-2'>{error}</p>
                       
                    </div>
                   
                    <div className="form-control mt-2">
                        <input className="btn bg-black border-none text-white" type="submit" value="Signin" />
                    </div>
                    <div>
                    <div className="divider">OR</div>
                        <div className="my-6 space-y-2">
                    <button
                        onClick={handleGoogleSignin}
                        aria-label="Login with Google"
                        type="button"
                        className="flex items-center gap-3 justify-center  w-full p-2 border rounded-md "
                    >
                     <FaGoogle className='w-6 h-6'/>
                        <p>Login with Google</p>
                    </button>
                </div>
                    </div>
                    <p className="text-center">New to Shine Men? <Link className='text-black font-bold' to='/signup'>Signup</Link></p>
                </div>
               
            </form>
     
        </div>
    </div>
    );
};

export default Login;