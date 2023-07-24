import express from 'express';
import { router as Trainers } from '../src/middlewares/trainers.js';
import { router as Equipo } from '../src/middlewares/equipo.js';
import { router as Incidencias } from '../src/middlewares/incidencias.js';
import { generateToken } from '../src/keys/autorizacion.js';
import { verifyToken } from '../src/keys/verifyToken.js';
import { handleInternalServerError } from '../src/errors/errors.js';
const app = express();
app.use(express.json());

app.get('/autorizacion/:id/:nombre', async (req, res) => {
  const id = req.params.id;
  const nombre = req.params.nombre;

  try {
    const jwt = await generateToken(id, nombre);
    res.send({ jwt });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.use('/trainers', verifyToken, Trainers);
app.use('/equipos', verifyToken, Equipo);
app.use('/incidencias',verifyToken, Incidencias);
app.use((err, res) => { handleInternalServerError(err, res)});

export default app;