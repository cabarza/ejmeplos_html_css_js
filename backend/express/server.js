const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const datos = [];

app.get('/api/hello', (req, res) => {
    res.json({
        mensaje: 'Hola Mundo!!!'
    })
});

app.get('/api/hello/:name', (req, res) => {
    res.json({
        mensaje: `Hola ${req.params.name}!!!`
    })
});

app.get('/api/data', (req, res) => {
    res.json({
        data: datos
    });
});

app.get('/api/data/:id', (req, res) => {
    const obj = datos.find(o => o.id == req.params.id);
    res.json({
        data: obj
    });
});

app.post('/api/data', (req, res) => {
    const index = datos.findIndex(o => o.id == req.body.id);
    if(index < 0) {
        datos.push(req.body);
        res.json({
            mensaje: 'Elemento creado exitosamente!!!!'
        });
    } else {
        res.status(500).json({
            error: true,
            mensaje: 'Elemento ya existe'
        });
    }
});

app.put('/api/data/:id', (req, res) => {
    const index = datos.findIndex(o => o.id == req.params.id);
    if(index >= 0) {
        datos.splice(index, 1, req.body);
        res.json({
            mensaje: 'Elemento actualizado exitosamente!!!!'
        });
    } else {
        res.status(500).json({
            error: true,
            mensaje: 'Elemento no existe'
        });
    }
});

app.delete('/api/data/:id', (req, res) => {
    const index = datos.findIndex(o => o.id == req.params.id);
    if(index >= 0) {
        datos.splice(index, 1);
        res.json({
            mensaje: 'Elemento eliminado exitosamente!!!!'
        });
    } else {
        res.status(500).json({
            error: true,
            mensaje: 'Elemento no existe'
        });
    }
});

app.listen(port, () => {
    console.log(`El servidor esta arriba e el puerto ${port}`);
})
