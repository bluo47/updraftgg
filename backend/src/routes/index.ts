import { Application, Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export const setRoutes = (app: Application) => {
    router.get('/api/data', indexController.getData);
    router.post('/api/data', indexController.createData);

    // Add route for player agent calls
    router.get('/api/player-agent-counts/:player', indexController.getPlayerAgentCounts);

    // Add more routes as needed

    app.use(router);
};