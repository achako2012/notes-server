import { Request, Response } from 'express';
export declare const getNoteStats: (
    req: Request,
    res: Response
) => Promise<Response<any, Record<string, any>>>;
export declare const getAllNotes: (
    req: Request,
    res: Response
) => Promise<Response<any, Record<string, any>>>;
export declare const getNoteById: (
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
export declare const editNote: (
    req: Request,
    res: Response
) => Promise<Response<any, Record<string, any>>>;
