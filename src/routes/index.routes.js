import CollaboratorRoutes from './Collaborator.routes';
import ProductRoutes from './Product.routes';
import LotRoutes from './Lot.routes';
import CategoryRoutes from './Category.routes';
import BelongsRoutes from './Belongs.routes';
import DecreasesRoutes from './Decreases.routes';
import ProductRoutes from './Product.routes';

export default function SetRoutes(app) {
  app.use('/api', [CollaboratorRoutes]);
  app.use('/api', [ProductRoutes]);
  app.use('/api', [LotRoutes]);
  app.use('/api', [CategoryRoutes]);
  app.use('/api', [BelongsRoutes]);
  app.use('/api', [DecreasesRoutes]);
  app.use('/api', [ProductRoutes]);
}
