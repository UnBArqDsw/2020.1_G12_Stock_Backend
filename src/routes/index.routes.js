import CollaboratorRoutes from './Collaborator.routes';
import ProductRoutes from './Product.routes';

export default function SetRoutes(app) {
  app.use('/api', [CollaboratorRoutes]);
  app.use('/api', [ProductRoutes]);
}
