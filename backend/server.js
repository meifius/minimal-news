// SERVER woth Express framework
const express = require('express');
const path = require('path');
require('dotenv').config();

// INITIALIZATIONS
const app = express();

// SETTINGS
// Seteo del puerto en donde escuchar
app.set('port', process.env.PORT || 3000);

// MIDDLEWARES
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// ROUTES handle by Express
app.get('/api/v0.1/news', (req, res) => {
    res.status(200).send('News')
    return;
});

app.get('/api/*', (req, res) => {
    res.status(200).send('JSON con informacion de equivocado')
    console.log('pedieron Json')
    return;
});

app.get('/*', (req, res) => {
    // res.sendFile(path.join(__dirname + '/public/basic.html'));
    res.status(200).send("<h1>Hola, Pagina Principal</h1>")
    console.log('Response OK')
    return;
});

// EXPORT
module.exports = app;