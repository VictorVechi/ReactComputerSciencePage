import styled from "styled-components";
import { theme } from "../../../styles/theme";


export const HeaderStyled = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.blueP3};
    
    h1 {
        color: ${theme.white};
        margin-left: 1rem;
    }

    .logo {
        width: 100%;
        height: 100%;
    }
`