import LocalStorageEnum from "../../enum/LocalStorageEnum";
import { RoleEnum } from "../../enum/RoleEnum";
import Api from "../gateway/Api";


const isAuthenticated = () => {
    try {
        const api = Api.getInstance();
        const response = api.getUsuarioByToken();

        if (!response) {
            return {
                isAuth: false,
                isAdmin: false,
            };
        }
        
        if (response.cargo === RoleEnum.ADMIN) {
            return {
                isAuth: true,
                isAdmin: true,
            }
        
        }

        return {
            isAuth: true,
            isAdmin: false,
        };
    } catch (error) {
        localStorage.removeItem(LocalStorageEnum.TOKEN_KEY);
        console.log(error)
        return {
            isAuth: true,
            isAdmin: false,
        };
    }
};

export default isAuthenticated;