import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/AuthProvider";

export default function ProtectedRoutes({ isAdmin }) {

    const { auth } = useContext(AuthContext);

    if (isAdmin ? !auth.user?.isAdmin : !auth.user) return <Navigate to="/" />;
    return <Outlet />;
}
