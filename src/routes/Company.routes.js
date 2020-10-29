import express from 'express';
import CompanyController from '../app/controllers/CompanyController';

const routes = express.Router();

const PATH = '/company/';

routes.post(
  PATH,
  CompanyController.create
);

export default routes;
