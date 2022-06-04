import { Typography } from '@mui/material';
import { useAppSelector } from '../hooks/hooks';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks } = useAppSelector((state) => state.task);

    return (
        <>
            <Typography variant='h5' marginTop={3} color='primary'>
                Tasks to-do
            </Typography>
            {tasks.length === 0 && (
                <Typography variant='h5' paddingY={3} color='error'>
                    No tasks available!
                </Typography>
            )}
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default TaskList;
