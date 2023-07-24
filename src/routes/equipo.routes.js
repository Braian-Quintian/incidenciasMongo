import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Equipo } from '../../controller/validateEquipo.js';
import { getConnection } from '../connection/connect.js'
import { handleInternalServerError, handleDuplicateEntryError, handleInvalidDataError, handleNonExistentError } from '../errors/errors.js'

const getEquipo = async (req, res) => {
    try {
        const connection = await getConnection();
        const query = 'SELECT * FROM Equipo';
        const [rows] = await connection.query(query);
        res.json(rows);
    } catch (error) {
        handleInternalServerError(error, res);
    }
};

const addEquipo = async (req, res) => {
    try {
        const dataSend = plainToClass(Equipo, req.body);
        const validationErrors = await validate(dataSend);

        if (validationErrors.length > 0) {
            handleInvalidDataError(res, validationErrors);
            return;
        }

        const connection = await getConnection();
        const query = `INSERT INTO Equipo (nombre,salon, marca, modelo, numero_serie) VALUES(?, ?, ?, ?, ?)`;
        const values = [dataSend.name,dataSend.classroom,dataSend.brand, dataSend.model ,dataSend.serial_number];
        await connection.query(query, values);
        res.json({ message: 'Equipo added successfully' })
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            handleDuplicateEntryError(res, 'Equipo');
        } else if (error.code === 'ER_NO_REFERENCED_ROW_2') {
            handleNonExistentError(res, 'Equipo');
        } else if (error.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD') {
            handleInvalidDataError(res, 'Invalid data');
        } else {
            handleInternalServerError(error, res);
        }
    }
}

export const methodsEquipo = {
    getEquipo,
    addEquipo
}