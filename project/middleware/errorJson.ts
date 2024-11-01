import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../utils";
import { STATUSCODE, ERROR } from "../constants";

type ErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => void;

const errorJson: ErrorMiddleware = (err, req, res, next) => {
    if (!(err instanceof ErrorHandler)) {
        err = new ErrorHandler(err.message || ERROR.INTERNAL_SERVER_ERROR);
    }
    next(err);
};

const errorHandler: ErrorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || STATUSCODE.INTERNAL_SERVER_ERROR;
    const message = err.message || ERROR.INTERNAL_SERVER_ERROR;

    res.status(statusCode).json({
        success: false,
        error: {
            message: message,
        },
    });
};

export { errorJson, errorHandler };
