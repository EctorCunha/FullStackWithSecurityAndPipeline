export const TOKEN_KEY = 'token';
export const credential = 'credential';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const remember = (fields : string) => {
    localStorage.setItem(credential, fields);
}

export const logout = (token: string) => {localStorage.removeItem(TOKEN_KEY)}
