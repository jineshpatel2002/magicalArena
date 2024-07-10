import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from "http-status-codes";


export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 
    message: err.message,
    data: {
        data: [],
    },
  });
}
