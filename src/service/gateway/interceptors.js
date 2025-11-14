import axios from 'axios';
import { getToken, clearAuth } from '../security/token';
import { shouldRefreshToken, refreshAccessToken } from '../security/refreshToken';

function attachInterceptors(instance) {
  instance.interceptors.request.use(async (config) => {
    let token = getToken();
    
    if (token && shouldRefreshToken(token)) {
      token = await refreshAccessToken();
    }
    
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (resp) => resp,
    async (err) => {
      const status = err?.response?.status;
      const code = err?.response?.data?.code;
      const originalRequest = err.config;
      
      if (status === 401 && code === 'token_expired' && !originalRequest._retry) {
        originalRequest._retry = true;
        
        const newToken = await refreshAccessToken();
        
        if (newToken) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return instance(originalRequest);
        }
      }
      
      if (status === 401) {
        clearAuth();
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
        return;
      }
      
      return Promise.reject(err);
    }
  );
}

attachInterceptors(axios);

const originalCreate = axios.create.bind(axios);
axios.create = function patchedCreate(config) {
  const instance = originalCreate(config);
  attachInterceptors(instance);
  return instance;
};