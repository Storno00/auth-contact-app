import prisma from './../../prisma/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import HttpError from './../utils/HttpError';

class AuthService {
    static async loginUser(user) {
        const dbUser = await prisma.user.findUnique({
            where: { email: user.email }
        });
        if (!dbUser) throw new HttpError('Invalid username/password', 403);

        if (await bcrypt.compare(user.password, dbUser.password)) {
            const token = jwt.sign({ id: dbUser.id, name: dbUser.name, email: dbUser.email, isAdmin: dbUser.isAdmin }, JWT_SECRET);
            return { token };
        }
        throw new HttpError('Invalid username/password', 403);
    }

    static async registerUser({ name, email, profileUrl, password }) {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: { name, email, profileUrl, password: hashedPassword }
        });

        return newUser;
    }
}

export default AuthService;