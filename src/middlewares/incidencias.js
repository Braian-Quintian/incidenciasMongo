import { Router } from 'express';
import { methodsIncidencias } from '../routes/incidencias.routes.js';
const router = Router();

router.get('/',methodsIncidencias.getIncidencias);
router.get('/:id',methodsIncidencias.getIncidenciasById);
router.post('/',methodsIncidencias.addIncidencias);

export {
    router
}