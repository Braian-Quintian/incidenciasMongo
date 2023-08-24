import { validationResult } from "express-validator";
import { connect } from '../../connection/connection.js'
const db = await connect();

export const equipoV1 = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let { nombre:nom} = req.body;
    let data = Object.assign({nom})
    console.log(data);
    if(!req.rateLimit) return; 
    try{
        const result = await db.collection('Equipo').find().toArray();
        res.status(200).json(result);
    }catch(error) {
        res.status(500).json({ message: error.message });
    }
}