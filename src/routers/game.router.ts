// PKGS
import { Router } from 'express';
// CONTROLLERS
import { GameController } from '../controllers/game.controller';
// MIDDLEWARES
import { handleResponseStatus } from '../middlewares/statusHandler.middleware';

// ROUTER INITIALIZATION
const router = Router();

// ROUTES
router.post('/initialize', GameController.initializeGame);
router.post('/play-round', GameController.playRound);
router.get('/status', GameController.getStatus);

export default router;
