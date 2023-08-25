import { validationResult } from "express-validator";
import { connect } from '../../connection/connection.js'
const db = await connect();

export const getTrainerAll = async (req, res, next) => {
    if(!req.rateLimit) return; 
    try{
        const result = await db.collection('Equipo').aggregate([
            {
              $project: {
                _id: 0,
                "id-equipo": "$equipo_id",
                "nombre-equipo": "$equipo_nombre",
                "tipo-equipo": "$equipo_tipo",
                "marca-equipo": "$equipo_marca",
                "modelo-equipo":"$equipo_modelo",
                "serie-equipo": "$equipo_serie",
                "estado-equipo":"$equipo_estado",
                "area-equipo": "$equipo_area",
                "creacion-equipo": "$equipo_creacion",
                "modificacion-equipo": "$equipo_modificacion" 
              }
            },
          ]).toArray();
        res.status(200).json(result);
    }catch(error) {
        res.status(500).json({ message: error.message });
    }
}

export const addTrainer = async (req, res, next) => {
  if(!req.rateLimit) return;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const result = await db.collection('Equipo').insertOne(req.body);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    console.log(error);
  } 
}