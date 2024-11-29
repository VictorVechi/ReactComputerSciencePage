import LocalStorageEnum from "../../enum/LocalStorageEnum";
import { RoleEnum } from "../../enum/RoleEnum";
import Api from "../gateway/Api";


const isAuthenticated = async () => {
    try {
        const api = Api.getInstance();
        const response = await api.getUsuarioByToken();

        if (!response) {
            return false;
        }

        if (response.user.cargo === RoleEnum.ADMIN) {
            localStorage.setItem(LocalStorageEnum.ROLE_KEY, RoleEnum.ADMIN);
        }

        return true;
    } catch (error) {
        localStorage.removeItem(LocalStorageEnum.TOKEN_KEY);
        localStorage.removeItem(LocalStorageEnum.ROLE_KEY);
        return false;
    }
};

export default isAuthenticated;