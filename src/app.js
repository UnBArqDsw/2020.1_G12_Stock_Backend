import 'dotenv/config';
import express from 'express';
import './database';

class App {
  constructor() {
    this.app = express();
    this.init();
  }

  init() {
    this.app.use('/', (req, res) => {
      res.send('teste');
    });
  }
}

export default new App().app;
