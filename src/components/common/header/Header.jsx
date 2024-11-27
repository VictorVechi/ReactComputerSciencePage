import React from "react";
import { HeaderStyled } from "./header.styles";
import Logo from "../../../assets/img/logo.svg";


const Header = () => {
    return (
        <HeaderStyled>
            <img src={Logo} alt='Logotipo do App' className="logo" />
        </HeaderStyled>
    )
}

export default Header;