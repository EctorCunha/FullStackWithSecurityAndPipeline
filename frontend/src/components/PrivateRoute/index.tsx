import { Navigate } from "react-router-dom";

export function PrivateRoute({children}: {children: JSX.Element}){

    const isLogged = localStorage.getItem('token');

    return isLogged ? children : <Navigate to="/login" />;
}