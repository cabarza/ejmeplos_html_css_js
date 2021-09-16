const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use( cookieParser() );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');


app.get('/api/hello', (req, res) => {
    res.json({message: 'Helo World!!!!'});
});

require('./routes/user.routes')(app);
require('./routes/product.route')(app);


app.listen(8000, () => console.log('Servidor escuchando en el puerto 8000'));