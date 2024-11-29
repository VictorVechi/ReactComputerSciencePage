import styled from "styled-components";
import { theme } from "../../../../../styles/theme";


export const StyledLoginForm = styled.form`
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        height: 45%;
        width: 60%;
        background-color: ${theme.mediumBlueP4};
        border-radius: 2%;
        gap: 10px;

    h2 {
        color: ${theme.white};
    }

    label {
        color: ${theme.white};
    }

    .btn-login {
        color: ${theme.blueP3};
        border: 2px solid ${theme.blueP3};
        transition: 0.3s;
        box-shadow: 5px 5px 0px 0px ${theme.blueP3};
        background-color: ${theme.white};
        height: 10%;
        width: 40%;

    }

    .btn-login:hover {
        border-color: ${theme.yellowP4};
        box-shadow: 0 0 ${theme.yellowP4};
    }

`