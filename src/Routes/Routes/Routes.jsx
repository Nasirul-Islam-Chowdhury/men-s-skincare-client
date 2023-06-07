import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout/MainLayout';
import Home from '../../Components/Home/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

