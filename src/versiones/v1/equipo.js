import { connect } from '../../connection/connection.js'
const db = await connect();

export const equipoV1 = async (req, res, next) => {
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

export const equipoV1_1 = async (req, res, next) => {
  console.log("Tamos en el post");
  // if(!req.rateLimit) return; 
  // try {
    
  // } catch (error) {
    
  // } 
}