import React from "react";
import { HeaderStyled } from "./header.styles";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <HeaderStyled>
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
                    <li>
                        <NavLink to="/criar-post">
                            Criar Post
                        </NavLink>    
                    </li>   
                    <li>
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