import React, { useEffect, useState} from "react";
import { HeaderStyled } from "./header.styles";
import Logo from "../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [scrolled, setScrolled] = React.useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollQtd = window.scrollY;
            if(scrollQtd > 200) {
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
                    <li className="login-button">
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </HeaderStyled>
    )
}

export default Header;