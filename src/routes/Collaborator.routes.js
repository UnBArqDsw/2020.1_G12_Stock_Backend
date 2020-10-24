import express from 'express';
import CollaboratorController from '../app/controllers/CollaboratorController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';

const routes = express.Router();

const PATH = '/collaborator';

routes.post(PATH, CollaboratorController.create);
routes.get(
  PATH + 's/:idCompany',
  AuthorizationMiddleware,
  CollaboratorController.index
);
routes.post(PATH + '/auth', CollaboratorController.auth);
export default routes;
