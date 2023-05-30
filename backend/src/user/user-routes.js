import express from 'express';
import UserController from './user-controller';
import authorize from '../middlewares/authorize';
import verifyUser from '../middlewares/verify-user';
import verifyAdmin from '../middlewares/verify-admin';
import validate from './../middlewares/validation';

const router = express.Router();

router.get('/:userId/:dbUserId', authorize, verifyUser, verifyAdmin, UserController.get);
router.get('/:userId', authorize, verifyUser, verifyAdmin, UserController.getAll);
router.patch('/:userId/:dbUserId', authorize, UserController.patch);
router.delete('/:userId/:dbUserId', authorize, verifyUser, UserController.delete);

export default router;
