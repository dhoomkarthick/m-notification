import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
    const userData = JSON.parse(localStorage.getItem("User"));
    return userData !== null ? children : <Navigate to="/login" />
}
