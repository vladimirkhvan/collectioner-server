import { Request, Response } from 'express';

export interface userContext {
    req: Request;
    res: Response;
}
