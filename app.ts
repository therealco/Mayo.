import express from 'express';
import externalRoutes from './routes/externalRoutes';

const app = express();

app.use(express.json());
app.use('/api', externalRoutes);

export default app;
