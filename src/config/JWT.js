import { SignJWT, jwtVerify } from "jose"
import {connect} from "../connection/connection.js"
import conexion from '../connection/credentials.js';
import { ObjectId } from "mongodb"
const db = await connect();

const createToken = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) return res.status(400).send({mesaage: "Datos no enviados"});
    const result = await db.collection("Trainer").findOne({trainer_cc: parseInt(req.body.cc)});
    console.log(result);
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

const validarToken = async (req, token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(token,encoder.encode(conexion.token)
        );
        // console.log(req.baseUrl)
        let res = await db.collection('Trainer').findOne({_id: new ObjectId(jwtData.payload.id),[`trainer_permisos.${req.baseUrl}`]: { $exists: true }});

        if (res.trainer_permisos[`${req.baseUrl}`][0] === '*') {
            console.log('SI TIENE PERMISOS');
        } else {
            let au = await db.collection('Trainer').findOne({_id: new ObjectId(jwtData.payload.id),[`trainer_permisos.${req.baseUrl}`]: { $exists: true, $in: [`${req.headers["accept-version"]}`] }});
            console.log(au);
        }

        // , $in: [`${req.headers["accept-version"]}`] 
        console.log(res)
        let {_id, permisos, ...usuario} = res;
        return usuario;
    } catch (error) {
        return false;
    }
}

export {
    createToken,
    validarToken
}