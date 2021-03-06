import CollaboratorRoutes from './Collaborator.routes';
import endpoints from '../utils/endpoints';
import ProductRoutes from './Product.routes';
import LotRoutes from './Lot.routes';
import CategoryRoutes from './Category.routes';
import BelongsRoutes from './Belongs.routes';
import DecreasesRoutes from './Decreases.routes';
import AccessLevelRoutes from './AccessLevel.routes';
import CompanyRoutes from './Company.routes';
import BranchRoutes from './Branch.routes';

export default function SetRoutes(app) {
  app.use('/endpoints', (req, res) => {
    return res.json(endpoints());
  });
  app.use('/api', [CollaboratorRoutes]);
  app.use('/api', [ProductRoutes]);
  app.use('/api', [LotRoutes]);
  app.use('/api', [CategoryRoutes]);
  app.use('/api', [BelongsRoutes]);
  app.use('/api', [DecreasesRoutes]);
  app.use('/api', [AccessLevelRoutes]);
  app.use('/api', [ProductRoutes]);
  app.use('/api', [CompanyRoutes]);
  app.use('/api', [BranchRoutes]);
}
