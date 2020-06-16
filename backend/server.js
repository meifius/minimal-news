// SERVER woth Express framework
const express = require('express');
const path = require('path');
const {pedidoNoticiasJson, db_uri_complete} = require('./controllers/controller');
require('dotenv').config();

// INITIALIZATIONS
const app = express();

// CONSTANTS
const PORT = 3000;
const URL = db_uri_complete(process.env.DB_URI, process.env.DB_PASSWORD);

// SETTINGS
// Seteo del puerto en donde escuchar
app.set('port', process.env.PORT || PORT);

// MIDDLEWARES
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'..','frontend','public')));
app.use(express.json());

// ROUTES handle by Express
app.get('/', (req, res) => {
    res.status(200).sendFile('index.html');
    console.log('Visitan la Home');
});

app.get('/api/v0.1/news', async (req, res) => {
    console.log('Preguntan en la API')
    const noticiasJson = await pedidoNoticiasJson(URL, {});
    res.status(200).json( noticiasJson );
    console.log('NEWS!!!');
});

app.get('/api/*', (req, res) => {
    res.status(404).json({status: "error"}); // --> JSEND
    console.log('Perdieron Json');
});


// EXPORT
module.exports = app;