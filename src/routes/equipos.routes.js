import routesVersioning from 'express-routes-versioning';
import { Router } from 'express';
import { limitEquiposG } from '../config/limit.js';
import { equipoV1 } from '../versiones/v1/equipo.js';

const equiposRouter = Router();
const version = routesVersioning();

equiposRouter.get('/',limitEquiposG(), version({
    "1.0.0": equipoV1
}));

equiposRouter.post('/',limitEquiposG(), version({
    "1.0.1": equipoV1
}));

export default equiposRouter;