"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const games_controllers_1 = require("../controllers/games.controllers");
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', games_controllers_1.games_controller.createGame);
        this.router.get('/', games_controllers_1.games_controller.games);
        this.router.get('/:id', games_controllers_1.games_controller.getGame);
        this.router.put('/:id', games_controllers_1.games_controller.editGame);
        this.router.delete('/:id', games_controllers_1.games_controller.deleteGame);
    }
}
const games_routes = new GamesRoutes();
exports.default = games_routes.router;
