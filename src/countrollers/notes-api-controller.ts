import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import notes from '../notes.js';

// eslint-disable-next-line import/prefer-default-export
export const getNotes = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data while registration'
            });
        }

        // const { email, password } = req.body;

        return res.status(200).json({ notes });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
