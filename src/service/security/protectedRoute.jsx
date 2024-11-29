import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, isAuthenticated, ...rest }) => {
    if (!isAuthenticated.isAuth) {
        console.log(isAuthenticated);
        return <Navigate to="/login" />;
    }
    return <Component {...rest} admin={isAuthenticated.isAdmin} />;
};

export default ProtectedRoute;


