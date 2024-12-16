import { Password } from "phosphor-react";
import Api from "../../../../../../service/gateway/Api";
import { LocalStorageEnum } from "../../../../../../enum/LocalStorageEnum";

export const handleLogin = async (event, email, senha, navigate) => {
    try {
        event.preventDefault();
        const data = {
            email: email,
            password: senha
        }

        const api = Api.getInstance();

        const response = await api.postUsuarioLogin(data)
        console.log('response', response)
        if (response && response.token) {
            console.log('Login efetuado com sucesso:', response);
            localStorage.setItem(LocalStorageEnum.TOKEN_KEY, response.token);
            localStorage.setItem(LocalStorageEnum.USER_NAME, response.user.name);
            localStorage.setItem(LocalStorageEnum.USER_ID, response.user.id)
            navigate('/dashboard')
        }
    } catch (error) {
        console.error('Erro de autenticação:', error);
    }
}