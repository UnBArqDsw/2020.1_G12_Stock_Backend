import express from 'express';
import CategoryController from '../app/controllers/CategoryController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';
import AccessLevelMiddleware from '../app/middlewares/AccessLevel';

const routes = express.Router();

const PATH = '/category';

routes.post(
  PATH,
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  CategoryController.create
);
routes.get(
    '/categories/:idCompany',
    AuthorizationMiddleware,
    AccessLevelMiddleware,
    CategoryController.index
  );
export default routes;
