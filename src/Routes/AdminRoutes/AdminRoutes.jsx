import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Shared/Contexts/AuthContext';
import useAdmin from '../../Shared/Hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';

const AdminRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};
 


export default AdminRoutes;