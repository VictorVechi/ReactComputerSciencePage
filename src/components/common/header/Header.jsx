import React, { useEffect, useState } from "react";
import { HeaderStyled } from "./header.styles";
import Logo from "../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import isAuthenticated from "../../../service/security/verifyAuth";


const Header = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const auth = await isAuthenticated();
            setIsAuth(auth);
        };
        checkAuth();
    }, []);

    return (
        <HeaderStyled>
            <img src={Logo} alt='Logotipo do App' className="logo" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/quem-somos">
                            Quem Somos
                        </NavLink>
                    </li>   
                    {!isAuth && 
                    <li className="login-button">
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>}
                    {isAuth && 
                    <li className="login-button">
                        <NavLink to="/dashboard">
                            Dashboard
                        </NavLink>
                    </li>}
                </ul>
            </nav>
        </HeaderStyled>
    )
}

export default Header;