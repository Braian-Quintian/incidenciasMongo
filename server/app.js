import express from 'express';
import { methodsTrainers } from '../src/routes/trainers.routes.js';
import { handleInternalServerError } from '../src/errors/errors.js';
const app = express();
app.use(express.json());

app.use('/trainers',methodsTrainers.getTrainers);

app.use((err, res) => {
    handleInternalServerError(err, res);
});
export default app;