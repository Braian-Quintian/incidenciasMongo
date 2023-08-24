import Routes from 'express';
import { limitLogin } from "../config/limit.js";
import passportHelper from '../config/passportHelpert.js';
import equiposRoutes from '../routes/equipos.routes.js'; // Importa el enrutador de rutas
const router = Routes();

router.use(limitLogin(), passportHelper.authenticate('bearer', { session: false }));
router.use('/', equiposRoutes); // Utiliza el enrutador de rutas

export {
    router
}
