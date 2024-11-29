import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import isAuthenticated from './verifyAuth';

const ProtectedRoute = ({ element: Component }) => {
    const [authStatus, setAuthStatus] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            const status = await isAuthenticated();
            setAuthStatus(status);
        };

        checkAuth();
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


