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
import AddEstheticians from '../../Pages/Dashboard/AddEstheticians/AddEstheticians';
import ManageEstheticians from '../../Pages/Dashboard/ManageEstheticians/ManageEstheticians';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import AdminRoutes from '../AdminRoutes/AdminRoutes';
import Payment from '../../Pages/Dashboard/Payment/Payment';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
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
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: '/dashboard',
                element: <MyAppointment/>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers/></AdminRoutes>
            },
            {
                path: '/dashboard/addEstheticians',
                element:<AdminRoutes> <AddEstheticians/></AdminRoutes>
            },
            {
                path: '/dashboard/estheticians',
                element: <AdminRoutes><ManageEstheticians/></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment/>,
                loader: ({params})=> fetch(`https://men-s-skincare-server.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])

