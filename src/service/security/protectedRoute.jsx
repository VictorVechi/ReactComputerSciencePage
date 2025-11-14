import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import isAuthenticated from './verifyAuth';
import { getToken, isTokenExpired, decodeToken } from './token';

const ProtectedRoute = ({ element: Component, requiredRole }) => {
    const [authStatus, setAuthStatus] = useState(null);
    const location = useLocation();

    const token = getToken();
    if (!token || isTokenExpired(token)) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (requiredRole) {
        const payload = decodeToken(token);
        if (payload?.cargo !== requiredRole) {
            return <Navigate to="/" replace />;
        }
    }

    useEffect(() => {
        let mounted = true;
        const checkAuth = async () => {
            const status = await isAuthenticated();
            if (mounted) setAuthStatus(status);
        };
        checkAuth();
        return () => { mounted = false; };
    }, []);

    if (authStatus === null) {
        return <div>Carregando...</div>;
    }

    if (!authStatus) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Component />;
};

export default ProtectedRoute;


