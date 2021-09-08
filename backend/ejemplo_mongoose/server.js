const express = require('express');
const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/db.config');

require('./routes/usuario.routes')(app);




app.listen(port, () => console.log('Servidor escuchando en http://localhost:'+port));