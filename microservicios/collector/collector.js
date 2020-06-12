// IMPORTS
require('dotenv').config();

const {db_uri_complete, test, fuentes} = require('./controllers/controllers');

// SETTINGS
const DB_URI = db_uri_complete(process.env.DB_URI, process.env.DB_PASSWORD);

// PROGRAM
( async () => {
    // Pedido de las fuentes de noticias a la DB
    const noticias_fuentes = await fuentes(DB_URI);
    
    // Coleccion de Noticias de forma Periodica
    setInterval( () => {
        // Fetch de Array de Noticias Crudas

        // Conversion del Array de Noticias XML to JS

        // Standarizacion de Noticias

        // Verificacion de Noticias Repetidas

        // Guardado de Noticias

        // Test
        test(noticias_fuentes)
    }
        ,process.env.COLLECTOR_TIME_QUERY_NEWS_MILLS
    );

} ) ();



// test
// console.log(DB_URI)

