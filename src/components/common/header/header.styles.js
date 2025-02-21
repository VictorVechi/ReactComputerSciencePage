import styled from "styled-components";
import { theme } from "../../../styles/theme";


export const HeaderStyled = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.white};
    border-bottom: 5px solid ${theme.darkpurpleP2};

    h1 {
        color: ${theme.white};
        margin-left: 1rem;
    }

    .logo {
        height: 100%;
        align-self: flex-start;
    }

    .menu-button {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        z-index: 20;
        transition: transform 0.2s ease, color 0.2s ease;
    }

    .menu-button:hover {
        transform: scale(1.1);
        color: ${theme.orangeP3};
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
        color: ${theme.blueP3};
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
        border: 2px solid ${theme.blueP3};
        transition: 0.3s;
        box-shadow: 5px 5px 0px 0px ${theme.blueP3};
    }

    nav ul li:hover {
        border-color: ${theme.darkpurpleP2};

        box-shadow: 0 0 ${theme.orangeP3};
        color: ${theme.blueP3};
        background-color: ${theme.white};
    }


    .login-button {
        border: 2px solid ${theme.darkpurpleP2};
        transition: 0.3s;
        box-shadow: 5px 5px 0px 0px ${theme.darkpurpleP2};
        background-color: ${theme.white};
        color: ${theme.darkpurpleP2};
    }

    .login-button:hover {
        border-color: ${theme.orangeP3};
        box-shadow: 0 0 ${theme.orangeP3};
        color: ${theme.orangeP3};
        background-color: ${theme.white};
    }

    @media screen and (max-width: 768px) {
    .logo {
        display: none;
    }

    .menu-button {
        display: block;
        position: relative;
        z-index: 30; 
    }

    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.9);
        display: none; 
        justify-content: center;
        align-items: center;
        z-index: 20;
    }

    nav.open {
        display: flex;
    }

    nav ul {
        display: flex;
        flex-direction: column;
        gap: 30px; 
        text-align: center;
        justify-content: center;
        align-items: center; 
        height: 100%; 
    }

    nav ul li {
        width: 250px; 
        padding: 20px; 
        font-size: 22px; 
        font-weight: bold; 
        border-radius: 15px; 
        transition: all 0.3s ease-in-out;
    }

    nav ul li:hover {
        transform: scale(1.05);
        background-color: ${theme.darkpurpleP2};
        color: ${theme.white};
    }
}

`