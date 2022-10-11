import productoController from '../controller/productoController';
import { Router } from 'express';
// import userController from 'src/controller/userController';

const router = Router();

router.get('/getall', productoController.getall);
router.get('/getone', productoController.getone);
router.post('/nuevoproducto', productoController.nuevoproducto);

export default router;