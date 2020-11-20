import express from 'express';
import DecreasesController from '../app/controllers/DecreasesController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';
import AccessLevelMiddleware from '../app/middlewares/AccessLevel';

const routes = express.Router();

const PATH = '/decreases';

routes.get(
  PATH + '/weekSales',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  DecreasesController.getDecreasesByWeek
);

routes.get(
  PATH + '/daySales',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  DecreasesController.listDaySales
);

routes.get(
  PATH + '/:idDecreasesType',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  DecreasesController.index
);

export default routes;
