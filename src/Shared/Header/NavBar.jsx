import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const menuItems = <>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Dashboard</Link>
        <Link>Signin</Link>
   
    </>
    return (
        <div className=" ">
        <div className='navbar container'>
        <div className="navbar-start items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
              {menuItems}
            </ul>
          </div>
         
            <div>
            <h2 className='lg:text-3xl text-xl font-bold font-primary '>Shine Men
           
           </h2>
           <span><small className='text-sm italic'>Men's Skin Care</small></span>
            </div>
            
        
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center gap-10 text-xl font-primary">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
        </div>
      </div>
    );
};

export default NavBar;