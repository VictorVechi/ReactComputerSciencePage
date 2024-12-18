import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FooterStyled = styled.footer`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.purpleP1};
    color: ${theme.white};
`

export const FooterText = styled.p`
    margin-left: 20px;
    font-size: 1.0rem;
`
export const SocialLinks = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

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
            color: ${theme.purpleP3}; 
        }
    }
`;