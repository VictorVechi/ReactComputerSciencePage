import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FooterStyled = styled.footer`
    width: 100%;
    height: 13vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${theme.blueP3};
    color: ${theme.white};
`

export const FooterText = styled.p`
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    margin-left: 20px;
    font-size: 1.0rem;
    span {
        text-decoration: underline;
    }
`
export const SocialLinks = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    a {
        color: ${theme.white};
        margin-left: 15px;
        text-decoration: none;
        font-size: 1.2rem;
        display: flex;
        align-items: center;

        svg {
            margin-right: 26px;  
            transition: color 0.3s;
        }

        &:hover svg {
            color: ${theme.orangeP3}; 
        }
    }
`;