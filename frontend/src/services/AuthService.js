import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { AUTH_URL } from '../constants/constants';

class AuthService {
    static async login(loginData) {
        let response;
        try {
            response = await axios.post(`${AUTH_URL}/login`, loginData);
        } catch (err) {
            if (err.response.status === 403) throw new Error('Helytelen email cím vagy jelszó');
            throw new Error('Szerverhiba! Próbáld meg később!');
        }
        const { token } = response.data;
        const user = jwtDecode(token);

        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));

        return { user, token };
    }

    static getUserData() {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = JSON.parse(localStorage.getItem('token'));
        return { user, token };
    }

    static async logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }
}

export default AuthService;
