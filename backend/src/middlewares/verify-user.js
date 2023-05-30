import HttpError from "../utils/HttpError";

export default async (req, res, next) => {
    const { userId } = req.params;
    const { id: authUserId } = req.user;

    if (!userId) return next(new HttpError('UserId is missing.', 500));
    if (!authUserId) return next(new HttpError('Token is missing.', 500));

    if (authUserId === userId) return next();

    return next(new HttpError('Permission denied.', 403));
}