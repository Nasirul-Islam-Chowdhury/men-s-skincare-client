import React from "react";
import { IoLocation} from "react-icons/io5";
import {FaPhone, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import {MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#252422] text-base-200 pt-28">
      <div className="container flex lg:flex-row flex-col items-center">
        <div className="lg:w-2/5 ">
          <h1 className="text-4xl font-bold lg:text-start text-center" >Shine Men</h1>
     <h4  className="lg:text-start text-center">
     <small className="lg:text-start text-center">mens skin care</small>
     </h4>
          <p className="my-6 lg:w-2/3 w-full  lg:text-start  text-center">
          There are lots of fun and exciting components of being a beauty editor, but as much as we love sitting at our desks and swatching
          </p>
        
        </div>
        <div className="lg:w-1/5">
          <h1 className="text-xl font-bold font-primary italic lg:text-start text-center">Navigation</h1>
          <div className="flex flex-col gap-1 my-5 lg:items-start items-center">
            <h1>
              <Link to="/">
              Home
              </Link>
            </h1>
            <h1>
              <Link to="/appointment">
             Appointment
              </Link>
            </h1>
            <h1>
              <Link to="/dashboard">
              My Appointment
              </Link>
            </h1>
            <h1>
              <Link to="/signup">
              Register
              </Link>
            </h1>
           
          </div>
          
        </div>
        <div className="lg:w-1/5">
          <h1 className="text-xl font-bold font-primary italic lg:text-start text-center">Quick Link</h1>
          <div className="flex flex-col gap-1 my-5 lg:items-start items-center">
            <h1>
              <Link to="/">
              Home
              </Link>
            </h1>
            <h1>
              <Link to="/appointment">
             Appointment
              </Link>
            </h1>
            <h1>
              <Link to="/dashboard">
              My Appointment
              </Link>
            </h1>
            <h1>
              <Link to="/signup">
              Register
              </Link>
            </h1>
           
          </div>
        </div>
        <div className="lg:w-1/5">
          <h1 className="text-xl font-bold font-primary italic lg:text-start text-center">Services</h1>
          <div className="flex flex-col gap-1 my-5 lg:items-start items-center">
            <h1>
              <Link to="/">
              Home
              </Link>
            </h1>
            <h1>
              <Link to="/appointment">
             Appointment
              </Link>
            </h1>
            <h1>
              <Link to="/dashboard">
              My Appointment
              </Link>
            </h1>
            <h1>
              <Link to="/signup">
              Register
              </Link>
            </h1>
           
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-between justify-center  items-center container my-10">
      <div className="flex  items-center lg:justify-start gap-3 lg:w-1/5  justify-center my-4" >
            <IoLocation className="w-8 h-8 " />
            <h2 className="font-bold font-primary text-lg italic">
             
              sylhet, Bangladesh
            </h2>
          </div>
          <div  className="flex  items-center lg:justify-start gap-3 lg:w-1/5  justify-center my-4">
            <FaPhone className="w-6 h-6" />
            <span className="font-bold font-primary text-lg italic">
              {" "}
             01644113296
            </span>
          </div>
          <div className="flex  items-center lg:justify-start gap-3 lg:w-1/5  justify-center my-4">
            <MdEmail className="w-8 h-8" />
            <h2 className="font-bold font-primary  italic text-center">
             
              nasirchy252@gmail.com
            </h2>
          </div>
          <div className="flex items-center justify-center gap-8 mx-4 my-2 ">
            <FaFacebook className="w-6 h-6"/>
            <FaYoutube className="w-6 h-6"/>
            <FaTwitter className="w-6 h-6"/>
          </div>
      </div>
      <hr className="container"/>
      <p className="text-center container
       py-20">© 2023 shinemen • All Rights Reserved By Nasirul Islam Chowdhury</p>
    </div>
  );
};

export default Footer;
