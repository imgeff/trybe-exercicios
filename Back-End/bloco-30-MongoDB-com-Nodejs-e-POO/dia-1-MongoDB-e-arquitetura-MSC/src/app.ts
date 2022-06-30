import express, { Application } from 'express';
import WorldCupRoute from './routes/WorldCupRoute';
import createConnection from './models/connection';

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();

    createConnection();
  }

  private middlewares = () => {
    this.app.use(express.json());
  }

  private routes = () => {
    this.app.use('/editions', WorldCupRoute);
  }
}