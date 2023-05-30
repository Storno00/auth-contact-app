import express from 'express';
import ContactController from './contact-controller';
import authorize from '../middlewares/authorize';
import verifyUser from '../middlewares/verify-user';
import validate from './../middlewares/validation';
import createContactSchema from './create-contact-schema';
import updateContactSchema from './update-contact-schema';

const router = express.Router();

router.post('/:userId', authorize, verifyUser, validate(createContactSchema), ContactController.post);
router.get('/:userId/:contactId', authorize, verifyUser, ContactController.get);
router.get('/:userId', authorize, verifyUser, ContactController.getAll);
router.patch('/:userId/:contactId', authorize, verifyUser, validate(updateContactSchema), ContactController.patch);
router.delete('/:userId/:contactId', authorize, verifyUser, ContactController.delete);

export default router;
