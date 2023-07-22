import express from 'express';
import { handleInternalServerError } from '../src/errors/errors.js';
const app = express();
app.use(express.json());

app.use((err, res) => {
    handleInternalServerError(err, res);
});
export default app; 