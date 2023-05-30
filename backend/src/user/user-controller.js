import UserService from "./user-service";

class UserController {
    static async get(req, res, next) {
        try {
            const user = await UserService.readUser(req.params.dbUserId);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    static async getAll(req, res, next) {
        try {
            const users = await UserService.readAllUser(req.query);
            res.json(users);
        } catch (error) {
            next(error);
        }
    }

    static async patch(req, res, next) {
        try {
            const user = await UserService.updateUser(req.params.dbUserId, req.body);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const user = await UserService.deleteUser(req.params.dbUserId);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;
