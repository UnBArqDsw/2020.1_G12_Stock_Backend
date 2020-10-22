import express from 'express';
import LotController from '../app/controllers/LotController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';

const routes = express.Router();

const PATH = '/lot';

routes.post(PATH + '/create', AuthorizationMiddleware, LotController.create);
routes.post(PATH + '/decreases', AuthorizationMiddleware, LotController.decreases);
export default routes;
