import express from 'express';
import AccessLevelController from '../app/controllers/AccessLevelController';

const routes = express.Router();

const PATH = '/accessLevel';

routes.get(PATH + '/show/:idAccessLevel', AccessLevelController.index);

routes.get(PATH + '/list', AccessLevelController.listAll);

export default routes;
