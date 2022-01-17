import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import staticNotes from '../notes.js';
import { countCategories } from '../helpers/utils.js';
import { Note, NoteCategory } from '../types.js';

let notes = staticNotes;

export const getNoteStats = async (req: Request, res: Response) => {
    try {
        const tasks = countCategories(notes, NoteCategory.Task);
        const ideas = countCategories(notes, NoteCategory.Idea);
        const quotes = countCategories(notes, NoteCategory.Quote);
        const randomThoughts = countCategories(notes, NoteCategory.Random);

        return res.status(200).json({
            totalNotes: notes.length,
            totalActive: tasks.active + ideas.active + quotes.active + randomThoughts.active,
            totalArchived:
                tasks.archived + ideas.archived + quotes.archived + randomThoughts.archived,
            tasks,
            ideas,
            quotes,
            randomThoughts
        });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

export const getAllNotes = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ notes });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

export const getNoteById = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data'
            });
        }

        const { id } = req.params;

        const { ...note } = notes.find((elem) => elem.id === +id);

        return res.status(200).json({ note });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

export const createNote = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data'
            });
        }

        const note = req.body;
        notes = [...notes, note];

        return res.status(201).json({ note });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

export const deleteNote = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data'
            });
        }

        const { id } = req.params;

        notes = notes.filter((elem: Note) => elem.id !== +id);

        return res.status(200).json({
            message: `note with id: ${id} deleted`
        });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

export const editNote = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data'
            });
        }

        const note = req.body;

        notes = notes.map((elem: Note) => {
            if (elem.id === note.id) {
                return note;
            }
            return elem;
        });

        return res.status(200).json({ notes });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
