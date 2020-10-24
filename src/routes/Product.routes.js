import express from 'express';
import ProductController from '../app/controllers/ProductController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';
import AccessLevelMiddleware from '../app/middlewares/AccessLevel';

const routes = express.Router();

const PATH = '/product';

routes.post(
  PATH,
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  ProductController.create
);
routes.post(
  PATH + '/destroy',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  ProductController.destroy
);
routes.post(
  PATH + '/decreases',
  AuthorizationMiddleware,
  ProductController.decrease
);
export default routes;
