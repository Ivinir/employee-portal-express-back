import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import 'reflect-metadata';
import BaseRouter from './routes';
import { responseMiddleware } from './middlewares'

// Init express
const app = express();
const cors = require('cors');

// TODO : Fix cors import. do it the typescript way
const options: any = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: process.env.LOCAL_CLIENT,
  preflightContinue: false
};
app.use(cors());
app.options('*', cors(options));
// Add middleware/settings/routes to express.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', BaseRouter);





/**
 * Point express to the 'views' directory. If you're using a
 * single-page-application framework like react or angular
 * which has its own development server, you might want to
 * configure this to only serve the index file while in
 * production mode.
 */

// Export express instance
export default app;
