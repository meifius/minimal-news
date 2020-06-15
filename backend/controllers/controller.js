// IMPORTAR
const MongoClient = require('mongodb').MongoClient;

// FUNCIONES

/**
 * 
 * @param {String} uri : 
 * @param {OBJ JS} filter : Es un objecto que hacer filtro
 */
function pedidoNoticiasJson (uri, filter) {
    return new Promise ( async (res, rej) => {
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(function (err, client) {
            if (err) {
				rej(err)
				client.close()
				process.exit(1)
            }
            
            const db = client.db('news_sources');
            const collection = db.collection('news');

            collection.find(filter).toArray( (err, noticias) => {
				res(noticias);
			});
        });
    });
}

/**
 * 
 * @param {String} uri : URI de la Base de Datos
 * @param {String} password : Password de la Base de Datos
 * 
 * @return {String} db_uri_complete : URI completa
 */
function db_uri_complete (uri, password) {
    const patron_pass = '<password>';
    return uri.replace(patron_pass, password)
}


// EXPORTAR
module.exports = {
    pedidoNoticiasJson,
    db_uri_complete,
}