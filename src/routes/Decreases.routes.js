import express from 'express';
import DecreasesController from '../app/controllers/DecreasesController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';
import AccessLevelMiddleware from '../app/middlewares/AccessLevel';

const routes = express.Router();

const PATH = '/decreases';

routes.get(
  PATH + '/:idDecreasesType',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  DecreasesController.index
);

export default routes;
