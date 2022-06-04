export interface Task {
    id: number;
    message: string;
}

export interface EditTask {
    edit: boolean;
    task: Task;
}

export interface UpdateTask {
    id: number;
    updTask: Task;
}

const tasksData: Task[] = [
    {
        id: 1,
        message: 'Wake up before 8:00pm',
    },
    {
        id: 2,
        message: 'Study for exams!',
    },
    {
        id: 3,
        message: 'Read the book Lorem Ipsum',
    },
];

export default tasksData;
