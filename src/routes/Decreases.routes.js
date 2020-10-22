import express from 'express';
import DecreasesController from '../app/controllers/DecreasesController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';

const routes = express.Router();

const PATH = '/decreases';

export default routes;
