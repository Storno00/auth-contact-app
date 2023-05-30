import { createContext, useState } from 'react';
import AuthService from '../services/authService';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(AuthService.getUserData());

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
