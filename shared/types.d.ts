export interface Note {
    id: number;
    name: string;
    created: string;
    category: NoteCategory;
    status: NoteStatus;
    content: string;
    dates: string;
}
export declare enum NoteCategory {
    Task = 'Task',
    Idea = 'Idea',
    Quote = 'Quote',
    Random = 'Random Thought'
}
export declare enum NoteStatus {
    Active = 'active',
    Archived = 'archived'
}
export interface CategoryCounter {
    active: number;
    archived: number;
}
