import { Paper, Typography, Box, Button } from '@mui/material';
import { Task } from '../mockData/tasksData';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { Context } from '../context/Context';

interface ITaskItem {
    task: Task;
}

const TaskItem = ({ task }: ITaskItem) => {
    const { editTask, deleteTask } = useContext(Context);

    const { id, message } = task;

    return (
        <Paper
            key={id}
            elevation={2}
            sx={{
                width: '100%',
                py: 2,
                my: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
            }}
        >
            <Typography
                textAlign='left'
                marginLeft={3}
                sx={{ width: '55%', wordBreak: 'break-all' }}
            >
                {message}
            </Typography>
            <Box marginRight={1}>
                <Button onClick={() => editTask({ edit: true, task })}>
                    <EditIcon
                        sx={{
                            color: 'rgba(0,0,0,0.5)',
                        }}
                    />
                </Button>
                <Button onClick={() => deleteTask(id)}>
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
