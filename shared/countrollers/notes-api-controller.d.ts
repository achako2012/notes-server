import { Request, Response } from 'express';
export declare const getNotes: (
    req: Request,
    res: Response
) => Promise<Response<any, Record<string, any>>>;
