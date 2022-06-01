import { Box, Container, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ContextProvider from './context/Context';

function App() {
    return (
        <ContextProvider>
            <Container maxWidth='md'>
                <Typography
                    variant='h4'
                    textAlign='center'
                    color='primary'
                    paddingY={3}
                >
                    CRUD with React
                </Typography>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                >
                    <TaskForm />
                    <TaskList />
                </Box>
            </Container>
        </ContextProvider>
    );
}

export default App;
