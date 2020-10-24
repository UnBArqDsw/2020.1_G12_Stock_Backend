import express from 'express';
import BelongsController from '../app/controllers/BelongsController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';
import AccessLevelMiddleware from '../app/middlewares/AccessLevel';

const routes = express.Router();

const PATH = '/belongs';

routes.post(
  PATH,
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  BelongsController.create
);

routes.get(
  PATH + '/productCategories/:idProduct',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  BelongsController.index
);

export default routes;
