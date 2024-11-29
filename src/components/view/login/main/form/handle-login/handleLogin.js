import { Password } from "phosphor-react";
import Api from "../../../../../../service/gateway/Api";
import LocalStorageEnum from "../../../../../../enum/LocalStorageEnum";

export const handleLogin = async (event, email, senha) => {
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
        //     // localStorage.setItem('id', response.data._id)
        //     // localStorage.setItem('nome', response.data.nome)
        //     // localStorage.setItem('email', response.data.email)
        //     // localStorage.setItem('admin', response.data.admin)
        //     // localStorage.setItem('idEndereco', response.data.Idendereco)
        //     // localStorage.setItem(response.data._id, JSON.stringify([]))
        //     // navigate('/dashboard')
        }
    } catch (error) {
        console.error('Erro de autenticação:', error);
    }
}