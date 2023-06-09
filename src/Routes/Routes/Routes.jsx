import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout/MainLayout';
import Home from '../../Pages/Home/Home';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import Signup from '../../Pages/Signup/Signup';
import Login from '../../Pages/Login/Login';
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import MyAppointment from '../../Pages/Dashboard/MyAppointment/MyAppointment';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/appointment',
                element: <Appointment/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/signin',
                element: <Login/>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <DashboardLayout/>,
        children:[
            {
                path: '/dashboard',
                element: <MyAppointment/>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers/>
            }
        ]
    }
])

