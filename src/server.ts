import express, { NextFunction, Request, Response} from 'express';
import cors from 'cors';
import axios from 'axios';


const app = express();
const port = 3000;

app.use(cors());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error.message);
    res.status(500).json('Error del servidor');
})

app.listen(port, () => {
    console.log(`Server running and listen in port: ${port}`);
});


let todos: Todo[] = [
    {
        userId: 3,
        id: 1,
        title: 'Aprendiento rest api',
        completed: false
    },
    {
        userId: 4,
        id: 2,
        title: 'TypeScripts con express',
        completed: true
    },  
]


// Routers
//app.get('/todos', async (req: Request, res: Response) => {
//    
//    const endpoint = process.env.URL_API ?? '';
//    const post: Todo[] = await axios.get(endpoint);
//
//    res.send(post)
//
//});

