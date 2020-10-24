import express from 'express';
import CategoryController from '../app/controllers/CategoryController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';

const routes = express.Router();

const PATH = '/category';

routes.post(PATH, AuthorizationMiddleware, CategoryController.create);
export default routes;
