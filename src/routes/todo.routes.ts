import express, {Request, Response} from "express";
import axios from "axios";
import {Todo} from "../models/todo.model";

const todoRoutes = express.Router();
const URL_API = process.env.URL_API ?? '';

todoRoutes.get('', async (req: Request, res: Response) => {
    try {
        const response = await axios.get<Todo[]>(URL_API);
        const todos: Todo[] = response.data;
        res.send(todos);
    } catch (error) {
        console.log(error);
        res.send(500).json(error);
    }
});

todoRoutes.get('/:id', async (req: Request, res: Response) => {
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

todoRoutes.post('', async (req: Request, res: Response) => {
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


todoRoutes.put('/:id', async (req: Request, res: Response) => {
    const id: number = +req.params.id;
    try {
        const response = await axios.put<Todo>(`${URL_API}/${id}`);
        const todo = response.data;
        res.send(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

todoRoutes.delete('/:id', async (req: Request, res: Response) => {
    const id: number = +req.params.id;
    try {
        const response = await axios.delete(`${URL_API}/${id}`);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

export default todoRoutes;