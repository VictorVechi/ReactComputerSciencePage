import React, { useState } from "react";
import { StyledLoginForm } from "./loginForm.styles";
import Button from "../../../../common/button/Button";
import Input from "../../../../common/input/Input";
import { NavLink, useNavigate } from "react-router-dom";
import { handleLogin } from "./handle-login/handleLogin";
import { HouseLine } from "phosphor-react";
import { theme } from "../../../../../styles/theme";


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate()

    return (
        <StyledLoginForm >
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
            <Button texto={'Entrar'} className='btn-login' onClick={(e) => handleLogin(e, email, senha, navigate)} />
        </StyledLoginForm>
    );
}; export default LoginForm;