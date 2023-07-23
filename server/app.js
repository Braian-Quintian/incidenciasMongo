import express from 'express';
import { router as Trainers } from '../src/middlewares/trainers.js';
import { generateToken } from '../src/middlewares/autorizacion.js';
import { verifyToken } from '../src/middlewares/verifyToken.js';

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

app.use((err, res) => {
  handleInternalServerError(err, res);
});

export default app;