import mysql from 'mysql2/promise';
import credentials from './credentials.js';

const pool = mysql.createPool({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
    database: credentials.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export async function getConnection() {
    try {
        return pool;
    } catch (error) {
        console.error('Error al establecer la conexión:', error);
        throw new Error('Error de conexión a la base de datos');
    }
}