import express from 'express';
import ProductController from '../app/controllers/ProductController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';

const routes = express.Router();

const PATH = '/product';

routes.post(PATH, AuthorizationMiddleware, ProductController.create);
routes.post(
  PATH + '/destroy',
  AuthorizationMiddleware,
  ProductController.destroy
);
routes.post(
  PATH + '/decreases',
  AuthorizationMiddleware,
  ProductController.decrease
);
export default routes;
