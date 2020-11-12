import express from 'express';
import CollaboratorController from '../app/controllers/CollaboratorController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';
import AccessLevelMiddleware from '../app/middlewares/AccessLevel';

const routes = express.Router();

const PATH = '/collaborator';

routes.post(PATH, CollaboratorController.create);

routes.get(
  PATH + 's',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  CollaboratorController.index
);

routes.get(
  '/min'+PATH+'s',
  AuthorizationMiddleware,
  CollaboratorController.min
);

routes.get(
  PATH,
  AuthorizationMiddleware,
  CollaboratorController.find
);

routes.get(
  PATH+'/:idCollaborator',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  CollaboratorController.findByPk
);

routes.post(PATH + '/auth', CollaboratorController.auth);

export default routes;
