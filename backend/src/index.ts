import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Database } from './utils/database';
import usuariosRouter from './routers/usuarios.router';
import grupoRouter from './routers/grupos.router'
import conversacionRouter from './routers/conversaciones.router'
import llamadasRouter from './routers/llamadas.router'


//Stephany Nicole Lopez Matamoros 

//Para levantar backend: Entrar a carpeta backend (cd backend)
//terminal 1: npx tsc --watch
//terminal 2: npx nodemon dist/index.js


dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const database:Database = new Database();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

app.use('/usuarios', usuariosRouter);
app.use('/conversaciones', conversacionRouter);
app.use('/grupos', grupoRouter);
app.use('/llamadas', llamadasRouter);



app.get('/', (req: Request, res: Response) => {
    res.send('Servidor examen 2');
});

app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
});
