import express from 'express';
import CompanyController from '../app/controllers/CompanyController';
import validateCreateCompanyBody from '../app/middlewares/validation/company';

const routes = express.Router();

const PATH = '/company';

routes.post(
  PATH,
  validateCreateCompanyBody,
  CompanyController.create);

export default routes;
