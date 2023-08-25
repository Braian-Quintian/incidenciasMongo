import { body } from 'express-validator';

export const validateEquipo = (equipo) => {
    console.log(equipo);
    const { nombre, descripcion } = equipo;

    return [
        body(nombre).notEmpty().withMessage(`El ${nombre} del equipo es requerido`)
            .isString().withMessage(`El dato tiene que ser un string`)
            .isLength({ min: 5 }).withMessage(`El ${nombre} tiene que tener mínimo 5 caracteres`)
            .matches(/^[a-zA-Z]+$/).withMessage(`El ${nombre} solo puede contener letras`),

        body(descripcion).notEmpty().withMessage(`La ${descripcion} del equipo es requerida`)
            .isString().withMessage(`El dato tiene que ser un string`)
            .isLength({ min: 10 }).withMessage(`La ${descripcion} tiene que tener mínimo 10 caracteres`)
            .matches(/^[a-zA-Z]+$/).withMessage(`La ${descripcion} solo puede contener letras`)
    ];
};
