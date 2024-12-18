import React from "react";
import { GithubLogo, InstagramLogo } from "phosphor-react";
import { FooterStyled, FooterText, SocialLinks } from "./footer.styles";

const Footer = () => {
    return (
        <FooterStyled>
            <FooterText>
                &copy; 2024 Érico Meger, Igor Pinto e Victor Vechi <br />
                Todos os direitos reservados.
            </FooterText>
            <SocialLinks>
                <a href="https://github.com/VictorVechi/ReactComputerSciencePage" target="_blank" rel="noreferrer">
                    <GithubLogo size={30} weight="light" />
                </a>
                <a href="https://www.instagram.com/ifprpinhaisoficial/" target="_blank" rel="noreferrer">
                    <InstagramLogo size={30} weight="light" />
                </a>
            </SocialLinks>
        </FooterStyled>
    )
} 

export default Footer;