import express from 'express';
import contact from './../contact/contact-routes';
import user from './../user/user-routes';

const router = express.Router();

router.use('/contact', contact);
router.use('/user', user);

export default router;
