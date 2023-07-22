import express from 'express';

const app = express();
app.use(express.json());

app.use((err, res) => {
    handleInternalServerError(err, res);
});
export default app;