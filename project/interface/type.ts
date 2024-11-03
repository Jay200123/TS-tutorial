import { Router, Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./interface";

type Middleware = (
    req: Request,
    res: Response,
    next: NextFunction,
) => void;

type Authenticate = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => void;

type Route = {  
    method: keyof Router;
    path?: string;
    middleware?: Authenticate[]
    handler: Middleware;
}


export {
    Request,
    Response,
    NextFunction,
    Route,
    Router,
}