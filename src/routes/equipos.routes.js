import routesVersioning from 'express-routes-versioning';
import validarVersionMiddleware from '../security/validarVersionMiddleware.js'; // Ruta correcta al middlewar
import { Router } from 'express';
import { limitEquiposG } from '../config/limit.js';
import { getTrainerAll, addTrainer } from '../versiones/v1/equipo.js';
import { validateEquipo } from '../dist/equipo.js';

const equiposRouter = Router();
const version = routesVersioning();

equiposRouter.get('/',limitEquiposG(),validarVersionMiddleware, version({
    "1.0.0": getTrainerAll
}));

equiposRouter.post('/',validateEquipo,limitEquiposG(),validarVersionMiddleware, version({
    "1.0.0": addTrainer
}));

export default equiposRouter;