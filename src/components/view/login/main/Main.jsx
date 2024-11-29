import React from "react";
import { StyledMainLogin } from "./main.styles";
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