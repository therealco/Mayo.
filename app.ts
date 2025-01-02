import express from 'express';
import externalRoutes from './routes/externalRoutes';
// Import necessary libraries
const app = express(); 
// Defines a constant called app
app.use(express.json());
app.use('/api', externalRoutes);
// Uses part of the constant app
export default app;
// END
