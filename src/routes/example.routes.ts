
// Example Routes
import { Router } from 'express';
import Controller from '../controllers/example.controller';

const router = Router();

router.get('/', Controller.getTest);
router.get('/ping', Controller.ping);
router.get('/ping/:id', Controller.pingById);

export default router;
