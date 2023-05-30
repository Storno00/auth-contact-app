import HttpError from '../utils/HttpError';
import prisma from './../../prisma/prisma';

class ContactService {
    static async createContact(userId, contact) {
        return prisma.contact.create({
            data: { ...contact, userId }
        });
    }

    static async readContact(contactId) {
        const contact = await prisma.contact.findUnique({
            where: { id: contactId }
        });
        
        if (!contact) throw new HttpError('Contact does not exist', 404);

        return contact;
    }

    static async readAllContacts(userId, query) {
        const page = Number(query.page) || 1;
        const step = Number(query.step) || 10;
        const search = query.search || undefined;

        const numberOfContacts = await prisma.contact.count({
            where: {
                userId,
                name: { search },
            },
        });
        
        const data = await prisma.contact.findMany({
            skip: (page - 1) * step,
            take: step,
            where: {
                userId,
                name: { search },
            },
            orderBy: [
                query.orderBy === 'AtoZ' ? { name: 'asc' } : undefined,
                query.orderBy === 'ZtoA' ? { name: 'desc' } : { createdAt: 'desc' },
            ]
        });

        return { totalPages: Math.ceil(numberOfContacts / step), currentPage: page, data };
    }

    static async updateContact(contactId, newContact) {
        const contact = await prisma.contact.update({
            where: { id: contactId },
            data: { ...newContact }
        });

        if (!contact) throw new HttpError('Contact does not exist', 404);

        return contact;
    }

    static async deleteContact(contactId) {
        try {
            return await prisma.contact.delete({ where: { id: contactId } });
        } catch (error) {
            throw new HttpError('Contact does not exist', 404);
        }
    }
}

export default ContactService;
