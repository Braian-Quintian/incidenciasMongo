import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Trainer } from '../../controller/validateTrainer.js';
import { connect } from '../connection/connection.js'
import { handleInternalServerError, handleDuplicateEntryError, handleInvalidDataError, handleNonExistentError } from '../errors/errors.js'

const getTrainers = async (req,res) => {
    try {
        const connection = await connect();
        const query = 'SELECT * FROM Trainer';
        const [rows] = await connection.query(query);
        res.json(rows);
    } catch (error) {
        handleInternalServerError(error, res);
    }
};z

const addTrainer = async (req, res) => {
    try {
        const dataSend = plainToClass(Trainer, req.body);
        const validationErrors = await validate(dataSend);

        if (validationErrors.length > 0) {
            handleInvalidDataError(res, validationErrors);
            return;
        }

        const connection = await connect();
        const query = `INSERT INTO Trainer(nombre, email_Personal, email_Corporativo, telefono_Movil, telefono_Residencia, telefono_Empresa, telefono_Movil_Empresarial) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const values = [dataSend.name, dataSend.personalEmail, dataSend.corporativeEmail, dataSend.mobilePhone, dataSend.residencePhone, dataSend.workPhone, dataSend.workMobilePhone];
        await connection.query(query, values);
        res.json({ message: 'Trainer added successfully' })
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            handleDuplicateEntryError(res);
        } else if (error.code === 'ER_NO_REFERENCED_ROW_2') {
            handleNonExistentError(error, res);
        } else if (error.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD') {
            handleInvalidDataError(error, res);
        } else {
            handleInternalServerError(error, res);
        }
    }
}

export const methodsTrainers = {
    getTrainers,
    addTrainer
}
