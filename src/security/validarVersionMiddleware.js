const validarVersionMiddleware = (req, res, next) => {
    const userPermission = req.user.trainer_permisos[req.baseUrl];
    const requestedVersion = req.headers["accept-version"];
    const requestedMethod = req.method;
    if (!userPermission) {
        return res.status(401).send("Acceso denegado");
    }
    const userVersion = userPermission.version;
    const userMethod = userPermission.method;
    if (userVersion !== requestedVersion || userMethod !== requestedMethod) {
        return res.status(422).send("Versión o método incorrecto");
    }
    next();
};
export default validarVersionMiddleware;