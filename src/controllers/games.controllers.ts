import { Request, Response } from 'express';
import pool from '../db';

class GamesController {
  public async createGame(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, image } = req.body;
      await pool.query('INSERT INTO games set ?', [
        { title, description, image },
      ]);
      res.json({ message: 'saved' });
    } catch (error) {
      console.error(error);
    }
  }

  public async games(req: Request, res: Response): Promise<void> {
    try {
      const result = await pool.query('SELECT* FROM games');
      res.json(result[0]);
    } catch (error) {
      console.error(error);
    }
  }

  public async getGame(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const result = await pool.query('SELECT * FROM games WHERE id = ?', [id]);

      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      console.error(error);
    }
  }

  public async editGame(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { title, description, image } = req.body;

      await pool.query('UPDATE games set ? WHERE id = ?', [
        { title, description, image },
        id,
      ]);
      res.json({ message: 'updated' });
    } catch (error) {
      console.error(error);
    }
  }

  public async deleteGame(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM games WHERE id = ?', [id]);
      res.json({ message: 'deleted' });
    } catch (error) {
      console.error(error);
    }
  }
}

export const games_controller = new GamesController();
