"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.games_controller = void 0;
const db_1 = __importDefault(require("../db"));
class GamesController {
    createGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, image } = req.body;
                yield db_1.default.query('INSERT INTO games set ?', [
                    { title, description, image },
                ]);
                res.json({ message: 'saved' });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    games(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query('SELECT* FROM games');
                res.json(result[0]);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield db_1.default.query('SELECT * FROM games WHERE id = ?', [id]);
                if (result.length > 0) {
                    res.json(result[0]);
                }
                else {
                    res.sendStatus(404);
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    editGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { title, description, image } = req.body;
                yield db_1.default.query('UPDATE games set ? WHERE id = ?', [
                    { title, description, image },
                    id,
                ]);
                res.json({ message: 'updated' });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    deleteGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield db_1.default.query('DELETE FROM games WHERE id = ?', [id]);
                res.json({ message: 'deleted' });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.games_controller = new GamesController();
