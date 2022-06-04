import { Box, Container, Typography } from '@mui/material';
import { Provider } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { store } from './store/store';

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
