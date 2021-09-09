import express, { json, urlencoded } from 'express';
import { conectarBD } from './config/db.config.js';
import {usuarioRoutes} from './routes/usuario.routes.js';

const app = express();
const port = 8000;


app.use(json());
app.use(urlencoded({extended: true}));

conectarBD();

usuarioRoutes(app);




app.listen(port, () => console.log('Servidor escuchando en http://localhost:'+port));