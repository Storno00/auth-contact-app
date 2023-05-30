import { useContext } from "react";
import AuthContext from "../../contexts/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoutes({ children }) {

    const { auth } = useContext(AuthContext);

    if (!auth.user) return <Navigate to="/" />;
    return <Outlet />;
}
