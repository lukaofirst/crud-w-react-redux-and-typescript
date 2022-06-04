import { Paper, Typography, Box, Button } from '@mui/material';
import { Task } from '../mockData/tasksData';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../hooks/hooks';
import { deleteTask, editTask } from '../hooks/taskSlice';

interface ITaskItem {
    task: Task;
}

const TaskItem = ({ task }: ITaskItem) => {
    const dispatch = useAppDispatch();

    const { id, message } = task;

    const handleEdit = () => {
        dispatch(
            editTask({
                edit: true,
                task,
            })
        );
    };

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    return (
        <Paper
            key={id}
            elevation={2}
            sx={{
                width: '60%',
                py: 2,
                my: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
            }}
        >
            <Typography textAlign='left' marginLeft={3}>
                {message}
            </Typography>
            <Box marginRight={1}>
                <Button onClick={handleEdit}>
                    <EditIcon
                        sx={{
                            color: 'rgba(0,0,0,0.5)',
                        }}
                    />
                </Button>
                <Button onClick={handleDelete}>
                    <DeleteIcon
                        sx={{
                            color: 'rgba(0,0,0,0.5)',
                        }}
                    />
                </Button>
            </Box>
        </Paper>
    );
};

export default TaskItem;
