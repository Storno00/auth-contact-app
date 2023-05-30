import ContactService from "./contact-service";

class ContactController {
    static async post(req, res, next) {
        try {
            const contact = await ContactService.createContact(req.params.userId, req.body);
            res.json(contact);
        } catch (error) {
            next(error);
        }
    }

    static async get(req, res, next) {
        try {
            const contact = await ContactService.readContact(req.params.contactId);
            res.json(contact);
        } catch (error) {
            next(error);
        }
    }

    static async getAll(req, res, next) {
        try {
            const contacts = await ContactService.readAllContacts(req.params.userId, req.query);
            res.json(contacts);
        } catch (error) {
            next(error);
        }
    }

    static async patch(req, res, next) {
        try {
            const contact = await ContactService.updateContact(req.params.contactId, req.body);
            res.json(contact);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const contact = await ContactService.deleteContact(req.params.contactId);
            res.json(contact);
        } catch (error) {
            next(error);
        }
    }
}

export default ContactController;
