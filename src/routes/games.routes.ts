import { Router } from 'express';
import { games_controller } from '../controllers/games.controllers';

class GamesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.post('/', games_controller.createGame);
    this.router.get('/', games_controller.games);
    this.router.get('/:id', games_controller.getGame);
    this.router.put('/:id', games_controller.editGame);
    this.router.delete('/:id', games_controller.deleteGame);
  }
}

const games_routes = new GamesRoutes();
export default games_routes.router;
