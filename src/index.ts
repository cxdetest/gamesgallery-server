import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import games_routes from './routes/games.routes';

class Server {
  public app: Application;

  constructor() {
    dotenv.config();
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set('PORT', process.env.PORT || 3200);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes(): void {
    this.app.use('/games', games_routes);
  }

  start(): void {
    this.app.listen(this.app.get('PORT'), () => {
      `server on port http://localhost:${this.app.get('PORT')}`;
    });
  }
}

const server = new Server();
server.start();
