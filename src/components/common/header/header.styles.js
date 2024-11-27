import styled from "styled-components";
import { theme } from "../../../styles/theme";


export const HeaderStyled = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.blueP3};
    border-bottom: 5px solid ${theme.darkpurpleP2};

    h1 {
        color: ${theme.white};
        margin-left: 1rem;
    }

    .logo {
        height: 100%;
        align-self: flex-start;
    }

    nav {
        display: flex;
        width: 45%;
        flex-direction: row;
    }

    nav ul {
        display: flex;
        width: 100%;
        justify-content: space-around;
        color: ${theme.white};
        font-weight: 600;
        font-size: 16pt;
    }

    nav ul li {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 175px;
        height: 45px;
        border: 2px solid ${theme.white};
        transition: 0.3s;
        box-shadow: 5px 5px 0px 0px ${theme.white};
    }

    nav ul li:hover {
        border-color: ${theme.darkpurpleP2};

        box-shadow: 0 0 ${theme.orangeP3};
        color: ${theme.blueP3};
        background-color: ${theme.white};
    }


    .login-button {
        border: 2px solid ${theme.white};
        transition: 0.3s;
        box-shadow: 5px 5px 0px 0px ${theme.white};
        background-color: ${theme.purpleP3};
    }

    .login-button:hover {
        border-color: ${theme.purpleP3};
        box-shadow: 0 0 ${theme.purpleP3};
        color: ${theme.purpleP3};
        background-color: ${theme.white};
    }
`