require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000;

//Funciones rutas (Middleware)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rutas servidor (Routes)
app.use(require('./routes/index'));

// Contenido estático (Static content)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, function () {
    console.log('Server listening on port ${port}!');
})

