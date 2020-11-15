import 'dotenv/config';
import express from 'express';
import setRoutes from './routes/index.routes';
import cors from 'cors';
import metaInfoMiddle from './app/middlewares/metaInfo';
import { setUpSocket } from './websocket';
import http from 'http';
import './database';

class App {
  constructor() {
    this.app = express();
    this.init();
    this.routes();
    this.setUpSocket();
  }

  init() {
    this.app.use(metaInfoMiddle);
    this.app.use(express.json());
    this.app.use(
      cors({
        exposedHeaders: 'x-auth-token',
        origin: 'http://localhost:3000',
        allowedHeaders: '*',
      })
    );
  }

  setUpSocket() {
    const server = http.Server(this.app);
    setUpSocket(server);
  }

  routes() {
    setRoutes(this.app);
  }
}

export default new App().app;
