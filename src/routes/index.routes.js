import CollaboratorRoutes from './Collaborator.routes';
import endpoints from '../utils/endpoints';

export default function SetRoutes(app) {
  app.use('/', (req, res) => {
    return res.json(endpoints());
  });
  app.use('/api', [CollaboratorRoutes]);
}
