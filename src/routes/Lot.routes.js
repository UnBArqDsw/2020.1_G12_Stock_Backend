import express from 'express';
import LotController from '../app/controllers/LotController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';
import AccessLevelMiddleware from '../app/middlewares/AccessLevel';

const routes = express.Router();

const PATH = '/lot';

routes.post(
  PATH,
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  LotController.create
);
routes.post(
  PATH + '/decreases',
  AuthorizationMiddleware,
  LotController.decreases
);
export default routes;
