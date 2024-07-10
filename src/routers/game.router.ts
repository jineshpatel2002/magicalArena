// PKGS
import { Router } from 'express';

// IMPORTS
import { routes } from "../constants/route.constant";

// CONTROLLERS
import { GameController } from '../controllers/game.controller';

// ROUTER INITIALIZATION
const router = Router();

// ROUTES
router.post(routes.GAME_INIT_ENDPOINT, GameController.initializeGame);
router.post(routes.PLAY_ROUND_ENDPOINT, GameController.playRound);
router.get(routes.STATUS_ENDPOINT,  GameController.getStatus);

export default router;
