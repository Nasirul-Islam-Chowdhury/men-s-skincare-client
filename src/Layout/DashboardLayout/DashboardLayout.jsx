import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTitle } from "../../Shared/Title/useTitle";
import NavBar from "../../Shared/Header/NavBar";
import useAdmin from "../../Shared/Hooks/useAdmin";
import { AuthContext } from "../../Shared/Contexts/AuthContext";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email);

  useTitle("Dashboard");
  return (
    <div>
      <NavBar />
      <div className="drawer lg:drawer-open container  mt-5">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content min-h-screen w-full lg:overflow-x-auto overflow-x-scroll">
          <Outlet />
          
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-80 h-full bg-[#F4F3EE]">
            {/* Sidebar content here */}
            <li>
              <Link className="text-lg p-3">My Appointment</Link>
            </li>
              {
                isAdmin &&
            <li>
                <Link to="/dashboard/addEstheticians" className="text-lg p-3">
                Add Estheticians
              </Link>
             </li>
              }
             
             {
               isAdmin &&
            <li>
              <Link to="/dashboard/allusers" className="text-lg p-3">
              Manage Users
            </Link>
            </li>
             }
           {
             isAdmin &&
            <li>
            <Link to="/dashboard/estheticians" className="text-lg p-3">
            Manage Estheticians
          </Link>
            </li>
           }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
