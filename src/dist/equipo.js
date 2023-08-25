import { body } from 'express-validator';
    let entidad = {
        e1: "id-equipo",
        e2: "nombre-equipo",
        e3: "tipo-equipo",
        e4: "marca-equipo",
        e5: "modelo-equipo",
        e6: "serie-equipo",
        e7: "estado-equipo",
        e8: "area-equipo",
    }

let {e1: e1,e2: e2,e3:e3,e4:e4,e5:e5,e6:e6,e7:e7,e8:e8} = entidad;


export const validateEquipo =[
    body(e1)
    .notEmpty().withMessage(`The ${e1} is required`)
    .isNumeric().withMessage(`The ${e1} must be a number`)
    .isLength({ min: 1 }).withMessage(`The ${e1} must be 1 characters long`)
    .matches(/^[0-9]+$/).withMessage(`The ${e1} can only contain numbers`),

    body(e2)
    .notEmpty().withMessage(`The ${e2} is required`)
    .isString().withMessage(`The ${e2} must be a string`)
    .isLength({ min: 2 }).withMessage(`The ${e2} must be 2 characters long`)
    .matches(/^[a-zA-Z0-9-]+$/).withMessage(`The ${e2} can only contain letters and numbers y guiones`),

    body(e3)
    .notEmpty().withMessage(`The ${e3} is required`)
    .isString().withMessage(`The ${e3} must be a string`)
    .isLength({ min: 2 }).withMessage(`The ${e3} must be 2 characters long`)
    .matches(/^[a-zA-Z]+$/).withMessage(`The ${e3} can only contain letters`),

    body(e4)
    .notEmpty().withMessage(`The ${e4} is required`)
    .isString().withMessage(`The ${e4} must be a string`)
    .isLength({ min: 2 }).withMessage(`The ${e4} must be 2 characters long`)
    .matches(/^[a-zA-Z]+$/).withMessage(`The ${e4} can only contain letters`),

    body(e5)
    .notEmpty().withMessage(`The ${e5} is required`)
    .isString().withMessage(`The ${e5} must be a string`)
    .isLength({ min: 2 }).withMessage(`The ${e5} must be 2 characters long`)
    .matches(/^[a-zA-Z0-9-]+$/).withMessage(`The ${e5} can only contain letters and numbers y guiones`),

    body(e6)
    .notEmpty().withMessage(`The ${e6} is required`)
    .isString().withMessage(`The ${e6} must be a string`)
    .isLength({ min: 2 }).withMessage(`The ${e6} must be 2 characters long`)
    .matches(/^[a-zA-Z0-9-]+$/).withMessage(`The ${e6} can only contain letters and numbers y guiones`),

    body(e7)
    .notEmpty().withMessage(`The ${e7} is required`)
    .isString().withMessage(`The ${e7} must be a string`)
    .custom(value => {const allowedOptions = ["Activo","Inactivo"];
        if (!allowedOptions.includes(value)) {throw new Error(`The ${e7} must be one of: ${allowedOptions.join(', ')}`);}
        return true}),

    body(e8)
    .notEmpty().withMessage(`The ${e8} is required`)
    .isString().withMessage(`The ${e8} must be a string`)
    .custom(value => {const allowedOptions = ["Apolo","Artemis","Sputnik","Skylab","Corvus","Endor"];
        if (!allowedOptions.includes(value)) {throw new Error(`The ${e8} must be one of: ${allowedOptions.join(', ')}`);}
        return true})
]