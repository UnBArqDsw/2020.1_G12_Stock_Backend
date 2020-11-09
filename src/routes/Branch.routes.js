import express from 'express';
import BranchController from '../app/controllers/BranchController';

const routes = express.Router();

const PATH = '/branch/';

routes.get(PATH, BranchController.index);

export default routes;
