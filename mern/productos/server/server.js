const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');


app.get('/api/hello', (req, res) => {
    res.json({message: 'Helo World!!!!'});
});

require('./routes/product.route')(app);


app.listen(8000, () => console.log('Servidor escuchando en el puerto 8000'));