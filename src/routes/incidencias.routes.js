import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Incidencia } from '../../controller/validateIncidencia.js';
import { connect } from '../connection/connection.js'
import { handleInternalServerError, handleDuplicateEntryError, handleInvalidDataError, handleNonExistentError } from '../errors/errors.js'

const getIncidencias = async (req, res) => {
    try {
        const connection = await connect();
        const query = 'SELECT * FROM Incidencia';
        const [rows] = await connection.query(query);
        res.json(rows);
    } catch (error) {
        handleInternalServerError(error, res);
    }
};

const getIncidenciasById = async (req, res) => {
    try {
        const connection = await connect();
        const id = req.params.id;
        const query = `SELECT * FROM Incidencia WHERE equipo_id = ?`;
        const [rows] = await connection.query(query, id);
        if (rows.length === 0) {
            // No se encontraron incidencias con el ID del equipo proporcionado
            return res.status(404).json({ message: 'No incidencias found for the specified equipo ID.' });
        }
        res.json(rows);
    } catch (error) {
        handleInternalServerError(error, res);
    }
}

const addIncidencias = async (req, res) => {
    try {
        const dataSend = plainToClass(Incidencia,req.body);
        const validationErrors = await validate(dataSend);

        if (validationErrors.length > 0) {
            handleInvalidDataError(res, validationErrors);
            return;
        }

const connection = await connect     ();
        const query = `INSERT INTO Incidencia (fecha, descripcion, equipo_id, estado_id, tipo_incidencia, trainer_id, categoria_id) VALUES(?, ?, ?, ?, ?, ?, ?)`;
        const values = [dataSend.date, dataSend.description, dataSend.equipment_id, dataSend.status_id, dataSend.type_incident, dataSend.id_trainer, dataSend.category_id]
        await connection.query(query, values);
        res.json({ message: 'Incidencia added successfully' })
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            handleDuplicateEntryError(res, 'Incidencia');
        } else if (error.code === 'ER_BAD_NULL_ERROR') {
            handleInvalidDataError(res, 'Incidencia');
        } else if (error.code === 'ER_NO_REFERENCED_ROW_2') {
            handleNonExistentError(res, 'Invalid data');
        } else {
            handleInternalServerError(error, res);
        }
    }
}

export const methodsIncidencias = {
    getIncidencias,
    getIncidenciasById,
    addIncidencias
}