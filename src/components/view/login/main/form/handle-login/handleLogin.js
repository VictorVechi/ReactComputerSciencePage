import { Password } from "phosphor-react";
import Api from "../../../../../../service/gateway/Api";
import { LocalStorageEnum } from "../../../../../../enum/LocalStorageEnum";
import { saveTokens } from "../../../../../../service/security/token";

export const handleLogin = async (event, email, senha, captchaToken, navigate) => {
    try {
        event.preventDefault();
        const data = {
            email: email,
            password: senha,
            captchaToken: captchaToken
        }

        const api = Api.getInstance();

        const response = await api.postUsuarioLogin(data)
        if (response && response.token) {
            saveTokens(response.token, response.refreshToken);
            localStorage.setItem(LocalStorageEnum.USER_NAME, response.user.name);
            navigate('/dashboard')
        }
    } catch (error) {
        alert('Erro ao fazer login');
    }
}