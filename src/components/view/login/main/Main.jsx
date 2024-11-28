import React from "react";
import { StyledMainLogin } from "./main.styles";
import { House, Link } from "phosphor-react";
import LoginForm from "./form/LoginForm";

const MainLogin = () => {  

    return (
        <StyledMainLogin>
            <div className="form-section">
                <LoginForm />
            </div>
            <div className="image-section" />
        </StyledMainLogin>
    );
}; export default MainLogin;