import express, { NextFunction, Request, Response} from 'express';
import cors from 'cors';
import axios from 'axios';
import { Todo } from './models/todo.model';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;
const URL_API = process.env.URL_API ?? '';

app.use(cors());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error.message);
    res.status(500).json('Error del servidor');
});

app.listen(port, () => {
    console.log(`Server running and listen in port: ${port}`);
});

// Routers
app.get('/todos', async (req: Request, res: Response) => {    
    try {
        const response = await axios.get<Todo[]>(URL_API);
        const todos: Todo[] = response.data;
        res.send(todos);
    } catch (error) {
        console.log(error);
        res.send(500).json(error);
    }
});

app.get('/todos/:id', async (req: Request, res: Response) => {
    const id: number = +req.params.id;

    try {
        const response = await axios.get<Todo>(`${URL_API}/${id}`);
        const todo: Todo = response.data;

        res.send(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

app.post('/todos', async (req: Request, res: Response) => {
    const todo: Todo = req.body;

    try {
        const response = await axios.post<Todo>(URL_API, todo);
        const todoId: Todo = response.data;
        res.send(todoId);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});
