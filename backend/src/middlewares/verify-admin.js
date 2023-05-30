import HttpError from "../utils/HttpError";

export default (req, res, next) => {
    if (!req.user.isAdmin) return next(new HttpError('Permission denied', 403));
    return next();
};