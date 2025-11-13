import { LocalStorageEnum } from "../../enum/LocalStorageEnum";
import { RoleEnum } from "../../enum/RoleEnum";
import Api from "../gateway/Api";
import { getToken, isTokenExpired, decodeToken, clearAuth } from "./token";

const isAuthenticated = async () => {
    const token = getToken();
    if (!token) {
        clearAuth();
        return false;
    }

    if (isTokenExpired(token)) {
        clearAuth();
        return false;
    }

    const payload = decodeToken(token);
    if (payload?.cargo === RoleEnum.ADMIN) {
        localStorage.setItem(LocalStorageEnum.ROLE_KEY, RoleEnum.ADMIN);
        localStorage.setItem(LocalStorageEnum.USER_ROLE, RoleEnum.ADMIN);
    }

    try {
        const api = Api.getInstance?.() || Api;
        const response = await api.getUsuarioByToken?.();
        if (!response) {
            clearAuth();
            return false;
        }
        return true;
    } catch (_e) {
        clearAuth();
        return false;
    }
};

export default isAuthenticated;