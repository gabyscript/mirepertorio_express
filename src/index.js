
const express = require('express');
const app = express();

const indexRoutes = require('./routes/indexRoutes');

app.use(express.static(__dirname + '../public'));
app.use(express.json());

app.use('/', indexRoutes);

app.use('*', (req, res) => {
    res.send("Ruta no encontrada/ruta errónea")
})

app.listen(3000, console.log("Servidor activo"));

