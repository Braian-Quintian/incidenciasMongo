import express from 'express';
const app = express();
app.use(express.json());
app.get('/login', autenticacion);
app.use('/:collection', dynamicRouter);
app.use((err, req, res, next) => {handleInternalServerError(err, res);});
export default app;