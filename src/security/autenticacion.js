import { generateToken } from './keys/autorizacion.js';
export async function autenticacion(req, res){
    const id = req.params.id;
  const nombre = req.params.nombre;

  try {
    const jwt = await generateToken(id, nombre);
    res.send({ jwt });
  } catch (error) {
    res.status(500).send(error);
  }
}