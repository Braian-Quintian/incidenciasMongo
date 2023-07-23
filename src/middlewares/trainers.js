import { Router } from 'express';
import { methodsTrainers } from '../routes/trainers.routes.js';
const router = Router();

router.get('/',methodsTrainers.getTrainers);
router.post('/',methodsTrainers.addTrainer);

export {
    router
}