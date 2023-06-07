import React from 'react';
import NavBar from '../../Shared/Header/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const MainLayout = () => {
    return (
       <>
       <NavBar/>
       <Outlet/>
       <Footer/>
       </>
    );
};

export default MainLayout;