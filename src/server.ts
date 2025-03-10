import express from 'express';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());


app.listen(() => {
    console.log(`Server running and listen in port: ${port}`);
})





