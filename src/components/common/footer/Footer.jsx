import React from "react";
import { GithubLogo, InstagramLogo } from "phosphor-react";
import { FooterStyled, FooterText, SocialLinks } from "./footer.styles";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <FooterStyled>
            <FooterText>
                <p>Desenvolvedores</p>
                <p>Erico Meger</p>
                <p>Igor Pinto</p>
                <p>Victor Vechi</p>
                <p>Eros Lunardon</p>
                <p>Todos os direitos reservados &copy; 2024.</p>
            </FooterText>
            <FooterText>
                <p>Precisa de Ajuda?</p>
                <p>
                    <NavLink to={"/quem-somos"}>
                        <span>Quem somos</span>
                    </NavLink>
                </p>
                <p><span>WhatsApp: 41 - 920045703</span></p>
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