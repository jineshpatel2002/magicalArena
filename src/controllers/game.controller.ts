import { Request, Response } from 'express';
import { IPlayer } from '../interfaces/player.interface';
import { GameService } from '../services/game.service';
import { StatusCodes } from 'http-status-codes';

const gameService = new GameService();

export class GameController {
  public static initializeGame(req: Request, res: Response): void {
    const { player1, player2 } = req.body as { player1: IPlayer, player2: IPlayer };
    const game = gameService.initializeGame(player1, player2);
    res.status(StatusCodes.OK).json({ 
        message: "Game is on!",
        data: {
            data: [game.player1, game.player2],
        },
      });
  }

  public static playRound(req: Request, res: Response): void {
    const { attackerName } = req.body;
    const result = gameService.playRound(attackerName);
    res.status(StatusCodes.OK).json({ 
        message: result.message,
        data: {
            data: [result.attacker, result.defender, result.defenderHealth],
        }
      });
  }

  public static getStatus(req: Request, res: Response): void {
    const status = gameService.getStatus();
    res.status(StatusCodes.OK).json({ 
        message: "Status of Players!",
        data: {
            data: [status.player1, status.player2],
        },
      });
  }
}
