import React, { useEffect, useState } from "react";
import { HeaderStyled } from "./header.styles";
import Logo from "../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import isAuthenticated from "../../../service/security/verifyAuth";
import { logout } from "./header.service";
import { List, X } from "phosphor-react"; 


const Header = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isDashboard, setIsDashboard] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <List size={24} />}
            </button>


            <nav className={menuOpen ? 'open' : ''}>
                <ul>
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>
                        <li>
                            Home
                        </li>
                    </NavLink>
                    <NavLink to="/quem-somos" onClick={() => setMenuOpen(false)}>
                        <li>
                            Quem Somos
                        </li>
                    </NavLink>
                    {isAuth && !isDashboard &&
                        <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>
                            <li className="login-button">
                                Dashboard
                            </li>
                        </NavLink>}
                    {!isAuth &&
                        <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                            <li className="login-button">
                                Login
                            </li>
                        </NavLink>}
                    {isAuth && isDashboard &&
                        <NavLink to="/" onClick={() => {
                            logout();
                            setMenuOpen(false);
                        }}>
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