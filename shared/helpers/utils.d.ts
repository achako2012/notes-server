import { Note } from '../types.js';
export declare const countCategories: (
    arr: Note[],
    searchKey: string
) => {
    active: number;
    archived: number;
};
