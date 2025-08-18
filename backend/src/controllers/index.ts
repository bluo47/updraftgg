import { Request, Response } from 'express';
import { pool } from '../db/postgres'; // Assumes you export a 'pool' from postgres.ts

class IndexController {
    async getData(req: Request, res: Response) {
        try {
            const result = await pool.query('SELECT * FROM matches');
            res.json(result.rows);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    }

    async getPlayerAgentCounts(req: Request, res: Response) {
        const { player } = req.params;
        try {
            const result = await pool.query(`
                SELECT * FROM get_player_agent_counts($1)
            `, [player]);
            res.json(result.rows);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    }

    async createData(req: Request, res: Response) {
        const { name, value } = req.body;
        try {
            const result = await pool.query(
                'INSERT INTO data (name, value) VALUES ($1, $2) RETURNING *',
                [name, value]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create data' });
        }
    }

    async updateData(req: Request, res: Response) {
        const { id } = req.params;
        const { name, value } = req.body;
        try {
            const result = await pool.query(
                'UPDATE data SET name = $1, value = $2 WHERE id = $3 RETURNING *',
                [name, value, id]
            );
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Data not found' });
            }
            res.json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update data' });
        }
    }

    async deleteData(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await pool.query(
                'DELETE FROM data WHERE id = $1 RETURNING *',
                [id]
            );
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Data not found' });
            }
            res.json({ message: 'Data deleted', data: result.rows[0] });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete data' });
        }
    }
}

export default IndexController;