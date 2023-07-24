import express from 'express';
import { router as Trainers } from '../src/middlewares/trainers.js';
import { router as Equipo } from '../src/middlewares/equipo.js';
import { router as Incidencias } from '../src/middlewares/incidencias.js';
import { autenticacion } from '../src/security/autenticacion.js';
import { verifyToken } from '../src/security/keys/verifyToken.js';
import { handleInternalServerError } from '../src/errors/errors.js';
const app = express();
app.use(express.json());

app.get('/autorizacion/:id/:nombre', autenticacion);

app.use('/trainers', verifyToken, Trainers);
app.use('/equipos', verifyToken, Equipo);
app.use('/incidencias',verifyToken, Incidencias);
app.use((err, res) => { handleInternalServerError(err, res)});

export default app;