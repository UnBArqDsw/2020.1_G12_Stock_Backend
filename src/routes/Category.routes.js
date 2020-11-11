import express from 'express';
import CategoryController from '../app/controllers/CategoryController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';
import AccessLevelMiddleware from '../app/middlewares/AccessLevel';
import validateCategoryBody from '../app/middlewares/validation/category';

const routes = express.Router();

const PATH = '/category';

routes.post(
  PATH,
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  validateCategoryBody,
  CategoryController.create
);

routes.get('/categories', AuthorizationMiddleware, CategoryController.index);

export default routes;
