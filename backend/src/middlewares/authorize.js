import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import HttpError from '../utils/HttpError';

export default (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) next(new HttpError('Missing token', 401));

    const tokenBody = token.slice(7);

    jwt.verify(tokenBody, JWT_SECRET, (err, decoded) => {
        if (err) return next(new HttpError('Invalid token', 401));
        req.user = { ...decoded };
        next();
    });
};
