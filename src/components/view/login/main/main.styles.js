import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const StyledMainLogin = styled.main`
    display: flex;
    justify-content: space-between;

    .form-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60vw;
        height: 100vh;
        padding: 0 20px;
    }

    .image-section {

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100vh;
        background-image: url('/loginPageImage.jpeg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        padding: 0 20px;
        color: ${theme.white};
        width: 100%;
    }

    @media screen and (max-width: 768px) {

        .form-section {
            width: 100vw;
            padding: 0 10px;
        }
        .image-section {
            display: none;
        }

    }

`