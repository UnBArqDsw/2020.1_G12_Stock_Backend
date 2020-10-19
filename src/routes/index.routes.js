import CollaboratorRoutes from './Collaborator.routes';

export default function SetRoutes(app) {
  app.use('/api', [CollaboratorRoutes]);
}
