import { Router } from 'express'
import CollaboratorController from '../controllers/CollaboratorController'

const routes = Router()

const path = '/collaborator/'

routes.get(path + 'teste', CollaboratorController.collaboratorTeste)

export default routes