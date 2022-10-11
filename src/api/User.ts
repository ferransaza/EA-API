import userController from '../controller/userController';
import { Router } from 'express';

const router = Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', userController.profile);
router.get('/', userController.getall);
router.get('/:id', userController.getone);
router.put('/forgotpass/:id', userController.changePass);
router.delete('/deleted/:name', userController.deleted);

export default router;