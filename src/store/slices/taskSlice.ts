import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import tasksData, {
    Task,
    EditTask,
    UpdateTask,
} from '../../mockData/tasksData';

interface ITaskState {
    tasks: Task[];
    currentTask: EditTask;
}

const initialState: ITaskState = {
    tasks: tasksData,
    currentTask: {
        edit: false,
        task: {
            id: 0,
            message: '',
        },
    },
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks = [action.payload, ...state.tasks];
        },

        editTask: (state, action: PayloadAction<EditTask>) => {
            /* The main concept to perform an edit action */
            // note1.: You need a state to capture the current task with a flag to set edit to true
            state.currentTask = {
                edit: true,
                task: {
                    id: action.payload.task.id,
                    message: action.payload.task.message,
                },
            };
        },
        updateTask: (state, action: PayloadAction<UpdateTask>) => {
            // note3.: A function that will update the task's array
            state.tasks = state.tasks.map((item) =>
                item.id === action.payload.id
                    ? { ...item, ...action.payload.updTask }
                    : item
            );
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { addTask, editTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
