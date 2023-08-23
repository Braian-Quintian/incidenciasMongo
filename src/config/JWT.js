import { SignJWT, jwtVerify } from "jose"
import {connect} from "../connection/connection.js"
import conexion from '../connection/credentials.js';
import { ObjectId } from "mongodb"
const db = await connect();

const createToken = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) return res.status(400).send({mesaage: "Datos no enviados"});
    const result = await db.collection("Trainer").findOne({trainer_emailP: req.body.email});
    if (!result) return res.status(401).send({message: "Usuario no encontrado"});
    const encoder = new TextEncoder();
    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(conexion.token));
    req.data = {status: 200, message: jwtConstructor};
    next();
}

export {
    createToken
}