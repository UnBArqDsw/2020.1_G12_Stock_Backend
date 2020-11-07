import express from 'express';
import AccessLevelController from '../app/controllers/AccessLevelController';

const routes = express.Router();

const PATH = '/accessLevel';

routes.get(PATH + '/list', AccessLevelController.index);

export default routes;
