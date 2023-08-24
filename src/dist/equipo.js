import {check, body} from 'express-validator'
let entidad = {
    entidad1: "nombre",
    entidad2: "descripcion",
}

let {entidad1:nombre,entidad2:descripcion} = entidad;

export const equiposDTO = [
    body(`${nombre}`).notEmpty().withMessage(`El ${nombre} del equipo es requerido`)
    .isString().withMessage(`El dato tiene que ser un string`)
    .isLength({min: 5}).withMessage(`El ${nombre} tiene que tener minimo 5 caracteres`)
    .matches(/^[a-zA-Z]+$/).withMessage(`El ${nombre} solo puede contener letras`),

    body(`${descripcion}`).notEmpty().withMessage(`La ${descripcion} del equipo es requerida`)
    .isString().withMessage(`El dato tiene que ser un string`)
    .isLength({min: 10}).withMessage(`El ${nombre} tiene que tener minimo 10 caracteres`)
    .matches(/^[a-zA-Z]+$/).withMessage(`El ${nombre} solo puede contener letras`)
]