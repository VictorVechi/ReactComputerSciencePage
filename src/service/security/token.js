import { LocalStorageEnum } from '../../enum/LocalStorageEnum';

export function getToken() {
  return localStorage.getItem(LocalStorageEnum.TOKEN_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(LocalStorageEnum.REFRESH_TOKEN_KEY);
}

export function saveTokens(token, refreshToken) {
  try {
    localStorage.setItem(LocalStorageEnum.TOKEN_KEY, token);
    if (refreshToken) {
      localStorage.setItem(LocalStorageEnum.REFRESH_TOKEN_KEY, refreshToken);
    }
    
    const data = decodeToken(token);
    if (data) {
      if (data.cargo) {
        localStorage.setItem(LocalStorageEnum.ROLE_KEY, data.cargo);
        localStorage.setItem(LocalStorageEnum.USER_ROLE, data.cargo);
      }
      if (data.id) {
        localStorage.setItem(LocalStorageEnum.USER_ID, data.id);
      }
    }
  } catch (error) {
    console.error('Erro ao salvar tokens:', error);
  }
}

export function decodeToken(token) {
  try {
    const [, payload] = token.split('.');
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

export function isTokenExpired(token) {
  const data = decodeToken(token);
  if (!data?.exp) return true;
  const now = Math.floor(Date.now() / 1000);
  return data.exp <= now;
}

export function clearAuth() {
  try {
    localStorage.removeItem(LocalStorageEnum.TOKEN_KEY);
    localStorage.removeItem(LocalStorageEnum.REFRESH_TOKEN_KEY);
    localStorage.removeItem(LocalStorageEnum.ROLE_KEY);
    localStorage.removeItem(LocalStorageEnum.USER_ROLE);
    localStorage.removeItem(LocalStorageEnum.USER_ID);
  } catch {}
}