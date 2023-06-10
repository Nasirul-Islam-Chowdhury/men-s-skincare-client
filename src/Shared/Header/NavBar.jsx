import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { BiFoodMenu } from "react-icons/bi";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const menuItems = (
    <>
      <Link className="lg:p-0 p-2" to="/">
        Home
      </Link>
      <Link className="lg:p-0 p-2" to="/appointment">
        Appointment
      </Link>
      <Link className="lg:p-0 p-2" to="/dashboard">
        Dashboard
      </Link>

      {!user && (
        <Link className="lg:p-0 p-2" to="/signup">
          Signup
        </Link>
      )}
    </>
  );
  const handleLogout = () => {
    logOut()
      .then((res) => {

      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" ">
      <div className="navbar container">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52 z-50 bg-[#F4F3EE]"
            >
              {menuItems}
            </ul>
          </div>

          <div>
            <h2 className="lg:text-3xl text-xl font-bold font-primary leading-none">
             <Link to="/">Shine Men</Link>
            </h2>
            <span>
              <small className="text-sm italic leading-none">Men's Skin Care</small>
            </span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="flex lg:flex-row flex-col justify-center gap-10 text-xl font-primary">
            {menuItems}
          </ul>
        </div>
        
        <div className="navbar-end">
      
          {user ? (
            <Link onClick={handleLogout} className="btn btn-outline">
              Signout
            </Link>
          ) : (
            <Link className="btn btn-outline" to="/signin">
              Signin
            </Link>
          )}

{
  location.pathname == "/dashboard" &&
  <label
            htmlFor="my-drawer-2"
            className=" drawer-button coursor-pointer lg:hidden"
          >
            <BiFoodMenu className="w-8 h-8 mx-3 "/>
          </label>
}
           
        </div>
      </div>
    </div>
  );
};

export default NavBar;
