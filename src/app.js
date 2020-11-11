import 'dotenv/config';
import express from 'express';
import setRoutes from './routes/index.routes';
import cors from 'cors';
import metaInfoMiddle from './app/middlewares/metaInfo';
import './database';

class App {
  constructor() {
    this.app = express();
    this.init();
    this.routes();
  }

  init() {
    this.app.use(metaInfoMiddle);
    this.app.use(express.json());
    this.app.use(cors({ exposedHeaders: 'x-auth-token' }));
  }

  routes() {
    setRoutes(this.app);
  }
}

export default new App().app;
