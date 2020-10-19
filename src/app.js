import 'dotenv/config';
import express from 'express';
import setRoutes from './routes/index.routes';
import cors from 'cors';
import './database';

class App {
  constructor() {
    this.app = express();
    this.init();
    this.routes();
  }

  init() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    setRoutes(this.app);
  }
}

export default new App().app;
