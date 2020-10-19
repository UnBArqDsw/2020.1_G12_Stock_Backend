import express from 'express';
import CollaboratorController from '../app/controllers/CollaboratorController';

const routes = express.Router();

const PATH = '/collaborator/';

routes.post(PATH + 'create', CollaboratorController.create);
export default routes;
