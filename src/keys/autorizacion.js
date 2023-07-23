import { SignJWT } from 'jose';
import conexion from "../connection/credentials.js";

export async function generateToken(id, nombre) {
  let json = {
    id: id,
    nombre: nombre,
  };

  try {
    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT({ json });
    const jwt = await jwtconstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(conexion.token));

    return jwt;
  } catch (error) {
    throw error;
  }
}