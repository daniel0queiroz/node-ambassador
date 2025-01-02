import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors( {
    origin: 'http://localhost:8080'
}));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});