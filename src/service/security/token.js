export function getToken() {
  return localStorage.getItem('jwtToken');
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
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('role');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
  } catch {}
}