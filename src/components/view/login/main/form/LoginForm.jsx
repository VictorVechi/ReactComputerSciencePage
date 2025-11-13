import React, { useState } from "react";
import { StyledLoginForm } from "./loginForm.styles";
import Button from "../../../../common/button/Button";
import Input from "../../../../common/input/Input";
import { NavLink, useNavigate } from "react-router-dom";
import { handleLogin } from "./handle-login/handleLogin";
import { HouseLine } from "phosphor-react";
import { theme } from "../../../../../styles/theme";
import ReCaptcha from "../../../../common/captcha/ReCaptcha";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [captchaToken, setCaptchaToken] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        
        if (!captchaToken) {
            alert('Validando CAPTCHA, aguarde...');
            return;
        }
        
        handleLogin(e, email, senha, captchaToken, navigate);
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    return (
        <StyledLoginForm onSubmit={onSubmit}>
            <NavLink to={"/"}>
                <HouseLine size={64} color={theme.white} />
            </NavLink>
            <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <Input
                tipo={"email"}
                valor={email}
                nome={'email'}
                placeholder={'usuario@gmail.com'}
                required
                func={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="senha">Senha</label>
            <Input
                tipo={"password"}
                valor={senha}
                nome={'senha'}
                required
                placeholder={'●●●●●●●'}
                func={(e) => setSenha(e.target.value)}
            />
            <ReCaptcha onChange={handleCaptchaChange} />
            <Button texto={'Entrar'} type="submit" className='btn-login' />
        </StyledLoginForm>
    );
};

export default LoginForm;