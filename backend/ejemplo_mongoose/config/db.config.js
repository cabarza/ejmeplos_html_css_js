const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/bd_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a la BD'))
.catch(error => console.error('Error al conectarse a la BD', error));