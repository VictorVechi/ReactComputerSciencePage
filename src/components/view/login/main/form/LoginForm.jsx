import React, { useState } from "react";
import { StyledLoginForm } from "./loginForm.styles";
import Button from "../../../../common/button/Button";
import Input from "../../../../common/input/Input";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "./handle-login/handleLogin";


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate()

    return (
        <StyledLoginForm >
            <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <Input
                tipo={"email"}
                valor={email}
                nome={'email'}
                placeholder={'igorvechi@gmail.com'}
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
            <Button texto={'Entrar'} className='btn-login' onClick={(e) => handleLogin(e, email, senha)} />
        </StyledLoginForm>
    );
}; export default LoginForm;