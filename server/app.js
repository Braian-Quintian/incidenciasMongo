import express from 'express';
import {login} from '../src/security/keys/login.js';
const app = express();
app.use(express.json());
app.use('/login', login);
// app.use('/:collection', dynamicRouter);
// app.use((err, req, res, next) => {handleInternalServerError(err, res);});
export default app;