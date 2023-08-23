import { router as Equipo } from '../src/middleware/equipo.js';
// import { router as Incidencias } from '../src/middleware/incidencias.js';
// import { router as Trainers } from '../src/middleware/trainers.js';
export async function dynamicRouter(req, res, next) {
    const { collection } = req.params;
    switch (collection) {
        case 'equipos':
            return Equipo(req, res, next);
        case 'incidencias':
            return Incidencias(req, res, next);
        case 'trainers':
            return Trainers(req, res, next);
        default:
            return res.status(404).send({ error: 'Ruta no encontrada' });
    }
};