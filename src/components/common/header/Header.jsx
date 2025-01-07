import React, { useEffect, useState } from "react";
import { HeaderStyled } from "./header.styles";
import Logo from "../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import isAuthenticated from "../../../service/security/verifyAuth";
import { logout } from "./header.service";


const Header = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isDashboard, setIsDashboard] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const auth = await isAuthenticated();
            setIsAuth(auth);
        };
        checkAuth();
    }, []);
    
    useEffect(() => {
        if (window.location.pathname === '/dashboard') {
            setIsDashboard(true);
        }
    }, [window.location.pathname]);

    return (
        <HeaderStyled>
            <img src={Logo} alt='Logotipo do App' className="logo" />
            <nav>
                <ul>
                    <NavLink to="/">
                        <li>
                            Home
                        </li>
                    </NavLink>
                    <NavLink to="/quem-somos">
                        <li>
                            Quem Somos
                        </li>
                    </NavLink>
                    {isAuth && !isDashboard &&
                        <NavLink to="/dashboard">
                            <li className="login-button">
                                Dashboard
                            </li>
                        </NavLink>}
                    {!isAuth &&
                        <NavLink to="/login">
                            <li className="login-button">
                                Login
                            </li>
                        </NavLink>}
                    {isAuth && isDashboard &&
                        <NavLink to="/" onClick={logout}>
                            <li className="login-button">
                                Logout
                            </li>
                        </NavLink>}
                </ul>
            </nav>
        </HeaderStyled>
    )
}

export default Header;