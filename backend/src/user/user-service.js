import HttpError from '../utils/HttpError';
import prisma from './../../prisma/prisma';

class UserService {
    static async readUser(dbUserId) {
        const dbUser = await prisma.user.findUnique({
            where: { id: dbUserId }
        });
        
        if (!dbUser) throw new HttpError('User does not exist', 404);

        return dbUser;
    }

    static async readAllUser(query) {
        const page = Number(query.page) || 1;
        const step = Number(query.step) || 10;
        const search = query.search || undefined;

        const numberOfUsers = await prisma.user.count({
            where: {
                name: { search },
            },
        });
        
        const data = await prisma.user.findMany({
            skip: (page - 1) * step,
            take: step,
            where: { name: { search } },
            orderBy: [
                query.orderBy === 'AtoZ' ? { name: 'asc' } : undefined,
                query.orderBy === 'ZtoA' ? { name: 'desc' } : { createdAt: 'desc' },
            ]
        });

        return { totalPages: Math.ceil(numberOfUsers / step), currentPage: page, data };
    }

    static async updateUser(dbUserId, newUserData) {
        const dbUser = await prisma.user.update({
            where: { id: dbUserId },
            data: { ...newUserData }
        });

        if (!dbUser) throw new HttpError('User does not exist', 404);

        return dbUser;
    }

    static async deleteUser(dbUserId) {
        try {
            return await prisma.user.delete({ where: { id: dbUserId } });
        } catch (error) {
            throw new HttpError('User does not exist', 404);
        }
    }
}

export default UserService;
