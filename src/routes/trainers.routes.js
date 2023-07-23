import { getConnection } from '../connection/connect.js'
import { handleInternalServerError } from '../errors/errors.js'

const getTrainers = async (req,res) => {
    try {
        const connection = await getConnection();
        const query = 'SELECT * FROM Trainer';
        const [rows] = await connection.query(query);
        res.json(rows);
    } catch (error) {
        handleInternalServerError(error,res);
    }
};

export const methodsTrainers = {
    getTrainers
}

// addTraine