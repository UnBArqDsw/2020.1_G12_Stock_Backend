import express from 'express';
import ProductController from '../app/controllers/ProductController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';

const routes = express.Router();

const PATH = '/product';

routes.post(
  PATH + '/create',
  AuthorizationMiddleware,
  ProductController.create
);
routes.get(PATH + '/teste', AuthorizationMiddleware, function a(req, res) {
  return res.json('ola');
});
export default routes;
