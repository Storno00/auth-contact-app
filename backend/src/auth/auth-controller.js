import AuthService from "./auth-service";

class AuthController {
    static async login(req, res, next) {
        try {
            const jwtToken = await AuthService.loginUser(req.body);
            res.json(jwtToken);
        } catch (err) {
            next(err);
        }
    } 

    static async register(req, res, next) {
        try {
            const user = await AuthService.registerUser(req.body);
            res.json(user);
        } catch (err) {
            next(err);
        }
    }
}

export default AuthController;