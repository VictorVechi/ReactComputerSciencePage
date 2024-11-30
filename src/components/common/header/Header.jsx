import React, { useEffect, useState } from "react";
import { HeaderStyled } from "./header.styles";
import Logo from "../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [scrolled, setScrolled] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollQtd = window.scrollY;
            if (scrollQtd > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <HeaderStyled className={scrolled ? "scrolled" : ""}>
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
                    <NavLink to="/login">
                        <li className="login-button">
                            Login
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </HeaderStyled>
    )
}

export default Header;