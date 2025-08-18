import express from 'express';
import { pool } from './db/postgres';
import { setRoutes } from './routes/index';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Optionally, test the database connection before starting the server
pool.connect()
    .then(client => {
        client.release();
        console.log('Connected to PostgreSQL database');
        setRoutes(app);

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err: unknown) => {
        console.error('Database connection error:', err);
        process.exit(1);
    });

app.get('/', (_req, res) => {
    res.send('Backend API is running');
});