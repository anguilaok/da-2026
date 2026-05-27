import express from 'express';
import { configureRouter } from './api/router.js';
import config from './config.js';
import mongoose from 'mongoose';
import './dependencies.js';

try {
  const app = express();

  configureRouter(app);

  await mongoose.connect(config.dbConnectionString);
  console.log('Connected to MongoDB');

  app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
  });
} catch (error) {
  console.error('Error starting the server:', error);
}
