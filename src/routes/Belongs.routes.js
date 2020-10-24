import express from 'express';
import BelongsController from '../app/controllers/BelongsController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';

const routes = express.Router();

const PATH = '/belongs';

routes.post(PATH, AuthorizationMiddleware, BelongsController.create);
export default routes;
