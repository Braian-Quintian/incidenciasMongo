import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import { limitEquipos } from "../config/limit.js";
import passportHelper from '../config/passportHelpert.js'
import {equipoV1} from '../versiones/v1/equipo.js'
const router = Routes();
const version = routesVersioning();

router.use(limitEquipos(), passportHelper.authenticate('bearer', { session:false}))
router.get('/', version({
   "1.0.0": equipoV1
}))

export {
    router
}