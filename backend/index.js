// INDEX

//IMPORT
const app = require('./server')
var path = require('path');
require('dotenv').config();

// LISTEN by HTTP server
app.listen(app.get('port'), ()=> {
    console.log(`Server is running on PORT: ${app.get('port')}`);
});