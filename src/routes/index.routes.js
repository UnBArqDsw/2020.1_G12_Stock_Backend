import CollaboratorRoutes from './Collaborator.routes';
import ProductRoutes from './Product.routes';
import LotRoutes from './Lot.routes'

export default function SetRoutes(app) {
  app.use('/api', [CollaboratorRoutes]);
  app.use('/api', [ProductRoutes]);
  app.use('/api', [LotRoutes]);
}
