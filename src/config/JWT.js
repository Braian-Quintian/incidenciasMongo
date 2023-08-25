import { SignJWT, base64url, jwtVerify } from "jose"
import {connect} from "../connection/connection.js"
import conexion from '../connection/credentials.js';
import { ObjectId } from "mongodb"
const db = await connect();

const createToken = async (req, res, next) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).send({ message: "Datos no enviados" });
        }
        const acceptVersion = req.headers["accept-version"];
        if (!acceptVersion) {
            return res.status(422).send({ message: "No se define la version del api" });
        }
        
        // Determinar la colección en función de la versión
        let collectionEntry;
        switch (acceptVersion) {
            case "1.0.0":
                collectionEntry = "Trainer";
                break;
            default:
                return res.status(422).send({ message: "Version del api incorrecta" });
        }
        // Buscar el usuario en la colección correspondiente
        const result = await db.collection(collectionEntry).findOne({ [`${collectionEntry.toLowerCase()}_cc`]: parseInt(req.body.cc) });

        if (!result) {
            return res.status(403).send({ message: "Usuario no encontrado" });
        }
        
        // Generar el token JWT
        const encoder = new TextEncoder();
        const id = result._id.toString();
        const jwtConstructor = await new SignJWT({ id: id })
            .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
            .setIssuedAt()
            .setExpirationTime('3h')
            .sign(encoder.encode(conexion.token));

        req.data = { status: 200, message: jwtConstructor };
        next();
    } catch (error) {
        return res.status(401).send({ message: "Acceso no autorizado" });
    }
};

const validarToken = async (req, token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(token, encoder.encode(conexion.token));
        
        // Buscar los permisos del usuario en la colección correspondiente
        const userPermissions = await db.collection('Trainer').findOne({
            _id: new ObjectId(jwtData.payload.id),
            [`trainer_permisos.${req.baseUrl}`]: { $exists: true }
        });

        // Verificar los permisos del usuario para la ruta específica
        const routePermissions = userPermissions.trainer_permisos[req.baseUrl];
        
        if (routePermissions) {
            const acceptVersion = req.headers["accept-version"];
            const method = req.method;
            if (
                (routePermissions.version === '*' || routePermissions.version === acceptVersion) &&
                (routePermissions.method === '*' || routePermissions.method === method)
            ) {
                const { _id, permisos, ...usuario } = userPermissions;
                return usuario;
            }
        }
        throw new Error("El usuario no tiene los permisos necesarios");
    } catch (error) {
        return false; // Devolver false en caso de error
    }
}



export {
    createToken,
    validarToken
}