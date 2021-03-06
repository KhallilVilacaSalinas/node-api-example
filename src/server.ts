import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './routes/apiPg';
import apiMongo from './routes/apiMongo';
import { mongoConnect } from './instances/mongo';

dotenv.config();

mongoConnect();

const server = express();

server.use(cors({
    origin: '*',
}));

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json())
server.use(express.urlencoded({ extended: true }));

server.use('/pg',apiRoutes);
server.use('/mongo',apiMongo);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({
        error: 'End point not found'
    })
});

server.listen(process.env.PORT)