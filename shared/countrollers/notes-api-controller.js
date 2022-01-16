import { validationResult } from 'express-validator';
import staticNotes from '../notes.js';
let notes = staticNotes;
export const getAllNotes = async (req, res) => {
    try {
        return res.status(200).json({ notes });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
export const createNote = async (req, res) => {
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
export const deleteNote = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data'
            });
        }
        const { id } = req.body;
        notes = notes.filter((elem) => elem.id !== id);
        return res.status(200).json({
            message: `note with id: ${id} deleted`
        });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
//# sourceMappingURL=notes-api-controller.js.map
