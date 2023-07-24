import { Router } from 'express';
import { methodsEquipo } from '../routes/equipo.routes.js';
const router = Router();

router.get('/',methodsEquipo.getEquipo);
router.post('/',methodsEquipo.addEquipo);

export {
    router
}