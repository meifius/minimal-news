// SERVER woth Express framework
const express = require('express');
const path = require('path');
require('dotenv').config();

// INITIALIZATIONS
const app = express();

// CONSTANTS
const PORT = 3000;

// SETTINGS
// Seteo del puerto en donde escuchar
app.set('port', process.env.PORT || PORT);

// MIDDLEWARES
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// ROUTES handle by Express
app.get('/api/v0.1/news', (req, res) => {
    res.status(200).send('News')
    console.log('NEWS!!!')
    console.log(process.env.DB_URI)
    console.log(process.env.DB_URI.replace('<password>', process.env.DB_PASSWORD))
});

app.get('/api/*', (req, res) => {
    res.status(200).send('JSON con informacion de equivocado')
    console.log('pedieron Json')
});

app.get('/*', (req, res) => {
    // res.sendFile(path.join(__dirname + '/public/basic.html'));
    res.status(200).send("<h1>Hola, Pagina Principal</h1>")
    console.log('Response with the Home Page');
});

// EXPORT
module.exports = app;