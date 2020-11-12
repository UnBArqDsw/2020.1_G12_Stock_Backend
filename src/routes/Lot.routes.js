import express from 'express';
import LotController from '../app/controllers/LotController';
import AuthorizationMiddleware from '../app/middlewares/Authorization';
import AccessLevelMiddleware from '../app/middlewares/AccessLevel';
import validateLotBody, {validateDecreaseLotBody} from '../app/middlewares/validation/lot';

const routes = express.Router();

const PATH = '/lot';

routes.post(
  PATH,
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  validateLotBody,
  LotController.create
);

routes.get(
  PATH + 's/:idProduct',
  AuthorizationMiddleware,
  AccessLevelMiddleware,
  LotController.index
);

routes.post(
  PATH + '/decreases',
  AuthorizationMiddleware,
  validateDecreaseLotBody,
  LotController.decreases
);

export default routes;
