import collaboratorRoutes from './collaborator.routes'

export default function (app) {
  app.use('/api', [collaboratorRoutes])
}
