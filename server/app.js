import express from 'express';
import { router as Trainers} from '../src/middlewares/trainers.js';
import { handleInternalServerError } from '../src/errors/errors.js';
const app = express();
app.use(express.json());


app.use('/trainers',Trainers);

app.use((err, res) => {
    handleInternalServerError(err, res);
});
export default app;