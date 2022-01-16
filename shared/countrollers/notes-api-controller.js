import { validationResult } from 'express-validator';
import notes from "../notes.js";
export const getNotes = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data while registration'
            });
        }
        const { email, password } = req.body;
        return res.status(200).json({
            message: {
                notes
            }
        });
    }
    catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
//# sourceMappingURL=notes-api-controller.js.map