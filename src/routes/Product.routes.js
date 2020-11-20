import express from 'express';
import ProductController from '../app/controllers/ProductController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';
import AccessLevelMiddleware from '../app/middlewares/AccessLevel';
import validateProductBody, {
  validateDecreaseProductBody,
} from '../app/middlewares/validation/product';

const routes = express.Router();

const PATH = '/product';

routes.post(
  PATH,
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  validateProductBody,
  ProductController.create
);

routes.get(PATH + 's', AuthorizationMiddleware, ProductController.index);

routes.post(
  PATH + '/destroy',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  ProductController.destroy
);

routes.post(
  PATH + '/decreases',
  AuthorizationMiddleware,
  validateDecreaseProductBody,
  ProductController.decrease
);

export default routes;
