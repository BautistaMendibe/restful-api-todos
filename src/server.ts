import express, { Request, Response} from 'express';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());


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
app.get('/todos', (req: Request, res: Response) => {
    res.json(todos);    
});

