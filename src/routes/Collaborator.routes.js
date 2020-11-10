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

routes.get(
  PATH + '/:idCollaborator',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  CollaboratorController.getCollaborator
);

routes.post(PATH + '/auth', CollaboratorController.auth);

routes.put(
  PATH + '/update/profile/:idCollaborator',
  AuthorizationMiddleware,
  CollaboratorController.updateProfile
);

routes.put(
  PATH + '/update/collaborator/:idCollaborator',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  CollaboratorController.updateCollaborator
);

export default routes;
