import { Button, FormControl, TextField } from '@mui/material';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { addTask, updateTask } from '../hooks/taskSlice';
import { Task } from '../mockData/tasksData';

const TaskForm = () => {
    const { tasks, currentTask } = useAppSelector((state) => state.task);
    const dispatch = useAppDispatch();

    const [task, setTask] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    // note2.: Here, you need to perform a side effect, because that will 'spread' to form's component
    useEffect(() => {
        if (currentTask.edit) {
            setIsDisabled(false);
            setTask(currentTask.task.message);
        }
    }, [currentTask]);

    const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTask: Task = {
            id: tasks.length + 1,
            message: task!,
        };

        if (task.trim().length > 0) {
            // note4.: Finally, you need to check what method will run
            if (currentTask.edit) {
                dispatch(
                    updateTask({ id: currentTask.task.id, updTask: newTask })
                );
            } else {
                dispatch(addTask(newTask));
            }

            setTask('');
            setIsDisabled(true);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== '' || e.target.value.trim().length > 0) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }

        setTask(e.target.value);
    };

    return (
        <FormControl
            onSubmit={handleSubmit}
            component='form'
            sx={{ width: '60%' }}
        >
            <TextField
                id='task'
                name='task'
                variant='outlined'
                label='Task'
                aria-describedby='task input'
                sx={{ my: 1 }}
                onChange={handleChange}
                value={task}
            />
            <Button
                type='submit'
                variant='contained'
                sx={{ p: 2, my: 1 }}
                disabled={isDisabled}
            >
                Submit data
            </Button>
        </FormControl>
    );
};

export default TaskForm;
