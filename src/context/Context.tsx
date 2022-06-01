import { createContext, useState } from 'react';
import tasksData, { EditTask, Task } from '../mockData/tasksData';

interface IContext {
    tasks: Task[];
    task: EditTask;
    addTask: (item: Task) => void;
    editTask: (item: EditTask) => void;
    updateTask: (id: number, item: Task) => void;
    deleteTask: (id: number) => void;
}

export const Context = createContext<IContext>({
    tasks: [],
    task: { edit: false, task: { id: 0, message: '' } },
    addTask: () => {},
    editTask: () => {},
    updateTask: () => {},
    deleteTask: () => {},
});

interface IContextProvider {
    children: JSX.Element;
}

const ContextProvider = ({ children }: IContextProvider) => {
    const [tasks, setTasks] = useState<Task[]>(tasksData);
    const [task, setTask] = useState<EditTask>({
        edit: false,
        task: {
            id: 0,
            message: '',
        },
    });

    const addTask = (item: Task) => {
        setTasks((prevState) => [item, ...prevState]);
    };

    /* The main concept to perform an edit action */
    // note1.: You need a state to capture the current task with a flag to set edit to true
    const editTask = (item: EditTask) => {
        setTask({
            edit: true,
            task: {
                id: item.task.id,
                message: item.task.message,
            },
        });
    };

    // note3.: A function that will update the task's array
    const updateTask = (id: number, updItem: Task) => {
        setTasks((prevState) =>
            prevState.map((item) =>
                item.id === id ? { ...item, ...updItem } : item
            )
        );

        setTask({ edit: false, task: { id: 0, message: '' } });
    };

    const deleteTask = (id: number) => {
        setTasks((prevState) => prevState.filter((item) => item.id !== id));
    };

    const value = {
        tasks,
        task,
        addTask,
        editTask,
        updateTask,
        deleteTask,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
