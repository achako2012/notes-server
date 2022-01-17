import { Router } from 'express';
import { check } from 'express-validator';
import {
    createNote,
    deleteNote,
    editNote,
    getAllNotes,
    getNoteById,
    getNoteStats
} from '../controllers/notes-api-controller.js';

const router = Router();

const noteValidator = [
    check('id').exists().withMessage("Id isn't exist").notEmpty().withMessage("Shouldn't be empty"),
    check('name').exists().withMessage("Name isn't exist"),
    check('created').exists().withMessage("Created isn't exist"),
    check('category')
        .exists()
        .withMessage("Category isn't exist")
        .notEmpty()
        .withMessage("Shouldn't be empty"),
    check('status')
        .exists()
        .withMessage("Status isn't exist")
        .notEmpty()
        .withMessage("Shouldn't be empty"),
    check('content').exists().withMessage("Content isn't exist"),
    check('dates').exists().withMessage("Dates isn't exist")
];

const idNoteValidator = [
    check('id').exists().withMessage("Id isn't exist").notEmpty().withMessage("Shouldn't be empty")
];

router.get('/notes/stats', getNoteStats);

router.get('/notes', getAllNotes);

router.get('/notes/:id', idNoteValidator, getNoteById);

router.post('/notes', noteValidator, createNote);

router.delete('/notes/:id', idNoteValidator, deleteNote);

router.patch('/notes', noteValidator, editNote);

export default router;
