import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout/MainLayout';
import Home from '../../Pages/Home/Home';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import Signup from '../../Pages/Signup/Signup';

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
            }
        ]
    }
])

