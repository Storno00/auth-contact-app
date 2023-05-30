import express from 'express';
import errorHandler from './middlewares/error-handler';
import api from './api/api-routes';
import auth from './auth/auth-routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', api);
app.use('/auth', auth);

app.use(errorHandler);

export default app;
