import { Request, Response } from 'express';
export declare const getAllNotes: (
    req: Request,
    res: Response
) => Promise<Response<any, Record<string, any>>>;
export declare const createNote: (
    req: Request,
    res: Response
) => Promise<Response<any, Record<string, any>>>;
export declare const deleteNote: (
    req: Request,
    res: Response
) => Promise<Response<any, Record<string, any>>>;
