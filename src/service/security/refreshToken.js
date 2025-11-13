import axios from 'axios';
import { getRefreshToken, saveTokens, clearAuth } from './token';

const API_URL = import.meta.env.VITE_API_URL;

export async function refreshAccessToken() {
  try {
    const refreshToken = getRefreshToken();
    
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await axios.post(`${API_URL}/api/user/refresh-token`, {
      refreshToken
    });

    const { token, refreshToken: newRefreshToken } = response.data;
    
    saveTokens(token, newRefreshToken);
    
    return token;
  } catch (error) {
    clearAuth();
    window.location.href = '/login';
    return null;
  }
}

export function shouldRefreshToken(token) {
  if (!token) return false;
  
  try {
    const [, payload] = token.split('.');
    const data = JSON.parse(atob(payload));
    
    if (!data?.exp) return false;
    
    const now = Math.floor(Date.now() / 1000);
    const timeUntilExpiry = data.exp - now;
    
    return timeUntilExpiry < (10 * 60);
  } catch {
    return false;
  }
}
