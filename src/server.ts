import express, { NextFunction, Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import todoRoutes from "./routes/todo.routes";

const app = express();
const port = 3000;
app.use(cors());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error.message);
    res.status(500).json('Error del servidor');
});

app.listen(port, () => {
    console.log(`Server running and listen in port: ${port}`);
});

app.use('/todos', todoRoutes);