
export const validarUsername = (username: string) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(username);
}

export const validarPassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
}