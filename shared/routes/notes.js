import { Router } from 'express';
import { check } from 'express-validator';
import { createNote, deleteNote, getAllNotes } from '../countrollers/notes-api-controller.js';
const router = Router();
const creatingNoteValidator = [
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
const deleteNoteValidator = [
    check('id').exists().withMessage("Id isn't exist").notEmpty().withMessage("Shouldn't be empty")
];
router.get('/notes', getAllNotes);
router.post('/notes', creatingNoteValidator, createNote);
router.delete('/notes', deleteNoteValidator, deleteNote);
export default router;
//# sourceMappingURL=notes.js.map