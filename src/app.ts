// PKGS
import express from 'express';

// ROUTES
import gameRouter from './routers/game.router';

// IMPORTS
import { routes } from './constants/route.constant';
import { handleResponseStatus } from './middlewares/statusHandler.middleware';

// INITIALIZATION
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(handleResponseStatus);

// ROUTERS
app.use(routes.GAME_ENDPOINT, gameRouter);

