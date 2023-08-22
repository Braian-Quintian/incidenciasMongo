import { router as Usuario } from '../src/middleware/usuario.js';
import { router as Citas } from '../src/middleware/citas.js';
import { router as Medicos } from '../src/middleware/medicos.js';

export async function dynamicRouter(req, res, next) {
    const { collection } = req.params;
    const user = req.user;
    if (user) {
        if (user.rol === 'sudosu') {
            switch (collection) {
                case 'usuarios':
                    return Usuario(req, res, next);
                case 'citas':
                    return Citas(req, res, next);
                case 'medicos':
                    return Medicos(req, res, next);
                default:
                    return res.status(404).send({ error: 'Ruta no encontrada' });
            }
        } else if (user.rol === 'empleado') {
            // if (collection === 'bodegas') {
            //     return Bodegas(req, res, next);} 
            // else {
                return res.status(401).json({ error: 'Unauthorized' });
            // }
        }
    }
    res.status(401).json({ error: 'Unauthorized' });
};