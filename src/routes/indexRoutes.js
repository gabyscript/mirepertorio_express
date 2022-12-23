
const cancionesRoutes = require('./cancionesRoutes');
const indexController = require('../controllers/indexController');

const express = require('express');
const app = express();


app.get('/', indexController.show);
app.use('/canciones', cancionesRoutes);

module.exports = app;