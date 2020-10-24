import express from 'express';
import CollaboratorController from '../app/controllers/CollaboratorController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';
import AccessLevelMiddleware from '../app/middlewares/AccessLevel';

const routes = express.Router();

const PATH = '/collaborator';

routes.post(PATH, CollaboratorController.create);
routes.get(
  PATH + 's/:idCompany',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  CollaboratorController.index
);
routes.post(PATH + '/auth', CollaboratorController.auth);
export default routes;
