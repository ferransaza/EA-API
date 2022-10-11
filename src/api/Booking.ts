import bookingController from '../controller/bookingController';
import { Router } from 'express';
// import userController from 'src/controller/userController';

const router = Router();

router.post('/booking', bookingController.booking);
router.delete('/cancel', bookingController.cancel);
router.get('/', bookingController.getall);

export default router;