import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTitle } from '../../Shared/Title/useTitle';
import NavBar from '../../Shared/Header/NavBar';

const DashboardLayout = () => {
    useTitle("Dashboard")
    return (
<div>
    <NavBar/>
<div className="drawer lg:drawer-open container mt-5">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
   <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu w-80 h-full ">
      {/* Sidebar content here */}
      <li>
        <Link className='text-lg'>My Appointment</Link>
      </li>
    <li>
    <Link to="/dashboard/allusers" className='text-lg'>All Users</Link>
    </li>
    </ul>
  
  </div>
</div>
</div>
    );
};

export default DashboardLayout;