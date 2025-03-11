import express, { NextFunction, Request, Response} from 'express';
import cors from 'cors';
import axios from 'axios';
import { Todo } from './models/todo.model';
import dotenv from 'dotenv';


const app = express();
const port = 3000;

dotenv.config();

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
    
    const endpoint = process.env.URL_API ?? '';
    console.log(endpoint);

    try {
        const response = await axios.get(endpoint);
        res.send(response.data);
    } catch (error) {
        console.log(error);
        res.send(500).json(error);
    }

});

