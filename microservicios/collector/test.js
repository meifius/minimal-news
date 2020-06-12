// IMPORTS
require('dotenv').config();

const {db_uri_complete, test} = require('./controllers/controllers');

// SETTINGS
const DB_URI = db_uri_complete(process.env.DB_URI, process.env.DB_PASSWORD);

;( async() => {
    setInterval(() =>{
        console.log('Text')
    }
        ,5000
    );
})()