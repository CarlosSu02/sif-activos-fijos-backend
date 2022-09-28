
// Example Routes
import { Router } from 'express';
import { ping } from '../controllers/example.controller';

const router = Router();

router.get('/ping', ping);

export default router;
