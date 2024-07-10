import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

// This middleware will be used to add a success field to the response
export const handleResponseStatus = (req: Request, res: Response, next: NextFunction) => {
    const originalSend = res.json;

    res.json = function (data: { success?: boolean } & object) {
        !("success" in data) &&
            (data.success = res.statusCode >= StatusCodes.OK && res.statusCode < StatusCodes.BAD_REQUEST);

        return originalSend.call(this, data);
    };
    next();
};